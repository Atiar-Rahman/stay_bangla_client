import React from "react";

const AddHotel = () => {
  return (
    <div className="min-h-screen border-t-8 rounded-2xl border-amber-900 w-1/2 mx-auto bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add New Hotel
        </h1>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter Hotel Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Address:
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              City:
            </label>
            <input
              type="text"
              placeholder="Enter City"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Description:
            </label>
            <textarea
              placeholder="Write a short description"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={4}
            ></textarea>
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Amenities:
            </label>
            <input
              type="text"
              placeholder="WiFi, Pool, Gym, etc."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Contact Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Contact Email:
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Contact Phone */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Contact Phone:
            </label>
            <input
              type="text"
              placeholder="+880123456789"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
