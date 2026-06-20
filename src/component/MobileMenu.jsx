import { Link } from "react-router-dom";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[280px bg-white shadow-2xl z-50 transition-all  duration-300

      ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="p-8">
        <button onClick={() => setOpen(false)} className="text-3xl">
          ✕
        </button>

        <div className="flex flex-col gap-8 mt-12 text-xl">
          <Link to="/">Home</Link>

          <Link to="/shop">Shop</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/wishlist">Wishlist</Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
