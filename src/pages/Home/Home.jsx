import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Hero from "../../component/Hero/Hero";
import Footer from "../../component/Footer/Footer";
import FeaturedCollections from "../../component/FeaturedCollections/FeaturedCollections";
import NewArrivals from "../../component/NewArrivals/NewArrivals";
import WhyChooseUs from "../../component/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../component/Testimonials/Testimonials";
import InstagramGallery from "../../component/InstagramGallery/InstagramGallery";
import Newsletter from "../../component/Newsletter/Newsletter";
import ScrollToTopButton from "../../component/ScrollToTopButton";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedCollections />

      <NewArrivals />

      <WhyChooseUs />

      <Testimonials />

      <InstagramGallery />
 
 <Newsletter />

      <Footer />

      <ScrollToTopButton />
    </>
  );
};

export default Home;
