import products from "../data/products";
import { useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import ProductModal from "./ProductModal";


const ProductGrid = ({ search, category }) => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {

    setSelectedProduct(product);

  };

  const closeModal = () => {

    setSelectedProduct(null);

  };

  const filteredProducts = products.filter((item) => {

    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      item.category === category;

    return searchMatch && categoryMatch;

  });

  return (

    <>

      <div className="grid md:grid-cols-3 gap-8">

        {

          filteredProducts.map((product) => (

            <ProductCard

              key={product.id}

              {...product}

              openModal={openModal}

            />

          ))

        }

      </div>

      <ProductModal

        product={selectedProduct}

        closeModal={closeModal}

      />

    </>

  );

};

export default ProductGrid;