import Stripe from "stripe";
import Order from "../models/Order.js";

const stripe = new Stripe(process.env.STRIPE_KEY);

export const createCheckoutSession = async (req, res) => {
  const { items, totalAmount } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "apple_pay", "google_pay"],
      mode: "payment",
      line_items: items.map(item => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.price * 100,
        },
        quantity: 1,
      })),

      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,

      shipping_address_collection: {
        allowed_countries: ["US", "CA", "IN", "GB"],
      },

      automatic_tax: { enabled: true },
    });

    return res.json({ url: session.url });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
