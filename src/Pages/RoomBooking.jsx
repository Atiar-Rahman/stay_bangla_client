import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const RoomBooking = () => {
  const { hotelId, roomId } = useParams();
  const nevigate = useNavigate()
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      room_type: "",
      check_in: "",
      check_out: "",
      num_guests: 1,
      num_rooms: 1,
    },
  });

  // Fetch room data and set form values
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await apiClient.get(`/hotels/${hotelId}/`);
        const hotel = res.data;
        const room = hotel.rooms.find((r) => String(r.id) === String(roomId));
        if (room) {
          setValue("room_type", room.room_type); // prefill room_type
        } else {
          console.warn("Room not found in this hotel.");
        }
      } catch (err) {
        console.error("Error fetching hotel data:", err);
      }
    };
    fetchRoom();
  }, [hotelId, roomId, setValue]);

  // Handle form submission
  const handleBooking = async (data) => {
    console.log("Submitted booking data:", data);
    try {
      const res = await authApiClient.post(
        `/hotels/${hotelId}/rooms/${roomId}/bookings/`,
        data
      );
      // console.log("Booking successful:", res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Your work has been saved${res.data}`,
        showConfirmButton: false,
        timer: 1500,
      });
      nevigate('/dashboard/showbooking')
    } catch (err) {
      console.error("Booking failed:", err.response?.data || err.message);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Room Booking Form
        </h1>
        <form onSubmit={handleSubmit(handleBooking)} className="space-y-4">
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
              {...register("room_type")}
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
              {...register("check_in", {
                required: "Check-in date is required",
              })}
              id="checkin"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.check_in && (
              <p className="text-red-500 text-sm">{errors.check_in.message}</p>
            )}
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
              {...register("check_out", {
                required: "Check-out date is required",
              })}
              id="checkout"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.check_out && (
              <p className="text-red-500 text-sm">{errors.check_out.message}</p>
            )}
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
              {...register("num_guests", { required: true, min: 1 })}
              id="guests"
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
              {...register("num_rooms", { required: true, min: 1 })}
              id="rooms"
              min="1"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 cursor-pointer">
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
