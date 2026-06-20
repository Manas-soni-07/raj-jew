import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import ProductGallery from "../../component/ProductGallery";
import ProductInfo from "../../component/ProductInfo";
import ScrollToTopButton from "../../component/ScrollToTopButton";

const ProductDetails = () => {
  return (
    <>
      <Navbar />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <ProductGallery />

            <ProductInfo />
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default ProductDetails;
