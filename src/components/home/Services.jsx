import React from "react";
import icon1 from "../../assets/sm1.png";
import icon2 from "../../assets/sm1.png";
import icon3 from "../../assets/sm1.png";
import icon4 from "../../assets/sm1.png";
import icon5 from "../../assets/sm1.png";

const Services = () => {
  const services = [
    {
      image: icon1,
      title: "Free Wi-Fi",
      description:
        "Stay connected with fast and reliable internet throughout the hotel.",
    },
    {
      image: icon2,
      title: "24/7 Room Service",
      description:
        "Enjoy meals and snacks at any time with our round-the-clock room service.",
    },
    {
      image: icon3,
      title: "Swimming Pool",
      description:
        "Relax and unwind in our clean and well-maintained swimming pool.",
    },
    {
      image: icon4,
      title: "Gym & Fitness",
      description:
        "Stay fit during your stay with our fully equipped gym facilities.",
    },
    {
      image: icon5,
      title: "Conference Rooms",
      description:
        "Professional spaces for business meetings, conferences, and events.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
