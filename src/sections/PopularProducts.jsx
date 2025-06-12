import { products } from "../constants";
import { motion } from "framer-motion";

const PopularProducts = () => {
  return (
    <section className="w-full px-10 padding" id="products">
      <h2 className="text-4xl font-bold text-gray-900 md:text-left text-center mb-6">
        Our <span className="text-coral-red">Popular </span> Products
      </h2>
      <p className="my-7 text-gray-600 text-lg text-center md:text-left">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.name}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.imgURL}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-2">
              <span className="text-coral-red font-bold">★</span> (4.5)
            </h3>
            <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
            <p className="text-coral-red mt-2">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
