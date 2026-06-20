import React from "react";

const ProductGallery = () => {
  return (
    <div>
      <img
        src="/images/ring1.jpeg"
        className="w-full h-[550px] object-cover rounded-3xl"
      />

      <div className="flex gap-4 mt-4">
        <img
          src="/images/ring1.jpeg"
          className="w-24 h-24 rounded-xl object-cover"
        />

        <img
          src="/images/ring1.jpeg"
          className="w-24 h-24 rounded-xl object-cover"
        />

        <img
          src="/images/ring1.jpeg"
          className="w-24 h-24 rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
