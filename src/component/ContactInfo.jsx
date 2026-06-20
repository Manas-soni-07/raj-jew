import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="space-y-10">
      <div>
        <FaPhoneAlt className="text-3xl text-[#C9A227]" />

        <h3 className="text-2xl font-semibold mt-3">Phone</h3>

        <p className="text-gray-500">+91 9876543210</p>
      </div>

      <div>
        <FaEnvelope className="text-3xl text-[#C9A227]" />

        <h3 className="text-2xl font-semibold mt-3">Email</h3>

        <p className="text-gray-500">info@jewellux.com</p>
      </div>

      <div>
        <FaMapMarkerAlt className="text-3xl text-[#C9A227]" />

        <h3 className="text-2xl font-semibold mt-3">Location</h3>

        <p className="text-gray-500">Bhopal, Madhya Pradesh</p>
      </div>
    </div>
  );
};

export default ContactInfo;
