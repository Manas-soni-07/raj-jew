import testimonials from "../../data/testimonials";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#fafafa]">

      <div className="max-w-7xl mx-auto px-6">

        <h4 className="text-center text-[#C9A227] uppercase tracking-[4px]">
          Testimonials
        </h4>

        <h2 className="text-5xl font-bold text-center mt-4">
          What Our Customers Say
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Trusted by thousands of jewellery lovers.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl duration-300"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto object-cover"
              />

              <div className="flex justify-center gap-1 text-[#C9A227] mt-5">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="text-gray-600 text-center mt-6 leading-8">
                "{item.review}"
              </p>

              <h3 className="text-xl font-semibold text-center mt-6">
                {item.name}
              </h3>

              <p className="text-center text-gray-400">
                {item.role}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;