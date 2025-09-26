import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaUser,
  FaBed,
  FaMoneyBillWave,
  FaEdit,
} from "react-icons/fa";
import { FaArrowRight, FaTrash } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import {motion} from 'motion/react'
import Swal from "sweetalert2";
import authApiClient from "../../services/auth-api-client";
import Loading from "../Loading";
const Room = ({ room }) => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // hotel delete operaion
  const handleHotelRoomDelete = async (roomId) => {
    const result = await Swal.fire({
      title: "Are you sure you want to delete this hotel?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      icon: "warning",
    });

    if (result.isConfirmed) {
      try {
        setLoading(true);
        const res = await authApiClient.delete(`/hotels/${hotelId}/rooms/${roomId}`);
        if (res.status === 204) {
          Swal.fire("Deleted!", "Hotel has been deleted.", "success");
          navigate("/dashboard/showhotel");
        }
      } catch (err) {
        Swal.fire("Error!", "Failed to delete hotel.", err);
      } finally {
        setLoading(false);
      }
    }
    navigate("/dashboard/showhotel");
  };

  
  if(loading){
    return <Loading/>
  }
  return (
    <motion.div
      whileHover={{ scale: 1.002 }}
      className=" bg-base-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Room type */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold capitalize text-base-800">
          {room.room_type} Room
        </h1>
        {room.is_available ? (
          <span className="flex items-center gap-1 text-green-600 font-medium">
            <FaCheckCircle /> Available
          </span>
        ) : (
          <span className="flex items-center gap-1 text-red-600 font-medium">
            <FaTimesCircle /> Unavailable
          </span>
        )}
      </div>

      {/* Capacity & Beds */}
      <div className="flex items-center gap-4 mb-3 text-base-600">
        <span className="flex items-center gap-2">
          <FaUser /> Capacity: {room.capacity}
        </span>
        <span className="flex items-center gap-2">
          <FaBed /> Total Rooms: {room.total_rooms}
        </span>
      </div>

      {/* Availability & Price */}
      <div className="mb-4 text-base-600">
        <p>
          <span className="font-semibold">Available Rooms: </span>
          {room.available_rooms}
        </p>
        <p className="flex items-center gap-2 text-lg font-medium text-blue-600 mt-2">
          <FaMoneyBillWave /> {room.price_per_night} ৳ / night
        </p>
      </div>

      {/* Book button */}
      <div className="flex space-x-2">
        <Link to={`/dashboard/hotel/${hotelId}/rooms/${room.id}/bookings/`}>
          <button className="mt-6 cursor-pointer flex items-center gap-5 justify-center w-full bg-blue-200 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
            booking <FaArrowRight />
          </button>
        </Link>
        <Link to={`/dashboard/hotel/${hotelId}/update/rooms/${room.id}`}>
          <button className="mt-6 cursor-pointer flex items-center gap-5 justify-center w-full bg-blue-200 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
            Update <FaEdit />
          </button>
        </Link>
        <Link>
          <button
            onClick={() => handleHotelRoomDelete(room.id)}
            className="mt-6 cursor-pointer flex items-center gap-5 justify-center w-full bg-blue-200 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Delete <FaTrash />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Room;
