import React, { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";
import { Delete } from "lucide-react";
import Swal from "sweetalert2";
import useAuthContext from "../hook/useAuthContext";

const ShowReview = () => {
  const [reviews, setReviews] = useState([]);
  const [hotelId, setHotelId] = useState(0);
  const {user} = useAuthContext()

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    setHotelId(id);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      if (!hotelId) return; // prevent empty call
      try {
        const res = await authApiClient.get(`/hotels/${hotelId}/reviews/`);
        setReviews(res.data); // assuming your API returns data in .data
        console.log(res.data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, [hotelId]);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await authApiClient.delete(`/hotels/${hotelId}/reviews/${id}`);

        // Update the UI only after successful delete
        setReviews((prevReviews) =>
          prevReviews.filter((review) => review.id !== id)
        );

        Swal.fire({
          title: "Deleted!",
          text: "The review has been deleted.",
          icon: "success",
        });
      }
    } catch (err) {
      console.error("Error deleting review:", err);
      Swal.fire({
        title: "Error",
        text: "Failed to delete the review.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      {
        user.status === 'is_staff' ?(
          <div>
      <h1 className="text-2xl font-semibold text-center my-10">
        Provide Hotel Id and Show hotel Review
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-1/2 md:w-1/4 mx-auto"
        action=""
      >
        <label htmlFor="id" className="font-bold">
          Hotel ID:
        </label>
        <input
          className="w-full border py-2 px-4 text-black rounded-lg"
          placeholder="Please provide a Hotel Id"
          type="number"
          name="id"
        />
        <input
          className="btn btn-outline my-10 w-full"
          type="submit"
          value="Get Review"
        />
      </form>

      {/* show all review */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.length === 0 ? (
          <p className="text-center">No reviews found for this hotel.</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="flex justify-between border p-4 mb-4 rounded shadow bg-white"
            >
              <div>
                <h2 className="text-xl font-bold mb-2">{review.title}</h2>
                <p className="text-gray-700 mb-1">
                  <strong>Hotel:</strong> {review.hotel_name}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Reviewer Email:</strong> {review.user_email}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Rating:</strong> {review.rating} / 5
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Approved:</strong> {review.is_approved ? "Yes" : "No"}
                </p>
                <p className="text-gray-700 mb-1">
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
              <div className="flex justify-end items-end">
                <button
                  onClick={() => handleDelete(review.id)}
                  className="btn btn-outline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
        ):(
          <div><h1 className="text-red-500 text-center">Review Not found</h1></div>
        )
      }
    </div>
  );
};

export default ShowReview;
