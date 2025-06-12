import { motion } from "framer-motion";
import offerImage from "../assets/images/offer.svg";

const SpecialOffer = () => {
  return (
    <section className="w-full py-10 padding">
      <div className="mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={offerImage} // Replace with actual image
            alt="Special Offer"
            className="w-full md:w-[450px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 my-4">
            <span className="text-coral-red">Special </span> Offer
          </h2>
          <p className="text-gray-600 text-md mb-6">
            Embark on a shopping journey that redefines your experiencewith
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="text-gray-600 text-md mb-6">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button
              className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-red-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
            <motion.button
              className="px-6 py-3 border border-gray-800 text-gray-800 text-lg font-semibold rounded-full shadow-md hover:bg-gray-800 hover:text-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffer;
