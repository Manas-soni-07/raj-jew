import React from "react";

const ProductModal = ({product, closeModal}) => {

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
    >
      <div
        className="bg-white max-w-4xl w-[90%] rounded-3xl p-8 relative"
      >
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-3xl"
        >
          ✕
        </button>

        <div
          className="grid md:grid-cols-2 gap-10 "
        >
          <img
            src={product.image}
            alt={product.name}
            className="rounded-3xl h-[450px] w-full object-cover " 
          />

          <div>
            <h1
              className=" text-5xl font-bold "
            >
              {product.name}
            </h1>

            <p
              className="text-[#C9A227] text-3xl mt-5 "
            >
              {product.price}
            </p>

            <p
              className=" mt-8 text-gray-500 leading-8"
            >
              Elegant jewellery crafted with timeless beauty and premium
              quality.
            </p>

            <button
              className="mt-10 bg-[#C9A227] text-white px-8 py-4 rounded-full"
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
