import { motion } from "framer-motion";
import { services } from "../constants/index";
const Services = () => {
  return (
    <section className="w-full py-10 padding-x">
      <div className="mx-auto px-10 text-center grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {/* Features */}
        {services.map((service) => (
          <motion.div
            key={service.lable}
            className="p-6 rounded-lg hover:shadow-2xl transition duration-300 shadow-lg px-10 py-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={service.imgURL}
              alt={service.lable}
              className="text-left bg-coral-red w-10 h-10 mx-auto rounded-full"
            />
            <h3 class="mt-5 font-palanquin text-2xl leading-normal font-bold">
              {service.label}
            </h3>
            <p className="text-gray-600 mt-2">{service.subtext}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
