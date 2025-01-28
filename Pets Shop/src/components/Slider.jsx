import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import "../Css/Slider.css";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        initialSlide={1}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={`mySwiper `}
      >
        <SwiperSlide className="">
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={img5} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
