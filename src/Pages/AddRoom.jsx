import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import authApiClient from "../services/auth-api-client";
import Swal from "sweetalert2";

const AddRoom = () => {
  const {register, handleSubmit,formState:{errors}} = useForm()
  const {hotelId} = useParams()
  const handleAddRooms = async(data)=>{
      // console.log(data,hotelId)

      try{  
         const res = await authApiClient.post(`/hotels/${hotelId}/rooms/`,{...data,id:hotelId});
         if (res.status === 201){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Room added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
         }
      }catch(err){
        // console.log('room added err',err)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `this type room are added ${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
  }


  return (
    <div className="min-h-screen border-t-8 border-t-amber-800 rounded-2xl w-1/2 mx-auto bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add New Room
        </h1>

        <form onSubmit={handleSubmit(handleAddRooms)} className="space-y-5">
          {/* Room Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Room Type
            </label>
            <select
              {...register("room_type",{required:"room type selecting is required"})}
              className="w-full border  border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <label className="block text-gray-700 font-semibold mb-1">
              Price per Night (৳)
            </label>
            <input
              type="number"
              {...register("price_per_night",{required:"price_per_night is required"})}
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
            <label className="block text-gray-700 font-semibold mb-1">
              Capacity
            </label>
            <input
              type="number"
              {...register("capacity",{required:"Capacity is required"})}
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
            <label className="block text-gray-700 font-semibold mb-1">
              Total Rooms
            </label>
            <input
              type="number"
              {...register("total_rooms",{required:"total room number is required"})}
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
            <button className="bg-blue-200 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
              Add Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoom;
