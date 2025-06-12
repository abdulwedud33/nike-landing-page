import { statistics } from "../constants/index";
import { shoes } from "../constants/index";
import { useState } from "react";
import { motion } from "framer-motion";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(bigShoe1); // Default image

  // Change image based on clicked thumbnail
  const handleClick = (shoe) => {
    setCurrentImage(shoe.bigShoe);
  };

  return (
    <section
      className="relative w-full mt-16 p-5 flex items-center justify-center bg-gray-100"
      id="Home"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-coral-red mt-10 md:mt-6 text-xl font-semibold">
            Our Summer Collection
          </p>
          <h1 className="text-4xl mt-8 md:text-7xl font-bold text-gray-900 leading-tight">
            The New Arrival
            <br /> <span className="text-coral-red">Nike </span> Shoes
          </h1>
          <p className="mt-6 text-gray-600 text-lg text-center md:text-left">
            Discover stylish Nike arrivals, quality comfort,
            <br />
            and innovation for your active life.
          </p>
          <motion.button
            className="mt-8 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-red-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>

          {/* Stats Section */}
          <div className="my-12 flex justify-around text-gray-700">
            {statistics.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image & Image Switcher */}
        <div className="flex flex-col items-center bg-[url('./assets/images/collection-background.svg')] bg-cover bg-center p-2">
          {/* Shoe Image with Animation */}
          <motion.img
            key={currentImage} // Forces re-render on image change
            src={currentImage}
            alt="Nike Shoe"
            className="w-80 md:w-[500px] object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Small Thumbnails */}
          <div className="mt-4 flex space-x-3 rounded-md">
            {shoes.map((shoe, index) => (
              <div
                key={index}
                className="relative bg-[url('./assets/images/thumbnail-background.svg')] bg-cover bg-center cursor-pointer"
                onClick={() => handleClick(shoe)} // ✅ Update big image on click
              >
                <motion.img
                  src={shoe.thumbnail}
                  alt={`Shoe Thumbnail ${index}`}
                  className={`w-20 h-20 rounded-md transition ${
                    shoe.bigShoe === currentImage
                      ? "border-2 border-red-500"
                      : "border-2 border-gray-300"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
