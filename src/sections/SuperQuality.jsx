import { motion } from "framer-motion";
import shoeImage from "../assets/images/shoe8.svg"; // Import the image

const SuperQuality = () => {
  return (
    <section className="w-full py-6 padding" id="about-us">
      <div className="mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div className="flex justify-center mt-8 flex-col">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Provide You{" "}
              <span className="text-coral-red">
                Super <br />
                Quality{" "}
              </span>{" "}
              Shoes
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ensuring premium comfort and style, our <br />
              meticulously crafted footwear is designed to elevate your
              experience, providing you with unmatched quality, innovation, and
              a touch of elegance.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Our dedication to detail and excellence
              <br />
              ensures your satisfaction
            </p>
          </motion.div>
          <motion.button
            className="flex justify-center items-center w-[175px] gap-2 mt-8 px-7 py-4 bg-red-500 text-white text-lg font-semibold rounded-full undefined shadow-md hover:bg-red-600 transition leading-none font-montserrat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View details
          </motion.button>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={shoeImage} // Replace with your actual image URL
            alt="Super Quality Shoes"
            className="w-full md:w-[450px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SuperQuality;
