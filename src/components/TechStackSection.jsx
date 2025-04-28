import React from 'react'
import img1 from "../assets/NodeJS.png";
import img2 from "../assets/PHP.png";
import img3 from "../assets/kisspng-mysqli-php-database-linux-coding-5ac4824a2e87e0 1.png";
import img4 from "../assets/Java.png";
import img5 from "../assets/NETCore.png";
import img6 from "../assets/Python.png";
import img7 from "../assets/RubyOnRails.png";
import img8 from "../assets/Go.png";
import img9 from "../assets/mon 1.png";


export const TechStackSection = () => {

    const techstack = [
        {
            index: 1,
            imageName:img1,
            name: "NodeJS",
        },
        {
            index: 2,
            imageName:img2,
            name: "PHP",
        },
        {
            index: 3,
            imageName:img3,
            name: "MySQL",
        },
        {
            index: 4,
            imageName:img4,
            name: "Java",
        },
        {
            index: 5,
            imageName:img5,
            name: ".NET Core",
        },
        {
            index: 6,
            imageName:img6,
            name: "Python",
        },
        {
            index: 7,
            imageName:img7,
            name: "Ruby on Rails",
        },
        {
            index: 8,
            imageName:img8,
            name: "Go",
        },
        {
            index: 9,
            imageName:img9,
            name: "MongoDB",
        }
    ]

  return (
    <div className='flex flex-col justify-center items-center border-b-[1px] border-[#E7DAED]'>
        <div className='flex flex-col justify-center items-center '>
            {/* our techstack heading */}
            <div className='flex flex-col items-center justify-between gap-y-7 mt-20'>
                <div className='w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]' ></div>
                <div className='flex flex-col h-[108px] text-center items-center leading-[55px] font-inter font-normal text-[#1A202C] tracking-[1.5px] text-[35px]'>
                    <div>Our</div>
                    <div className='font-bold'>Tech Stack</div>
                </div>
            </div>
            {/* specific development */}
            <div  className='flex flex-row justify-center items-center xl:gap-x-16 gap-x-7 flex-wrap
                font-inter font-normal text-[18px] mt-5
            '>
                <div className='flex flex-col justify-center items-center '>
                    <div className='bg-gradient-to-bl from-[#F76680] to-[#57007B] bg-clip-text text-transparent' >Backend</div>
                    <div className='w-[25px] h-[3px] bg-gradient-to-r rounded-[3px] from-[#F76680] to-[#57007B]' ></div>
                </div>
                <div>
                    Frontend
                </div>
                <div>
                    Databases
                </div>
                <div>
                    CMS
                </div>
                <div>
                    CloudTesting
                </div>
                <div>
                    DevOps
                </div>
            </div>
        </div>

        {/* tech stack images */}

        <div className='flex flex-row  gap-x-14 justify-center items-center flex-wrap xl:w-[1064px] mb-[100px]'>
            {
                techstack.map((tech, index) => (
                    <div key={index} className='flex flex-row justify-center items-center mt-10'>
                        <div className='flex flex-row justify-center items-center gap-y-2'>
                            <img className=' w-auto' src={tech.imageName} alt={tech.name} />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
