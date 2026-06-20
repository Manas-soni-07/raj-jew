import { useState } from "react";

import CategoryFilter from "../../component/CategoryFilter";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import ProductGrid from "../../component/ProductGrid";
import SearchBar from "../../component/SearchBar";
import ShopBanner from "../../component/ShopBanner";

const Shop = () => {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  return (
    <>
      <Navbar />

      <ShopBanner />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <SearchBar search={search} setSearch={setSearch} />

        <div className="mt-8">
          <CategoryFilter category={category} setCategory={setCategory} />
        </div>

        <div className="mt-12">
          <ProductGrid search={search} category={category} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
