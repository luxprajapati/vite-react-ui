import React from 'react'
import { FaChevronLeft } from "react-icons/fa"; 
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react'

import comma1 from "../assets/Group (1).png";
import comma2 from "../assets/Group.png";
import rating from "../assets/Group 3.png";
import user1Img from "../assets/Ellipse 1.png";
import user2Img from "../assets/Ellipse 1 (1).png";
import user3Img from "../assets/Group 2 (2).png";
import user4Img from "../assets/Group 2 (1).png";
import user5Img from "../assets/Group 2.png";


const testimonials = [
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    image: user1Img,
    review:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    image: user2Img,
    review:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "Imran Khan",
    role: "Software Engineer",
    image: user3Img,
    review:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    image: user4Img,
    review:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    image: user5Img,
    review:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
  },
];

export const Testimonial = () => {

    const [currentIndex, setCurrentIndex] = useState(2); 

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 text-center mb-20">
      {/* heading */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center gap-y-5 mt-10 sm:mt-16">
          <div className="w-[50px] sm:w-[69px] h-[4px] sm:h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]" />
          <div className="flex flex-col text-center items-center font-inter font-normal text-[#1A202C] tracking-[1px] sm:tracking-[1.5px]">
            <div className="text-[24px] sm:text-[30px] md:text-[35px] leading-[32px] sm:leading-[45px] md:leading-[55px]">
              Why customers love
            </div>
            <div className="font-bold text-[24px] sm:text-[30px] md:text-[35px] leading-[32px] sm:leading-[45px] md:leading-[55px]">
              Working with us
            </div>
          </div>
        </div>
      </div>

      {/* Reviews section */}
      <div className="relative flex flex-col sm:flex-row justify-center items-center mt-14 sm:mt-20">
        {/* Left Arrow */}
        <button onClick={prevTestimonial} className="absolute left-4 sm:left-0 sm:p-2 p-1 border rounded-full text-[#57007B] hover:bg-gray-200">
          <FaChevronLeft />
        </button>

        {/* Review Text */}
        <div className="relative w-full max-w-[535px] px-4 sm:px-0">
          <img className="hidden sm:block absolute top-[-10px] left-[-60px] sm:left-[-100px] w-[30px] sm:w-auto" src={comma1} alt="comma1" />
          <p className="text-[#718096] text-[16px] sm:text-[18px] leading-[28px] sm:leading-[36px] font-inter">
            {testimonials[currentIndex].review}
          </p>
          <img className="hidden sm:block absolute bottom-[20px] sm:bottom-[40px] right-[-60px] sm:right-[-100px] w-[30px] sm:w-auto" src={comma2} alt="comma2" />
        </div>

        {/* Right Arrow */}
        <button onClick={nextTestimonial} className="absolute right-4 sm:right-0 sm:p-2 p-1 border rounded-full text-[#57007B] hover:bg-gray-200">
          <FaChevronRight />
        </button>
      </div>

      {/* Profile Images */}
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={`rounded-full object-cover transition-all duration-300 ${
                index === currentIndex
                  ? "w-[90px] sm:w-[120px] h-[90px] sm:h-[120px]"
                  : "w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] opacity-50"
              }`}
            />
            <div>
              <img src={rating} className="w-[70px] sm:w-auto" alt="ratingStars" />
            </div>
            <div className="text-[14px] sm:text-sm font-medium">{testimonial.name}</div>
            <div className="text-[12px] sm:text-xs text-gray-400">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </div>
   
  )
}


