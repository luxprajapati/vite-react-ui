import React from 'react'
import img1 from "../assets/Rocket_perspective_matte.png";
import img2 from "../assets/Code_perspective_matte.png";
import img3 from "../assets/Heart_rate_perspective_matte.png";
import img4 from "../assets/Shield_perspective_matte.png";
import img5 from "../assets/Success_perspective_matte.png";
import img6 from "../assets/Padlock_perspective_matte.png";  
import { CustomeCard2 } from './common/CustomeCard2';


export const DevelopmentApproach = () => {

    const developementApproach = [
        {   
            index:1,
            imageName: img1,
            naming: "UX Driven Engineering",
            decription: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
            colorCode: {
                from: "#29272E",
                to: "#27272E",
            }
        },
        {   
            index:2,
            imageName: img2,
            naming: "Developing Shared Understanding",
            decription: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
            colorCode: {
                from: "#68DBF2",
                to: "#509CF5",
            }
        },
        {   
            index:3,
            imageName: img3,
            naming: "Proven Experience and Expertise",
            decription: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
            colorCode: {
                from: "#FF92AE",
                to: "#FF3D9A",
            }
        },
        {   
            index:4,
            imageName: img4,
            naming: "Security & Intellectual Property (IP)",
            decription: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
            colorCode: {
                from: "#67E9F1",
                to: "#24E795",
            }
        },
        {   
            index:5,
            imageName: img5,
            naming: "Code Reviews",
            decription: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
            colorCode: {
                from: "#FFEF5E",
                to: "#F7936F",
            }
        },
        {   
            index:6,
            imageName: img6,
            naming: "Quality Assurance & Testing",
            decription: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
            colorCode: {
                from: "#57007B",
                to: "#F76680",
            }
        },
        
    ]


  return (
     <div className='bg-[#F7F7FA] pt-14 pb-20'>
            {/* ourcase studies heading */}
            <div className='flex flex-col items-center justify-between xl:w-[474px] h-[133px] mx-auto  '>
                <div className='w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]' ></div>
                <div className='flex flex-col h-[108px] text-center items-center leading-[55px] font-inter font-normal text-[#1A202C] tracking-[1.5px] text-[35px]'>
                    <div>Our design and</div>
                    <div className='font-bold'>development approach</div>
                </div>
            </div>
    
            {/* case studies */}
            <div className='flex flex-row justify-center items-center mt-20'>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 mx-auto w-auto xl:w-[1240px] '>
                    {developementApproach.map((approach, index) => (
                        <CustomeCard2
                        key={index}
                        imageName={approach.imageName}
                        description={approach.decription}
                        colorcode={approach.colorCode}
                        heading={approach.naming}
                        />
                    ))}
            </div>
            </div>
    </div>
  )
}
