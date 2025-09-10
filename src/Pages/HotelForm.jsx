import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import authApiClient from "../services/auth-api-client";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const HotelForm = ({ mode = "add" }) => {
  const { id } = useParams(); // hotel id for update
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // 🔹 Fetch hotel data for update
  useEffect(() => {
    if (mode === "update" && id) {
      authApiClient
        .get(`/hotels/${id}/`)
        .then((res) => {
          const hotel = res.data;
          // set values in form
          reset(hotel);
        })
        .catch((err) => console.log("fetch hotel error", err));
    }
  }, [id, mode, reset]);

  // 🔹 Handle form submit
  const onSubmit = async (data) => {
    setLoading(true)
    try {
      if (mode === "add") {
        // POST new hotel
        const res = await authApiClient.post("/hotels/", data);
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Hotel added successfully!",
            timer: 1500,
            showConfirmButton: false,
          });
          navigate("/dashboard/showhotel");
        }
      } else {
        // Patch update hotel
        const res = await authApiClient.patch(`/hotels/${id}/`, data);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Hotel updated successfully!",
            timer: 1500,
            showConfirmButton: false,
          });
          navigate("/dashboard/showhotel");
        }
      }
      setLoading(false)
    } catch (err) {
      console.log("hotel form error", err);
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
      });
      setLoading(false)
    }
  };
  if(loading){
    return <Loading/>
  }

  return (
    <div className="min-h-screen border-t-8 border-amber-900 w-1/2 mx-auto bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {mode === "add" ? "Add New Hotel" : "Update Hotel"}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              {...register("name", { required: "Hotel name is required" })}
              placeholder="Enter Hotel Name"
              className="w-full border p-3 rounded-lg"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Address:
            </label>
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              placeholder="Enter Address"
              className="w-full border p-3 rounded-lg"
            />
            {errors.address && (
              <span className="text-red-500">{errors.address.message}</span>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              City:
            </label>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              placeholder="Enter City"
              className="w-full border p-3 rounded-lg"
            />
            {errors.city && (
              <span className="text-red-500">{errors.city.message}</span>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Description:
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Write a short description"
              rows={4}
              className="w-full border p-3 rounded-lg resize-none"
            ></textarea>
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Amenities:
            </label>
            <input
              type="text"
              {...register("amenities", { required: "Amenities are required" })}
              placeholder="WiFi, Pool, Gym, etc."
              className="w-full border p-3 rounded-lg"
            />
            {errors.amenities && (
              <span className="text-red-500">{errors.amenities.message}</span>
            )}
          </div>

          {/* Contact Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Contact Email:
            </label>
            <input
              type="email"
              {...register("contact_email", { required: "Email is required" })}
              placeholder="user@example.com"
              className="w-full border p-3 rounded-lg"
            />
            {errors.contact_email && (
              <span className="text-red-500">
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
              {...register("contact_phone", { required: "Phone is required" })}
              placeholder="+880123456789"
              className="w-full border p-3 rounded-lg"
            />
            {errors.contact_phone && (
              <span className="text-red-500">
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
              {mode === "add" ? "Submit" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelForm;
