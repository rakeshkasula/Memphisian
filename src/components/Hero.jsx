export default function Hero() {
  return (
    <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0033CC] to-[#001A66] opacity-90"></div>

      {/* Memphis Bridge Signature Line */}
      <svg
        className="absolute top-44 w-full opacity-30"
        viewBox="0 0 1440 200"
      >
        <path
          d="
            M0,100 
            Q360,-20 720,100 
            T1440,100
          "
          stroke="#E8EEFF"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      <div className="relative text-center text-white">
        <h1 className="text-5xl md:text-7xl font-playfair tracking-wide">
          Memphisian
        </h1>

        <p className="mt-4 text-xl opacity-90 font-light">
          Premium Minimal Luxury Apparel
        </p>

        <button className="mt-8 px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-full hover:opacity-90 transition">
          Shop Collection
        </button>
      </div>
    </div>
  );
}
