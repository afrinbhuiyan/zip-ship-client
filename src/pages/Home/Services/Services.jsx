import React from "react";
import {
  FaShippingFast,
  FaBoxOpen,
  FaClock,
  FaMapMarkedAlt,
  FaWarehouse,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";

const serviceItems = [
  {
    icon: <FaShippingFast className="text-4xl" />,
    title: "Express Delivery",
    description:
      "Get your packages delivered in record time with our priority shipping service.",
  },
  {
    icon: <FaBoxOpen className="text-4xl" />,
    title: "Secure Packaging",
    description:
      "Professional packaging solutions to ensure your items arrive safely.",
  },
  {
    icon: <FaClock className="text-4xl" />,
    title: "Scheduled Delivery",
    description: "Choose delivery windows that work best for your schedule.",
  },
  {
    icon: <FaMapMarkedAlt className="text-4xl" />,
    title: "Nationwide Coverage",
    description: "Reliable service to all major cities and regional areas.",
  },
  {
    icon: <FaWarehouse className="text-4xl" />,
    title: "Warehouse Storage",
    description: "Secure storage solutions for your goods before distribution.",
  },
  {
    icon: <FaShieldAlt className="text-4xl" />,
    title: "Insurance Options",
    description:
      "Protect your shipments with our comprehensive coverage plans.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#03373D] rounded-2xl mt-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Our Delivery Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <ServicesCard service={service} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
