import React from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../services/auth-api-client";
import Swal from "sweetalert2";

const AddHotel = () => {
  const {register,handleSubmit,formState:{errors}} = useForm()

  const handleAddHotel =async(data)=>{
    // console.log(data)
    try{
      const res = await authApiClient.post('/hotels/',data)
      // console.log(res)
      if(res.status === 201){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Hotel added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }

    }catch(err){
      console.log("hotel add error",err)
    }
  }


  return (
    <div className="min-h-screen border-t-8 rounded-2xl border-amber-900 w-1/2 mx-auto bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add New Hotel
        </h1>

        <form onSubmit={handleSubmit(handleAddHotel)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              {...register("name", { required: "Hotel name is required" })}
              placeholder="Enter Hotel Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Address:
            </label>
            <input
              type="text"
              {...register("address",{required:"address is required"})}
              placeholder="Enter Address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              City:
            </label>
            <input
              type="text"
              {...register("city", { required: "city is required" })}
              placeholder="Enter City"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.city && (
              <span className="text-red-500 text-sm">
                {errors.city.message}
              </span>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Description:
            </label>
            <textarea
              {...register("description", {
                required: "description is required",
              })}
              placeholder="Write a short description"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={4}
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Amenities:
            </label>
            <input
              type="text"
              {...register("amenities", { required: "amenities is required" })}
              placeholder="WiFi, Pool, Gym, etc."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.amenities && (
              <span className="text-red-500 text-sm">
                {errors.amenities.message}
              </span>
            )}
          </div>

          {/* Contact Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Contact Email:
            </label>
            <input
              type="email"
              {...register("contact_email", {
                required: "contact email is required",
              })}
              placeholder="user@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.contact_email && (
              <span className="text-red-500 text-sm">
                {errors.contact_email.message}
              </span>
            )}
          </div>

          {/* Contact Phone */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Contact Phone:
            </label>
            <input
              type="text"
              {...register("contact_phone", {
                required: "contact number is required",
              })}
              placeholder="+880123456789"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.contact_phone && (
              <span className="text-red-500 text-sm">
                {errors.contact_phone.message}
              </span>
            )}
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
