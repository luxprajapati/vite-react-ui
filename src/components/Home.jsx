import React from 'react'
import heroBanner from "../assets/Hero-Wrapper__image.png"
import ellipsis from "../assets/Ellipse 180.png";

export const Home = () => {
  return (
    <div className='flex justify-center items-center xl:h-[92.5vh] h-screen '>
        <div className='flex flex-col xl:flex-row w-[1145px] xl:h-[546px] md:h-auto lg:h-[680px] justify-between items-center'>
            <div className='xl:h-[355px] flex flex-col justify-between items-start  '>
                {/* text header    */}
                <div className='xl:mx-0 mx-5'>
                  <div className='leading-[71px] font-inter '>
                    <div className='xl:text-[45px] text-[35px] md:text-[40px] font-light '> Great&nbsp;
                    <span className='font-bold bg-gradient-to-b from-[#DE4396] to-[#0D1C9F] bg-clip-text text-transparent'>
                        Product
                      </span>  is</div>
                    <div className=' text-[37px] md:text-[43px] xl:text-[53px] font-extrabold '>built by great&nbsp;
                    <span className='font-bold bg-gradient-to-bl from-[#F7666F] to-[#406AFF] bg-clip-text text-transparent'>
                        teams
                      </span>
                      </div>
                  </div>
                  <div className='text-[18px] font-inter font-normal text-[#4A5568] leading-[36px]'>
                    <div>We help build and manage a team of world-class developers</div>
                    <div>to bring your vision to life</div>
                  </div>
                </div>
                {/* button */}
                <div className='xl:mx-0 mx-5 text-[14px] font-inter font-semibold w-[175px] h-[52px]  flex justify-center items-center text-[#FAFAFA] bg-[#3D63EA] rounded-[5px] shadow-xl hover:cursor-pointer'>
                  Let's get started!
                </div>
            </div>
            {/* Banner image */}
            <div className=''>
                <img className='h-[300px] xl:h-auto sm:h-[400px]' src={heroBanner} alt='Hero bannerimg'/>
            </div>
        </div>

        {/* img */}
          <div className='absolute z-10 left-[60px] xl:left-[483px] xl:bottom-[-60px] bottom-[-100px]  w-[36px] xl:w-[72px]'>
          <img src={ellipsis} alt='Ellipsis'  />
        </div>
    </div>
  )
}


