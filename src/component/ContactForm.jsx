const ContactForm = () => {
  return (
    <form className="space-y-6">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-4 border rounded-xl outline-none"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-4 border rounded-xl outline-none"
      />

      <input
        type="text"
        placeholder="Subject"
        className="w-full p-4 border rounded-xl outline-none"
      />

      <textarea
        rows="6"
        placeholder="Your Message"
        className="w-full p-4 border rounded-xl outline-none"
      />

      <button
        className="
        bg-[#C9A227]
        text-white
        px-8
        py-4
        rounded-full
        "
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
