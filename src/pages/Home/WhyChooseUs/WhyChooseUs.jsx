import React from "react";
import img1 from "../../../assets/Group 4.png";
import img2 from "../../../assets/Transit warehouse.png";

const services = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: img2,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: img1,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: img1,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12">
      <div className="border-y-2 border-dashed py-12 border-[#03464D]">
        {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex mb-4 items-center"
            >
              <div className="mb-6 w-[200px] h-[200px] flex items-center justify-center pr-12 mr-12 border-r-2 border-dashed border-[#03464db2]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[200px] h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#03373D] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
