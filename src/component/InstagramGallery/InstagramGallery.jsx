import gallery from "../../data/gallery";
import { FaInstagram } from "react-icons/fa";

const InstagramGallery = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h4 className="text-center text-[#C9A227] uppercase tracking-[4px]">
          Instagram
        </h4>

        <h2 className="text-5xl font-bold text-center mt-4">
          Follow Our Journey
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Explore our latest jewellery collections and styling inspiration.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">

          {gallery.map((item) => (

            <div
              key={item.id}
              className="overflow-hidden rounded-3xl group"
            >

              <img
                src={item.image}
                alt=""
                className="w-full h-[350px] object-cover group-hover:scale-110 duration-500"
              />

            </div>

          ))}

        </div>

        <div className="flex justify-center mt-12">

          <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white duration-300">

            <FaInstagram />

            Follow Us

          </button>

        </div>

      </div>

    </section>
  );
};

export default InstagramGallery;