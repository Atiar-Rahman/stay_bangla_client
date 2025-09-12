import React from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../../services/auth-api-client";
import Swal from "sweetalert2";

const ReviewForm = ({hotelId}) => {
  const { register, handleSubmit,formState:{errors}} = useForm();

  const handleReview = async (data) => {
    // Ensure rating is an integer
    const payload = {
      ...data,
      rating: parseInt(data.rating, 10),
    };

    try {
      // Post review to hotel endpoint
      const res = await authApiClient.post(
        `/hotels/${hotelId}/reviews/`,
        payload
      );

      console.log("Review submitted:", res.data);

      // Show success alert
      Swal.fire({
        title: "Review added successfully!",
        icon: "success",
        draggable: true,
        timer: 1500, // optional: auto close
        showConfirmButton: false,
      });

      // Optionally reset form here if using react-hook-form
      // reset();
    } catch (err) {
      console.error("Review error:", err.response?.data || err.message);

      // Show error to user
      Swal.fire({
        title: "Failed to add review",
        text: err.response?.data?.detail || err.message,
        icon: "error",
        draggable: true,
      });
    }
  };


  return (
    <form onSubmit={handleSubmit(handleReview)} className="my-10">
      {/* Rating */}
      <label className="block font-semibold">Rating</label>
      <div id="Rating" className="rating gap-1">
        <input
          type="radio"
          value="1"
          {...register("rating", { required: "required" })}
          className="mask mask-heart bg-red-400"
          aria-label="1 star"
        />
        <input
          type="radio"
          value="2"
          {...register("rating")}
          className="mask mask-heart bg-orange-400"
          aria-label="2 star"
        />
        <input
          type="radio"
          value="3"
          {...register("rating")}
          className="mask mask-heart bg-yellow-400"
          aria-label="3 star"
        />
        <input
          type="radio"
          value="4"
          {...register("rating")}
          className="mask mask-heart bg-lime-400"
          aria-label="4 star"
        />
        <input
          type="radio"
          value="5"
          {...register("rating")}
          className="mask mask-heart bg-green-400"
          aria-label="5 star"
        />
        {errors.rating && (
          <span className="text-red-500 text-sm">{errors.rating.message}</span>
        )}
      </div>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: "title is required" })}
          className="input input-bordered w-full"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </div>

      {/* Comment */}
      <div>
        <label htmlFor="comment" className="block font-semibold">
          Comment
        </label>
        <textarea
          id="comment"
          {...register("comment", { required: "Comment is required" })}
          className="textarea textarea-bordered w-full"
        />
        {errors.comment && (
          <span className="text-red-500 text-sm">{errors.comment.message}</span>
        )}
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-primary mt-3">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
