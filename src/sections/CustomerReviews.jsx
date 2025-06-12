import { motion } from "framer-motion";
import { reviews } from "../constants/index"; // Import your reviews data

const CustomerReviews = () => {
  return (
    <section className="w-full py-10 bg-pale-blue padding">
      <div className="mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What Our <span className="text-coral-red">Customers</span> Say
        </motion.h2>
        <p className="text-gray-600 text-lg mt-3">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>

        {/* Reviews Grid */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.customerName}
              className="p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Customer Image */}
              <img
                src={review.imgURL}
                alt={review.customerName}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              {/* Name & Stars */}
              <h3 className="text-xl font-semibold text-gray-900">
                {review.customerName}
              </h3>
              <div className="flex justify-center mt-2">
                <span className="text-coral-red font-bold mr-1">★</span>({" "}
                {review.rating})
              </div>
              {/* Feedback */}
              <p className="text-gray-600 mt-3">{review.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
