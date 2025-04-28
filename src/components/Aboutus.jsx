import React from 'react'
import aboutvideo from "../assets/Abou-us-Video.png";
import linkClick from "../assets/Link-click.svg";
import arrowimg from "../assets/Frame 22.png";
import ellipsis from "../assets/Ellipse 180.png";

export const Aboutus = () => {
  return (
    <div className='flex  flex-col justify-between items-center '>
        {/* image */}
        <div className='relative  xl:left-[-545px] left-[100px] top-[-20px] lg:left-[300px] xl:top-[-40px] w-[36px] xl:w-[72px]'>
            <img src={ellipsis} alt='Ellipsis'  />
        </div>

        {/* About section container */}
        <div className='xl:mt-[100px] mt-[40px] flex xl:flex-row flex-col justify-between items-center xl:w-[1150px]'>
            {/* left section */}
            <div className='xl:w-[535px] w-auto m-5 xl:m-0 lg:w-[600px] md:w-[600px] xl:h-[420px] h-auto flex flex-col justify-between items-start'>
                <div className='flex flex-col justify-start items-start gap-y-7'>
                    <div className='w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]' ></div>
                    <div className='flex flex-col justify-between items-start gap-y-4 xl:w-[474px] xl:h-[319px] h-auto'>
                        <div className='leading-[55px] font-inter font-normal text-[#1A202C] tracking-[1.5px] text-[35px]'>
                            Leading companies trust us
                            <span className=' font-extrabold tracking-normal '> to develop software</span>
                        </div>
                        <div className='leading-[36px] text-[18px] font-normal text-[#1A202C]'>   
                        We <span className='bg-gradient-to-b from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img  src={linkClick} alt='link click' />
                    </div>
                </div>
            </div>
            {/* right section */}
            <div className='m-5 xl:m-0'>
                <img className='xl:w-[601px] w-auto xl:h-[460px] h-auto' src={aboutvideo} alt='About us video'  />
            </div>
        </div >

        {/* meet people section */}
        <div className=' xl:mx-0 m-5 flex flex-row justify-between item  xl:w-[1150px] px-5 w-full h-auto mt-[80px] xl:mt-[180px] '>
        <div className='flex flex-col  items-start gap-y-4'>
            <div className='w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]' ></div>
            <div className= ' flex flex-col font-inter font-normal text-[35px] leading-[55px] xl:w-[412px] text-[#1A202C]'>
                <span>Meet the People</span>
                <span className=' font-bold  '>We are Working With</span>
            </div>
        </div>

        </div>
        <div className='flex flex-row justify-end xl:w-[1290px] w-screen hover:cursor-pointer mb-[39px]'>   
            <img src={arrowimg} alt = "arrow img" />
        </div>
        
    </div>
  )
}
