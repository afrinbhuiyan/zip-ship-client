import React from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(202, 235, 102, 0.3), 0 10px 10px -5px rgba(202, 235, 102, 0.1)",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative bg-white p-8 rounded-xl shadow-lg hover:bg-[#CAEB66] transition-all duration-500 group overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CAEB66] to-[#03373D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-[#CAEB66] opacity-10 group-hover:opacity-20 transition-all duration-700 transform scale-0 group-hover:scale-100"></div>

      <div className="text-center relative z-10">
        <motion.div
          className="group-hover:text-[#03373D] transition-colors duration-500 text-[#CAEB66] flex justify-center mb-6"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="p-5 rounded-full bg-white shadow-md group-hover:shadow-lg group-hover:bg-[#f8ffd5] transition-all duration-500">
            {React.cloneElement(service.icon, { className: "w-8 h-8" })}
          </div>
        </motion.div>

        <div className="relative inline-block mb-4">
          <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#03373D] transition-colors duration-500">
            {service.title}
          </h3>
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-[#CAEB66] w-0 group-hover:w-full"
            transition={{ duration: 0.8, type: "spring" }}
          />
        </div>

        <motion.p
          className="text-gray-600 group-hover:text-[#03373D] transition-colors duration-500 px-4 py-3 rounded-lg relative"
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          }}
        >
          {service.description}
        </motion.p>

        <motion.div className="mt-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <button className="px-6 py-2 rounded-full text-sm font-medium bg-[#03373D] text-white hover:bg-black transition-colors duration-300">
            Explore More
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
