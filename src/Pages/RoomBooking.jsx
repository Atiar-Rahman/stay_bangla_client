import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../services/api-client";

const RoomBooking = () => {
  const { hotelId, roomId } = useParams();
  const [roomType, setRoomType] = useState("");

  useEffect(() => {
    // Fetch hotel data by ID
    apiClient
      .get(`/hotels/${hotelId}/`)
      .then((res) => {
        const hotel = res.data;
        const room = hotel.rooms.find((r) => String(r.id) === String(roomId));
        if (room) {
          setRoomType(room.room_type);
        } else {
          console.warn("Room not found in this hotel.");
        }
      })
      .catch((err) => {
        console.error("Error fetching hotel data:", err);
      });
  }, [hotelId, roomId]);

  return (
    <div className="flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Room Booking Form
        </h1>
        <form className="space-y-4">
          {/* Room Type */}
          <div>
            <label
              htmlFor="roomType"
              className="block text-sm font-medium text-gray-700"
            >
              Room Type
            </label>
            <input
              type="text"
              id="roomType"
              name="roomType"
              value={roomType}
              readOnly
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>

          {/* Check-in */}
          <div>
            <label
              htmlFor="checkin"
              className="block text-sm font-medium text-gray-700"
            >
              Check-in Date
            </label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Check-out */}
          <div>
            <label
              htmlFor="checkout"
              className="block text-sm font-medium text-gray-700"
            >
              Check-out Date
            </label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Number of Guests */}
          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-700"
            >
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Number of Rooms */}
          <div>
            <label
              htmlFor="rooms"
              className="block text-sm font-medium text-gray-700"
            >
              Number of Rooms
            </label>
            <input
              type="number"
              id="rooms"
              name="rooms"
              min="1"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomBooking;
