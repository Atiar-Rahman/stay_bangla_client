import React, { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';
import HotelReviewPreview from './HotelReviewPreview';
import authApiClient from '../../services/auth-api-client';
import Swal from 'sweetalert2';
const Review = ({hotelId}) => {
  const [reviews, setReviews] = useState([]);
  const [reviewId,setReviewId] = useState(0)

  // console.log(hotelId)
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await authApiClient.get(`/hotels/${hotelId}/reviews/`);
        console.log(res.data);
        setReviews(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReview();
  }, []);

  // Handle review deletion
  const handleDelete = async () => {
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
        await authApiClient.delete(`/hotels/${hotelId}/reviews/${reviewId}`);
        setReviews((prev) =>
          prev.filter((review) => review.reviewId !== reviewId)
        );
        Swal.fire("Deleted!", "The review has been deleted.", "success");
      }
    } catch (err) {
      console.error("Error deleting review:", err);
      Swal.fire("Error", "Failed to delete the review.", "error");
    }
  };

  return (
    <div>
      <ReviewForm hotelId={hotelId} />
      {reviews.map((review) => (
        <HotelReviewPreview
          key={review.id}
          review={review}
          handleDelete={handleDelete}
          setReviewId={setReviewId}
        />
      ))}
    </div>
  );
};

export default Review;