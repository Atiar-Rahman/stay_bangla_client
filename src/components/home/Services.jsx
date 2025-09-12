import React from "react";
import s2 from '../../assets/service/s1.jpeg'
import s3 from "../../assets/service/s2.jpeg";
import s1 from "../../assets/service/s3.jpeg";
import s4 from "../../assets/service/s4.jpeg";
import s5 from "../../assets/service/s5.jpeg";
import {motion} from 'motion/react'

const Services = () => {
  const services = [
    {
      image: s1,
      title: "Free Wi-Fi",
      description:
        "Stay connected with fast and reliable internet throughout the hotel.",
    },
    {
      image: s2,
      title: "24/7 Room Service",
      description:
        "Enjoy meals and snacks at any time with our round-the-clock room service.",
    },
    {
      image: s3,
      title: "Swimming Pool",
      description:
        "Relax and unwind in our clean and well-maintained swimming pool.",
    },
    {
      image: s4,
      title: "Gym & Fitness",
      description:
        "Stay fit during your stay with our fully equipped gym facilities.",
    },
    {
      image: s5,
      title: "Conference Rooms",
      description:
        "Professional spaces for business meetings, conferences, and events.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <motion.div
            whileHover={{scale:1.2}}
            key={index}
            className="flex flex-col items-center text-center bg-white  rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full mb-4"
            />
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
