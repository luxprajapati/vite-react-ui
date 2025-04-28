import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import mobdev from "../assets/mobdev.png";
import webdev from "../assets/webdev.png";
import dev from "../assets/dev.png";

const cards = [
  {
    title: "Mobile App Development",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: mobdev,
  },
  {
    title: "Web Design & Development",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: webdev,
  },
  {
    title: "Software Testing Service",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: dev,
  },
  {
    title: "Software Testing Service",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: dev,
  },
  {
    title: "Web Design & Development",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: webdev,
  },
];

export const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col items-center py-10 bg-[#fafbff] relative z-10">
      <div className='font-inter font-bold text-[28px] md:text-[35px] text-[#1A202C] mb-10 md:mb-20 text-center'>
        Services we offer
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1.2} // Mobile
        centeredSlides={true}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1.5, // Small tablets
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2.5, // Tablets
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3.5, // Desktop
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 4, // Large screens
            spaceBetween: 70,
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-[400px]"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="group">
            <div className="relative">
              <div
                className={`p-6 md:p-8 rounded-xl border transition-all duration-600 w-[260px] md:w-[300px] xl:w-[333px] h-[250px] md:h-[280px] xl:h-[287px] ${
                  activeIndex === index
                    ? "border-[#57007B] bg-white shadow-lg scale-105 absolute top-6 md:top-10"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex flex-col items-start text-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full text-3xl border border-[#57007B]">
                    <img className="object-fit w-8 md:w-10" src={card.icon} alt="icon" />
                  </div>
                  <h3 className={`text-base md:text-lg font-semibold ${
                    activeIndex === index
                      ? "bg-gradient-to-b from-[#F76680] to-[#57007B] bg-clip-text text-transparent"
                      : "text-gray-800"
                  }`}>
                    {card.title}
                  </h3>
                  <p className="text-[#4A5568] text-left text-[12px] md:text-[14px] leading-snug">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Bar */}
      <div className="relative mt-10">
        <div className="flex items-center justify-center md:justify-end gap-4">
          <span className="text-sm text-[#A0AEC0]">{`0${activeIndex + 1}`}</span>
          <div className="w-24 md:w-32 h-1 bg-[#E2E8F0] relative rounded-full overflow-hidden">
            <div
              className="h-full bg-[#57007B] absolute top-0 left-0 transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / cards.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm text-[#57007B]">{`0${cards.length}`}</span>
        </div>
      </div>
    </div>
  );
};
