
import { FaArrowRight, FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { VscDiffAdded } from "react-icons/vsc";
import { Link } from "react-router-dom";
const Hotel = ({ hotel }) => {
  console.log(hotel);
  return (
    <div className="bg-base-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-center">
        <div className="mb-4">
          <h1 className="text-xl font-bold text-gray-800">{hotel.name}</h1>
          <p className="text-sm text-gray-500">Hotel ID: {hotel.id}</p>
        </div>
        <div className="flex justify-center items-center">
          <Link to={`/dashboard/addroom/${hotel.id}`}>
            <button className="mt-6 flex items-center gap-5 justify-center w-full bg-blue-200 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
              Room Add <VscDiffAdded />
            </button>
          </Link>
        </div>
      </div>

      <div className="border-t pt-4">
        <p className="text-gray-700">
          <span className="font-semibold">Address: </span>
          {hotel.address}
        </p>
      </div>

      <div className="flex space-x-2">
        <Link to={`/dashboard/hotel/${hotel.id}`}>
          <button className="mt-6 flex items-center gap-5 justify-center w-full bg-blue-200 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
            Details <FaArrowRight />
          </button>
        </Link>
        <Link>
          <button className="mt-6 flex items-center gap-5 justify-center w-full bg-blue-200 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
            Update <FaEdit />
          </button>
        </Link>
        <Link>
          <button className="mt-6 flex items-center gap-5 justify-center w-full bg-blue-200 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
            Delete <FaTrash />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hotel;
