import AboutHero from "../../component/AboutHero";
import BrandStory from "../../component/BrandStory";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import ScrollToTopButton from "../../component/ScrollToTopButton";
import Stats from "../../component/Stats";

const About = () => {
  return (
    <>
      <Navbar />

      <AboutHero />

      <BrandStory />

      <Stats />

      <Footer />

      <ScrollToTopButton />
    </>
  );
};

export default About;
