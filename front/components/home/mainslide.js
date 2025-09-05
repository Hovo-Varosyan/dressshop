"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Mainslide({ data }) {
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
      {
        data?.map(e => {
          return <SwiperSlide key={e}>
            <img className="w-full" src={`http://localhost:4000/images/${e}`} alt="banner" />
          </SwiperSlide>
        })
      }

      <div className="swiper-pagination"></div>
    </Swiper>
  );
}
