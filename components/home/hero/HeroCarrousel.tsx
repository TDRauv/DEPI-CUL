"use client";

import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import heroImages from "./heroImages";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Componente para los botones de navegación con control directo del Swiper
function CarouselButtons() {
  const swiper = useSwiper();

  return (
    <>
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        aria-label="Diapositiva anterior"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors duration-200"
      >
        <svg
          className="w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => swiper.slideNext()}
        aria-label="Diapositiva siguiente"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors duration-200"
      >
        <svg
          className="w-6 h-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </>
  );
}

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full w-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image
                src={image}
                alt={`Imagen ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
              {/* pointer-events-none garantiza que el overlay nunca capture clics */}
              <div className="absolute inset-0 bg-black/50 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}

        {/* Botones integrados dentro del contexto de Swiper */}
        <CarouselButtons />
      </Swiper>
    </div>
  );
}