import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";

const ClientLogosMarquee = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#03373D] mb-4">
          We've helped thousands of{" "}
          <span className="text-[#CAEB66]">sales teams</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <Marquee speed={40} direction="right" gradient={false} className="mt-6">
          {logos.reverse().map((logo, index) => (
            <motion.div
              key={`reverse-${index}`}
              whileHover={{ scale: 1.05 }}
              className="mx-8 lg:mx-12 flex items-center"
            >
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="h-6 object-contain opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientLogosMarquee;
