import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import authApiClient from "../services/auth-api-client";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const RoomForm = ({ mode = "add" }) => {
  const { hotelId, roomId } = useParams(); // hotelId always, roomId only for update
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // 🔹 Fetch room data for update
  useEffect(() => {
    if (mode === "update" && roomId) {
      setLoading(true);
      authApiClient
        .get(`/hotels/${hotelId}/rooms/${roomId}/`)
        .then((res) => {
          reset(res.data); // prefill form
          setLoading(false);
        })
        .catch((err) => {
          console.error("fetch room error", err);
          Swal.fire("Error", "Failed to fetch room data", "error");
          setLoading(false);
        });
    }
  }, [hotelId, roomId, mode, reset]);

  // 🔹 Handle form submit
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (mode === "add") {
        // POST new room
        const res = await authApiClient.post(`/hotels/${hotelId}/rooms/`, data);
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Room added successfully!",
            timer: 1500,
            showConfirmButton: false,
          });
          navigate(`/dashboard/hotel/${hotelId}`);
        }
      } else {
         // eslint-disable-next-line no-unused-vars
         const { room_type, ...payload } = data; // remove room_type
         
        // PATCH update room
        const res = await authApiClient.patch(
          `/hotels/${hotelId}/rooms/${roomId}/`,
          payload
        );
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Room updated successfully!",
            timer: 1500,
            showConfirmButton: false,
          });
          navigate(`/dashboard/hotel/${hotelId}`);
        }
      }
    } catch (err) {
      console.error("room form error", err);
      Swal.fire({
        icon: "error",
        title: err.response?.data?.detail || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen border-t-8 border-amber-900 w-1/2 mx-auto bg-base-100 flex items-center justify-center">
      <div className="w-full max-w-lg bg-base-100 shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {mode === "add" ? "Add New Room" : "Update Room"}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Room Type */}
          <div>
            <label className="block text-base-700 font-semibold mb-1">
              Room Type
            </label>
            <select
              {...register("room_type", { required: "Room type is required" })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Room Type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
              <option value="family">Family</option>
              <option value="deluxe">Deluxe</option>
            </select>
            {errors.room_type && (
              <span className="text-red-500 text-sm">
                {errors.room_type.message}
              </span>
            )}
          </div>

          {/* Price per Night */}
          <div>
            <label className="block text-base-700 font-semibold mb-1">
              Price per Night (৳)
            </label>
            <input
              type="number"
              {...register("price_per_night", {
                required: "Price is required",
              })}
              placeholder="0"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.price_per_night && (
              <span className="text-red-500 text-sm">
                {errors.price_per_night.message}
              </span>
            )}
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-base-700 font-semibold mb-1">
              Capacity
            </label>
            <input
              type="number"
              {...register("capacity", { required: "Capacity is required" })}
              placeholder="Maximum number of guests"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.capacity && (
              <span className="text-red-500 text-sm">
                {errors.capacity.message}
              </span>
            )}
          </div>

          {/* Total Rooms */}
          <div>
            <label className="block text-base-700 font-semibold mb-1">
              Total Rooms
            </label>
            <input
              type="number"
              {...register("total_rooms", {
                required: "Total rooms are required",
              })}
              placeholder="Number of rooms available"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.total_rooms && (
              <span className="text-red-500 text-sm">
                {errors.total_rooms.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              {mode === "add" ? "Add Room" : "Update Room"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomForm;
