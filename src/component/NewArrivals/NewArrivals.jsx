import { useState } from "react";
import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import ProductModal from "../ProductModal";


const NewArrivals = () => {
    const [search,setSearch]=useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

const openModal = (product) => {
  setSelectedProduct(product);
};

const closeModal = () => {
  setSelectedProduct(null);
};
  return (

    <section className="py-24 bg-[#fafafa]">

      <div className="max-w-7xl mx-auto px-6">

        <h4 className="text-center text-[#C9A227] uppercase tracking-widest">
          New Collection
        </h4>

        <h2 className="text-5xl font-bold text-center mt-3">
          New Arrivals
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Discover our latest luxury jewellery pieces.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {products.map((item) => (

            <ProductCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
               openModal={openModal}
            />

          ))}

        </div>

<ProductModal

product={selectedProduct}

closeModal={closeModal}

/>
      </div>

    </section>

  );
};

export default NewArrivals;