"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import Product from "../product/product";
import productsData from "../../assets/json/product.json"

export default function ProductSlide({
  title = "New Product",
}) {
  return (
    <section className="py-6 px-10 w-full">
      <h2 className="py-3.5 font-semibold">{title}</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}

        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        speed={1000}
        watchOverflow={true}
        slidesPerView="auto"
        spaceBetween={20}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2
        //   },
        //   750: {
        //     slidesPerView: 3, 
        //   },
        //   880:{
        //     slidesPerView:4
        //   },
        //   1080: {
        //     slidesPerView: 5,
        //   },
        //   1440: {
        //     slidesPerView: 7,
        //   },
        // }} 
        className="swiperSlide !p-8 !pt-10 "
      >
        {productsData.slice(0, 8).map((e) => (
          <SwiperSlide
            key={e.id}
          className="product-container"
          >
            <div className="pb-5">
              <Product data={e} />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
}
