import React from 'react'
import { CustomeCard } from './common/CustomeCard'
import caseStudy1_img from "../assets/Case-study__image1.png";
import caseStudy2_img from "../assets/Case-study__image2.png";
import caseStudy3_img from "../assets/Case-study__image3.png";
import readmoreCaseStudy from "../assets/Frame 37.png";
import decoline1 from "../assets/Deco-img-arrow (1).png";
import decoline2 from "../assets/Deco-img-arrow.png";


export const CaseStudyies = () => {

    const caseStudy = [
        {   
            index: 1,
            imageName: caseStudy1_img,
            description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
            colorcode: "#F1F2FF",
            heading: "Website Design for SCFC Canada",
        },
        {   
            index: 2,
            imageName: caseStudy2_img,
            description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
            colorcode: "#F0FFF7",
            heading: "Website Design for SCFC Canada",
        },
        {   
            index: 3,
            imageName: caseStudy3_img,
            description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
            colorcode: "#FFF4F4",
            heading: "Website Design for SCFC Canada",
        }
    ]
    
  return (
    <div className='bg-[#F7F7FA] pb-20 relative pt-[100px]'>

        <div  className=' hidden xl:block xl:absolute top-[-130px] left-[120px] z-10'><img  src = {decoline1} /></div>
        <div className='absolute z-10 top-[80px] left-[30%] w-[18px] rounded-full h-[18px]  bg-gradient-to-l from-[#F76680] to-[#57007B] ' ></div>
        <div  className=' hidden xl:block xl:absolute top-[-130px] right-[110px] '><img  src = {decoline2} /></div>

        {/* ourcase studies heading */}
        <div className='flex flex-col items-center justify-between xl:w-[474px] h-[133px] mx-auto  '>
            <div className='w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]' ></div>
            <div className='flex flex-col h-[108px] items-center leading-[55px] font-inter font-normal text-[#1A202C] tracking-[1.5px] text-[35px]'>
                <div>Our recent</div>
                <div className='font-bold'>Case studies</div>
            </div>
        </div>

        {/* case studies */}
        <div className='flex flex-col justify-center items-center xl:gap-y-8 gap-y-0 mt-16 mb-5'>
        {caseStudy.map((study, index) => (
            <CustomeCard
            key={index}
            imageName={study.imageName}
            description={study.description}
            colorcode={study.colorcode}
            heading={study.heading}
            />
        ))}
        </div>

        {/* read more btn */}
        <div className='flex flex-row justify-end xl:w-[1300px] w-auto  mt-10 sm:w-[700px] mx-auto hover:cursor-pointer '>
            <img src={readmoreCaseStudy} alt='read more' />
        </div>
    </div>
  )
}
