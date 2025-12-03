export default function Topbar() {
  return (
    <div className="w-full h-16 border-b border-gray-200 bg-white flex items-center justify-end px-6">
      <button
        onClick={() => {
          localStorage.removeItem("admin");
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
        className="px-4 py-1 border rounded-lg hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
}
