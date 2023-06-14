import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import qaImg from "../../../../images/png/qaImg.png";
import Slide from "../Slide/Slide";
export default () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px

        // when window width is >= 768px
        100: {
          slidesPerView: 1,
        },

        980: {
          slidesPerView: 2,
        },
        1250: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={50}
      slidesPerView={3}
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Slide img={qaImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={qaImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={qaImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={qaImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={qaImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={qaImg} />
      </SwiperSlide>
    </Swiper>
  );
};
