import React from "react";

const AddRoom = () => {
  return (
    <div className="min-h-screen border-t-8 border-t-amber-800 rounded-2xl w-1/2 mx-auto bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add New Room
        </h1>

        <form className="space-y-5">
          {/* Room Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Room Type
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Room Type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
              <option value="family">Family</option>
              <option value="deluxe">Deluxe</option>
            </select>
          </div>

          {/* Price per Night */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Price per Night (৳)
            </label>
            <input
              type="number"
              placeholder="0"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Capacity
            </label>
            <input
              type="number"
              placeholder="Maximum number of guests"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Total Rooms */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Total Rooms
            </label>
            <input
              type="number"
              placeholder="Number of rooms available"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
              Add Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoom;
