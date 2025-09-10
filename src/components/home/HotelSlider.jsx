import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import apiClient from "../../services/api-client";
import Hotel from "../hotel/Hotel";
import Loading from "../Loading";

const HotelSlider = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get("/hotels/");
        setHotels(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper relative"
    >
      {hotels.map((hotel) => (
        <SwiperSlide key={hotel.id}>
          <Hotel hotel={hotel} />
        </SwiperSlide>
      ))}

      <div className="autoplay-progress absolute bottom-2 right-2 flex items-center gap-1">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default HotelSlider;
