import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";
import banner1 from '../../assets/banner/1.avif'
const HotelInfo = ({ hotel }) => {
  return (
    <div className="container mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10">
      <img
        className="w-full h-64 object-cover rounded-t-2xl"
        src={banner1}
        alt={`${hotel.name} banner`}
      />
      {/* Hotel Name */}
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-2">
        {hotel.name}
      </h1>
      <p className="text-sm text-gray-500 italic mb-4">"{hotel.slug}"</p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Address & City */}
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <FaMapMarkerAlt className="text-red-500" />
          <span>
            {hotel.address}, {hotel.city}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">Description: {hotel.description}</p>

        {/* Amenities */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Amenities:
          </h2>
          <ul className="flex flex-wrap gap-3">
            {hotel.amenities.map((amenity, index) => (
              <li
                key={index}
                className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                <FaCheckCircle /> {amenity}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-gray-700">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" /> {hotel.contact_email}
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-green-600" /> {hotel.contact_phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
