import React, { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";
import Swal from "sweetalert2";
import useAuthContext from "../hook/useAuthContext";
import Loading from "../components/Loading";

const ShowReview = () => {
  const [reviews, setReviews] = useState([]);
  const [hotelId, setHotelId] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = parseInt(e.target.id.value, 10);
    if (!id) {
      Swal.fire("Error", "Please provide a valid Hotel ID", "error");
      return;
    }
    setHotelId(id);
  };

  // Fetch reviews whenever hotelId changes
  useEffect(() => {
    if (!hotelId) return;

    const fetchReviews = async () => {
      setLoading(true);
      try {
        const res = await authApiClient.get(`/hotels/${hotelId}/reviews/`);
        setReviews(res.data); // Adjust if your API returns { results: [...] }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        Swal.fire("Error", "Failed to fetch reviews", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [hotelId]);

  // Handle review deletion
  const handleDelete = async (id) => {
    if (!hotelId) return;
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await authApiClient.delete(`/hotels/${hotelId}/reviews/${id}`);
        setReviews((prev) => prev.filter((review) => review.id !== id));
        Swal.fire("Deleted!", "The review has been deleted.", "success");
      }
    } catch (err) {
      console.error("Error deleting review:", err);
      Swal.fire("Error", "Failed to delete the review.", "error");
    }
  };

  // Check if user is staff
  if (!user?.is_staff) {
    return <h1 className="text-red-500 text-center mt-10">Access Denied</h1>;
  }

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Provide Hotel ID to Show Reviews
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mb-6">
        <label htmlFor="id" className="font-bold block mb-2">
          Hotel ID:
        </label>
        <input
          id="id"
          type="number"
          placeholder="Enter Hotel ID"
          className="w-full border py-2 px-4 rounded-lg mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Reviews
        </button>
      </form>

      {loading ? (
        <Loading />
      ) : reviews.length === 0 ? (
        hotelId && (
          <p className="text-center">No reviews found for this hotel.</p>
        )
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex justify-between border p-4 rounded shadow bg-white"
            >
              <div>
                <h2 className="text-xl font-bold mb-2">{review.title}</h2>
                <p>
                  <strong>Hotel:</strong> {review.hotel_name}
                </p>
                <p>
                  <strong>Reviewer Email:</strong> {review.user_email}
                </p>
                <p>
                  <strong>Rating:</strong> {review.rating} / 5
                </p>
                <p>
                  <strong>Approved:</strong> {review.is_approved ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Comment:</strong> {review.comment}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Created:</strong>{" "}
                  {new Date(review.created_at).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Updated:</strong>{" "}
                  {new Date(review.updated_at).toLocaleString()}
                </p>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => handleDelete(review.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowReview;
