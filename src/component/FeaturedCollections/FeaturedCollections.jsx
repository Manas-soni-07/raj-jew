import collections from "../../data/collections";
import CollectionCard from "../CollectionCard/CollectionCard";

const FeaturedCollections = () => {

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h4 className="text-center text-[#C9A227] uppercase tracking-widest">

          Our Collections

        </h4>

        <h2 className="text-5xl font-bold text-center mt-3">

          Featured Collections

        </h2>

        <p className="text-center text-gray-500 mt-4">

          Explore our elegant and timeless jewellery collections.

        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {collections.map((item) => (

            <CollectionCard
              key={item.id}
              image={item.image}
              title={item.title}
            />

          ))}

        </div>

      </div>

    </section>

  );
};

export default FeaturedCollections;