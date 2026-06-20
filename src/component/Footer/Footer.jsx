import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-3xl font-bold text-[#C9A227]">
              JewelLux
            </h2>

            <p className="text-gray-500 mt-5 leading-7">
              Elegant jewellery crafted with love,
              timeless beauty and premium quality.
            </p>

          </div>

          <div>

            <h3 className="font-semibold text-xl mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-500">

              <li>Home</li>
              <li>Collections</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-xl mb-6">
              Collections
            </h3>

            <ul className="space-y-3 text-gray-500">

              <li>Gold Jewellery</li>
              <li>Diamond Jewellery</li>
              <li>Bridal Sets</li>
              <li>Earrings</li>
              <li>Rings</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold text-xl mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl text-[#C9A227]">

              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaPinterest />

            </div>

          </div>

        </div>

        <div className="border-t mt-16 pt-8 text-center text-gray-500">

          © 2026 JewelLux. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;