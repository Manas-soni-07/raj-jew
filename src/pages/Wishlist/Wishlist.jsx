import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { useWishlist } from "../../component/context/WishlistContext";
import ScrollToTopButton from "../../component/ScrollToTopButton";

const Wishlist = () => {
  const {
    wishlist,

    removeWishlist,
  } = useWishlist();

  return (
    <>
      <Navbar />

      <section className="min-h-screen py-24 ">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold ">My Wishlist</h1>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border rounded-3xl overflow-hidden "
              >
                <img src={item.image} className="h-80 w-full object-cover " />

                <div className="p-6">
                  <h2>{item.name}</h2>

                  <p>{item.price}</p>

                  <button
                    onClick={() => removeWishlist(item.id)}
                    className="mt-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Wishlist;
