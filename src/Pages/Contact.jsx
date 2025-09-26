import React from "react";
import { FaAddressBook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SectionTitle from "../components/SectionTitle";
import { useForm } from "react-hook-form";
import apiClient from "../services/api-client";
import Swal from "sweetalert2";
const Contact = () => {
  const {register,handleSubmit,formState:{errors}} = useForm()

  const handleContact = async(data)=>{
    console.log(data)
    try{
      const res = await apiClient.post('/contacts/',data)
      console.log(res)
      if(res.status ===201){
        Swal.fire({
          title: "Contact connection me!",
          icon: "success",
          draggable: true,
        });
      }

    }catch(err){
      console.log(err)
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle
        heading={"Contact Us"}
        subHeading={
          "We'd love to hear from you! Reach out with any questions or feedback."
        }
      />
      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions about bookings, hotels, or services? Our team is
            always here to help.
          </p>

          <div className="space-y-4">
            <p className="flex space-x-2 items-center text-gray-700">
              <FaAddressBook className="text-2xl" /> <strong>Address:</strong>{" "}
              Mirpur 1, Dhaka, Bangladesh
            </p>
            <p className="flex space-x-2 items-center text-gray-700">
              <FaPhone className="text-2xl" />
              <strong>Phone:</strong> +880 1234 567890
            </p>
            <p className="flex space-x-2 items-center text-gray-700">
              <MdEmail className="text-2xl" /> <strong>Email:</strong>{" "}
              support@staybangla.com
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-base-100 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(handleContact)} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                {...register("email", { required: "valid email required" })}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                {...register("comment", { required: "message required" })}
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              {errors.comment && (
                <span className="text-red-500 text-sm">
                  {errors.comment.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full btn bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-100 transition "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
