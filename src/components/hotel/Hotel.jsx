import { FaArrowRight, FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { VscDiffAdded } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../hook/useAuthContext";
import authApiClient from "../../services/auth-api-client";
import Swal from "sweetalert2";
import { useState } from "react";
import Loading from "../Loading";
import {motion} from 'motion/react'
const Hotel = ({ hotel }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  // console.log(hotel);
  // hotel delete operaion
  const handleHotelDelete = async (hotelId) => {
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
        const res = await authApiClient.delete(`/hotels/${hotelId}`);
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
    navigate('/dashboard')
  };

  if (loading){
    return <Loading/>
  }
  return (
    <motion.div
      whileHover={{ scale: 1.002 }}
      whileTap={{ scale: 0.9 }}
      className="bg-base-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex justify-between items-center">
        <div className="mb-4">
          <h1 className="text-xl font-bold text-gray-800">{hotel.name}</h1>
          <p className="text-sm text-gray-500">Hotel ID: {hotel.id}</p>
        </div>
        {(user?.is_staff || user?.is_supervisor) && (
          <div className="flex justify-center items-center mb-6">
            <Link to={`/dashboard/addroom/${hotel.id}`}>
              <button className="mt-6 cursor-pointer flex items-center gap-5 justify-center w-full bg-blue-200 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
                Room Add <VscDiffAdded />
              </button>
            </Link>
          </div>
        )}
      </div>

      <div className="border-t pt-4">
        <p className="text-gray-700">
          <span className="font-semibold">Address: </span>
          {hotel.address}
        </p>
      </div>

      <div className="flex space-x-2">
        <Link to={`/dashboard/hotel/${hotel.id}`}>
          <button className="mt-6 cursor-pointer flex items-center gap-5 justify-center w-full bg-blue-200 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
            Details <FaArrowRight />
          </button>
        </Link>
        {(user?.is_staff || user?.is_supervisor) && (
          <div className="flex gap-3">
            <Link to={`/dashboard/hotel/update/${hotel.id}`}>
              <button className="mt-6 cursor-pointer flex items-center gap-5 justify-center w-full bg-blue-200 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
                Update <FaEdit />
              </button>
            </Link>
            <Link>
              <button
                onClick={() => handleHotelDelete(hotel.id)}
                className="mt-6 cursor-pointer flex items-center gap-5 justify-center w-full bg-blue-200 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Delete <FaTrash />
              </button>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Hotel;
