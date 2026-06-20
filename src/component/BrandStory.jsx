import React from "react";

const BrandStory = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="/images/ring1.jpeg" className="rounded-3xl" />
          </div>

          <div>
            <h2 className="text-5xl font-bold">Our Story</h2>

            <p className="mt-8 text-gray-500 leading-8">
              Our jewellery reflects passion, craftsmanship and timeless beauty.
              Every piece is designed with attention to detail and premium
              quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
