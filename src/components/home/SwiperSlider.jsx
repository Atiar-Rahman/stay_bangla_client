import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroCarusol from "./HeroCarusol";

import b1 from "../../assets/banner/1.avif";
import b2 from "../../assets/banner/2.avif";
import b3 from "../../assets/banner/3.avif";
import b4 from "../../assets/banner/4.avif";
import b5 from "../../assets/banner/5.avif";

const SwiperSlider = () => {
  const slides = [
    {
      title: "Welcome to Stay Bangla",
      subtitle: "Experience comfort and luxury in Dhaka",
      image: b1,
    },
    {
      title: "Relax by the Beach",
      subtitle: "Enjoy the sunset views in Cox's Bazar",
      image: b2,
    },
    {
      title: "Luxury Rooms",
      subtitle: "Premium suites for your stay",
      image: b3,
    },
    {
      title: "Adventure Awaits",
      subtitle: "Explore the hills of Bandarban",
      image: b4,
    },
    {
      title: "Family Friendly",
      subtitle: "Perfect for your family vacations",
      image: b5,
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide>
            <HeroCarusol slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
