import React, { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';
import HotelReviewPreview from './HotelReviewPreview';
import authApiClient from '../../services/auth-api-client';
const Review = ({hotelId}) => {
    const [reviews,setReviews] = useState([])
    
    // console.log(hotelId)
    useEffect(()=>{
        const fetchReview =async()=>{
            try{
              const res = await authApiClient.get(`hotels/${hotelId}/reviews/`);
              console.log(res.data)
              setReviews(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchReview()
    },[])
    
    return (
      <div>
        <ReviewForm hotelId={hotelId} />
        {reviews.map((review) => (
          <HotelReviewPreview key={review.id} review={review} />
        ))}
      </div>
    );
};

export default Review;