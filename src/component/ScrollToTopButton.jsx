import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollTop}
        className="
        fixed
        bottom-6
        right-6
        w-14
        h-14
        rounded-full
        bg-[#C9A227]
        text-white
        shadow-xl
        z-50
        "
      >
        <FaArrowUp className="mx-auto" />
      </button>
    )
  );
};

export default ScrollToTopButton;
