import { FaStar, FaHeart } from "react-icons/fa";
import { useWishlist } from "../../component/context/WishlistContext";

const ProductCard = ({ id, image, name, price , openModal}) => {
  const { addToWishlist } = useWishlist();

  const product = {
    id,
    image,
    name,
    price,
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl duration-300 group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <button
          onClick={() => addToWishlist(product)}
          className="
          absolute
          top-4
          right-4
          z-10
          bg-white
          p-3
          rounded-full
          shadow-md
          hover:scale-110
          transition
          "
        >
          <FaHeart className="text-red-500 text-lg" />
        </button>

        <img
          src={image}
          alt={name}
          className="
          w-full
          h-[350px]
          object-cover
          group-hover:scale-110
          duration-500
          "
        />
      </div>

      {/* Content */}

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>

        <p className="text-[#C9A227] text-xl font-bold mt-2">{price}</p>

        <div className="flex gap-1 mt-3 text-[#C9A227]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <button
          onClick={() =>
            openModal({
              id,
              image,
              name,
              price,
            })
          }
          className="
mt-5
border
border-[#C9A227]
px-6
py-2
rounded-full
hover:bg-[#C9A227]
hover:text-white
"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
