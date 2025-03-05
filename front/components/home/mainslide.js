"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Mainslide() {
  return (
    <Swiper
      speed={1000}
      modules={[Autoplay, Pagination]}
      simulateTouch={true}
      watchOverflow={true}
      slidesPerView={"auto"}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="bg-black  w-full overflow-hidden h-max mainslide"
    >
      <SwiperSlide>
        <img className="w-full" src="./dfsv.webp" alt="banner" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img className="w-full" src="./kkkl.jpg" alt="banner" />
      </SwiperSlide>
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}
