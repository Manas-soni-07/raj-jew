import React from "react";

const CollectionCard = ({ image, title }) => {
  return (
    <div className="group overflow-hidden rounded-3xl shadow-md bg-white">

      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover group-hover:scale-110 duration-500"
        />

      </div>

      <div className="p-6 text-center">

        <h2 className="text-2xl font-semibold text-gray-800">
          {title}
        </h2>

        <button className="mt-4 text-[#C9A227] font-semibold">

          Explore →

        </button>

      </div>

    </div>
  );
};

export default CollectionCard;
