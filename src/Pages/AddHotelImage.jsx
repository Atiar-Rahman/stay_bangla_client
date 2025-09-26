import React from "react";

const AddRoomImage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center py-12">
      <div className="w-full max-w-lg bg-base-100 shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-base-800 mb-6 text-center">
          Upload Room Image
        </h1>

        <form className="space-y-5">
          {/* Hotel Name */}
          <div>
            <label className="block text-base-700 font-semibold mb-1">
              Hotel Name
            </label>
            <input
              type="text"
              placeholder="Enter Hotel Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-base-700 font-semibold mb-1">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Caption */}
          <div>
            <label className="block text-base-700 font-semibold mb-1">
              Caption
            </label>
            <input
              type="text"
              placeholder="Enter image caption"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-base-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              rows="3"
              placeholder="Enter image description"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-5 h-5 accent-blue-600" />
            <label className="text-gray-700 font-semibold">
              Featured Image
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Upload Image
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoomImage;
