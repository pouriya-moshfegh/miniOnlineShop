import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ModelsSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import PrimaryBtn from "../Buttons/PrimaryBtn";
export default function ModelSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-8"
      >
        <SwiperSlide className="h-[60vh] ">
          <div className="modelbox ">
            <div>
              <h2 className="modelbox-title">SWEET FALL TALES</h2>
              <PrimaryBtn title="discover syles" />
            </div>
            <img
              src="/image/slider01.jpg"
              className="modelbox-img"
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[60vh] ">
          <div className="modelbox ">
            <div>
              <h2 className="modelbox-title">NEw fall season</h2>
              <PrimaryBtn title="shop now" />
            </div>
            <img
              src="/image/slider02.jpg"
              className="modelbox-img"
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[60vh] ">
          <div className="modelbox ">
            <div className="">
              <h2 className="modelbox-title">COLOR CARNIVAl</h2>
              <PrimaryBtn title="shop now" />
            </div>

            <img
              src="/image/slider03.jpg"
              className="modelbox-img"
              alt="picture"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}