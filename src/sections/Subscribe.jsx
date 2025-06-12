import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section
      className="w-full py-12 padding-x sm:py-32 padding"
      id="contact-us"
    >
      <div className="mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Title */}
        <motion.h2
          className="text-4xl text-black font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Sign Up for <span className="text-coral-red">Updates </span> &
          Newsletter
        </motion.h2>
        {/* Subscribe Form */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <input
            type="email"
            placeholder="subscribe@nikee.com"
            className="sm:w-80 px-4 py-3 rounded-full border-2 border-gray-400 text-gray-900 outline-none"
          />
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition">
            Sign Up
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscribe;
