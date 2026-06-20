import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-24 bg-[#fafafa]">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h4 className="text-[#C9A227] uppercase tracking-[4px]">
          Newsletter
        </h4>

        <h2 className="text-5xl font-bold mt-4">
          Stay Updated
        </h2>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Subscribe to receive updates about our newest jewellery
          collections, offers and exclusive designs.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-[450px] px-6 py-4 rounded-full border border-gray-300 outline-none focus:border-[#C9A227]"
          />

          <button className="px-10 py-4 rounded-full bg-[#C9A227] text-white font-semibold hover:opacity-90 transition">

            Subscribe

          </button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;