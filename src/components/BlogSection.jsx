import React from 'react'
import img1 from "../assets/Rectangle 10.png";
import img2 from "../assets/Rectangle 10 (1).png";
import img3 from "../assets/Rectangle 10 (2).png";
import img4 from "../assets/Rectangle 10 (3).png";
import img5 from "../assets/Rectangle 10 (4).png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import { BlogCard } from './common/BlogCard';


export const BlogSection = () => {

    const blogs = [
        {
            id: 1,
            imageName: img1,
            description: "How to Build a Scalable Application up to 1 Million Users on AWS",
        },
        {
            id:2,
            imageName: img2 ,
            description: "How to Build a Scalable Application up to 1 Million Users on AWS",
        },
        {
            id:3,
            imageName: img3,
            description: "How to Build a Scalable Application up to 1 Million Users on AWS",
        },
        {
            id:4,
            imageName: img4,
            description: "How to Build a Scalable Application up to 1 Million Users on AWS",
        },
        {
            id:5,
            imageName: img5,
            description: "How to Build a Scalable Application up to 1 Million Users on AWS",
        },
    ]

  return (
    <div>
        {/* heading section */}
        <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center justify-between gap-y-7 mt-20'>
                <div className='w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]' ></div>
                <div className='flex flex-col h-[108px] text-center items-center leading-[55px] font-inter font-normal text-[#1A202C] tracking-[1.5px] text-[35px]'>
                    <div>Featured</div>
                    <div className='font-bold'>Resources</div>
                </div>
            </div>
        </div>

        {/* blogs */}
        
        <div className='flex justify-center items-center mx-auto my-20 w-full'>
            <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            // centeredSlides={true}   
            clickable={true}
            grabCursor={true}
            modules={[FreeMode, Pagination]}
        className="mySwiper"
            breakpoints={{
        320: { slidesPerView: 1 },
        400: { slidesPerView: 1.5 },
        480: { slidesPerView: 2 },
        640: { slidesPerView: 2.5 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4.5}
      }}
    >
      {blogs.map((blog, index) => (
        <SwiperSlide key={index}>
          <BlogCard  imageName={blog.imageName} description={blog.description} />
        </SwiperSlide>
      ))}
    </Swiper> 
        </div>

        <div className=' flex flex-col xl:flex-row gap-y-20 xl:gap-y-0  py-10 justify-evenly items-center xl:mx-auto mx-5  mt-[120px] mb-20 xl:w-[1230px] xl:h-[285px] h-auto w-auto bg-gradient-to-r from-[#F1F1F5] to-[#E4ECF7] rounded-[20px]'>
            <div className='xl:w-[531px] xl:h-[110px] w-auto h-auto xl:text-left text-center font-bold text-[35px] leading-[55px] font-inter'>
                Hire the best developers and designers around!
            </div>
            
            <div className=' flex flex-col justify-center gap-y-10 items-center' >
                <div className=' flex justify-evenly gap-x-14 w-[119.46px] relative '>
                    <div className='w-[31.81px]  rotate-45 h-[6.98px] rounded-[10px]  bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]' ></div>
                    <div className='w-[31.81px]  absolute  bottom-3 rotate-90 h-[6.98px] rounded-[10px]  bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]' ></div>
                    <div className='w-[31.81px]  rotate-135 h-[6.98px] rounded-[10px]  bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]' ></div>
                </div>

                <div 
                className='font-inter  font-bold text-[18px] w-[262px] h-[57px] flex justify-center items-center bg-gradient-to-r from-[#FFEF5E] to-[#F7936F] rounded-[5px] hover:cursor-pointer'
                >Hire Top Developers</div>

                
                <div className=' flex justify-evenly gap-x-14 w-[119.46px] relative '>
                    <div className='w-[31.81px]  rotate-135 h-[6.98px] rounded-[10px]  bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]' ></div>
                    <div className='w-[31.81px]  absolute  top-3 rotate-90 h-[6.98px] rounded-[10px]  bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]' ></div>
                    <div className='w-[31.81px]  rotate-45  h-[6.98px] rounded-[10px]  bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]' ></div>
                </div>
            </div>

        </div>


    </div>
  )
}
