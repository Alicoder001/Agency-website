import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import smmDesigner from "../../../../images/png/sobirov.png";
import Slide from "../Slide/Slide";
export default () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <Swiper
      breakpoints={{
        // // when window width is >= 640px

        // // when window width is >= 768px
        // 100: {
        //   slidesPerView: 1,
        // },
        0: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      spaceBetween={50}
      slidesPerView={4}
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
        <Slide img={smmDesigner} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={smmDesigner} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={smmDesigner} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={smmDesigner} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={smmDesigner} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide img={smmDesigner} />
      </SwiperSlide>
    </Swiper>
  );
};
