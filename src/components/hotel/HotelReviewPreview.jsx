import { Star } from "lucide-react"; // icon library (lucide-react)
import useAuthContext from "../../hook/useAuthContext";

const HotelReviewPreview = ({ review, handleDelete, setReviewId }) => {
  const { user } = useAuthContext();

  return (
    <div className="bg-base-100 shadow-lg rounded-xl p-6 mb-4 border border-gray-200">
      {/* Hotel Name + Rating */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">
          {review.hotel_name}
        </h2>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < review.rating
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-md font-medium text-gray-700 italic">
        "{review.title}"
      </h3>

      {/* Comment */}
      <p className="text-base-600 mt-2">{review.comment}</p>

      {/* User & Status */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>
          By: <strong>{review.user_email}</strong>
        </span>
        <span
          className={`px-2 py-1 rounded-md text-xs font-semibold ${
            review.is_approved
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {review.is_approved ? "Approved" : "Pending"}
        </span>
        <span>
          {user.is_staff && (
            <button
              className="btn btn-sm btn-outline"
              onClick={() => handleDelete(setReviewId(review.id))}
            >
              Delete
            </button>
          )}
        </span>
      </div>

      {/* Dates */}
      <div className="mt-3 text-xs text-base-400">
        <p>Created: {new Date(review.created_at).toLocaleString()}</p>
        <p>Updated: {new Date(review.updated_at).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default HotelReviewPreview;
