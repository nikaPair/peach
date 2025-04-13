import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.scss";

import { Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const slides = [
    "src/assets/images/slide-1.png",
    "src/assets/images/slide-2.png",
    "src/assets/images/slide-3.png",
    "src/assets/images/slide-4.png",
    "src/assets/images/slide-5.png",
  ];

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__navigation_container">
          <h2 className="slider__title">Корпоративная жизнь</h2>
          <div className="slider__navigation">
            <button className="slider__prev" ref={prevRef}>
              Prev
            </button>
            <button className="slider__next" ref={nextRef}>
              Next
            </button>
          </div>
        </div>
        {swiperReady && (
          <Swiper
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Pagination, Navigation]}
            className="swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img src={slide} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
