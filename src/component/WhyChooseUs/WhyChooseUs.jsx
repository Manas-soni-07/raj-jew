import {
  FaCertificate,
  FaShippingFast,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaCertificate />,
    title: "Certified Jewellery",
    description:
      "All our jewellery is certified and crafted with premium quality materials.",
  },

  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    description:
      "Safe and secure payment methods for a smooth shopping experience.",
  },

  {
    id: 3,
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    description:
      "Fast and reliable delivery service with secure packaging.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h4 className="text-center text-[#C9A227] uppercase tracking-[4px]">
          Why Choose Us
        </h4>

        <h2 className="text-5xl font-bold text-center mt-4">
          Crafted With Love & Trust
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          We provide premium quality jewellery with authenticity,
          elegance and timeless beauty.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((item) => (

            <div
              key={item.id}
              className="bg-[#fafafa] rounded-3xl p-10 text-center shadow-sm hover:shadow-xl duration-300"
            >

              <div className="text-5xl text-[#C9A227] flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;