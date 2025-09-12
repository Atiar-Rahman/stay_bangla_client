import React from "react"; 
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

import Royal from "../../assets/service/Royal Suite.jpeg";
import Deluxe from "../../assets/service/Deluxe Suite.jpeg";
import Executive from "../../assets/service/Executive Suite.jpeg";
import Single from "../../assets/service/Single Room.jpeg";
import Family from "../../assets/service/Family Suite.jpeg";

const SweetSection = () => {
 const suiteData = {
   suites: [
     {
       key: "royal",
       title: "Royal Suite",
       description: "Spacious and elegant, perfect for families or executives.",
       price: 1500,
       image: Royal,
     },
     {
       key: "deluxe",
       title: "Deluxe Suite",
       description:
         "Designed for comfort and relaxation with premium facilities.",
       price: 800,
       image: Deluxe,
     },
     {
       key: "executive",
       title: "Executive Suite",
       description: "Luxury at its finest, with panoramic city views.",
       price: 1000,
       image: Executive,
     },
     {
       key: "single",
       title: "Single Room",
       description: "Ideal for solo travelers looking for comfort and privacy.",
       price: 450,
       image: Single,
     },
     {
       key: "family",
       title: "Family Suite",
       description:
         "Perfect for families with kids, with extra space and amenities.",
       price: 1200,
       image: Family,
     },
   ],
 };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {suiteData.suites.map((suite) => (
        <motion.div
          key={suite.key}
          whileHover={{ scale: 1.05 }}
          className="bg-base-100 shadow-xl rounded-2xl overflow-hidden"
        >
          <img
            src={suite.image}
            alt={suite.title}
            className="w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{suite.title}</h3>
            <p className="text-gray-600 mb-4">{suite.description}</p>
            <p className="text-indigo-600 font-bold">৳{suite.price} / Night</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SweetSection;
