
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hotel = ({ hotel }) => {
  console.log(hotel);
  return (
    <div className="w-76 mx-auto bg-base-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-800">{hotel.name}</h1>
        <p className="text-sm text-gray-500">Hotel ID: {hotel.id}</p>
      </div>

      <div className="border-t pt-4">
        <p className="text-gray-700">
          <span className="font-semibold">Address: </span>
          {hotel.address}
        </p>
      </div>

      <Link to={`/dashboard/hotel/${hotel.id}`}>
        <button className="mt-6 flex items-center gap-5 justify-center w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
          Details <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Hotel;
