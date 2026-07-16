"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import heroImages from "./heroImages";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="h-screen"
    >
      {heroImages.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-screen">

            <Image
              src={image}
              alt={`Imagen ${index + 1}`}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}