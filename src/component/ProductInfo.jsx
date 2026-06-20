import { FaHeart } from "react-icons/fa";

const ProductInfo = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Diamond Ring</h1>

      <p className="text-3xl text-[#C9A227] mt-5">₹25,999</p>

      <div className="mt-5 text-[#C9A227]">★★★★★</div>

      <p className="text-gray-500 mt-8 leading-8">
        Elegant diamond ring crafted with premium quality and timeless design.
      </p>

      <div className="space-y-4 mt-10">
        <p>
          <strong>Category:</strong> Rings
        </p>

        <p>
          <strong>Material:</strong> White Gold
        </p>

        <p>
          <strong>Weight:</strong> 8gm
        </p>
      </div>

      <button
        className="mt-10 flex items-center gap-3 bg-[#C9A227] text-white px-8 py-4 rounded-full "
      >
        <FaHeart />
        Add To Wishlist
      </button>
    </div>
  );
};

export default ProductInfo;
