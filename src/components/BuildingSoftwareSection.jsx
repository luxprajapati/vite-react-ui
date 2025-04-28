import React from 'react'
import img1 from "../assets/Ellipse 185.png";
import img2 from "../assets/Ellipse 185 (1).png";
import img3 from "../assets/Ellipse 185 (2).png";

import EllipseImg1 from "../assets/Rectangle 17.png";
import EllipseImg2 from "../assets/Rectangle 18.png";
import EllipseImg3 from "../assets/Rectangle 19.png";

export const BuildingSoftwareSection = () => {
  return (
    <div className='mb-[100px]'>
        
        {/* heading section */}
        <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center justify-between gap-y-7 mt-20'>
                <div className='w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]' ></div>
                <div className='flex flex-col h-[108px] text-center items-center leading-[55px] font-inter font-normal text-[#1A202C] tracking-[1.5px] text-[35px]'>
                    <div>Way of building</div>
                    <div className='font-bold'>Great Software</div>
                </div>
            </div>
        </div>

        {/* content */}
        <div className='flex flex-col '>



{/* section 1 */}

        <div className=' my-[100px] flex flex-col xl:flex-row justify-between items-center xl:w-[1233px] mx-auto xl:px-0 px-4 md:px-8'>

        {/* left section */}
            <div className='flex flex-col gap-y-6 items-start w-full xl:w-[534px] mb-8 xl:mb-0'>

                <div className='font-semibold font-inter text-[24px] md:text-[28px] text-[#1A202C]'>
                Build the right team to scale
                </div>

                <div className='font-inter font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#2D3748]'>
                Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)
                </div>

                <div className='font-inter font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#2D3748]'>
                Our <span className='bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] bg-clip-text text-transparent'>delivery model</span> helps you cut costs and deliver within budget.
                </div>

                <div className='flex flex-row gap-x-3 w-full'>
                <div className='w-[3px] h-[87px] bg-gradient-to-b from-[#DE4396] to-[#0D1C9F]'></div>
                <div className='font-light leading-[26px] md:leading-[30px] italic bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] bg-clip-text text-transparent text-[14px] md:text-[16px] xl:w-[400px] '>
                    "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
                </div>
                </div>

                <div className='flex flex-row justify-start items-center gap-x-3 mt-4'>
                <div className='w-[41px] h-[41px] rounded-full overflow-hidden'>
                    <img src={img1} alt="img" className='object-cover w-full h-full' />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-[16px] font-normal text-[#1A202C]'>Jeewa markram</div>
                    <div className='text-[13px] uppercase text-[#718096]'>CEO</div>
                </div>
                </div>

            </div>

        {/* right section */}
            <div className='relative border-[1px] rounded-[10px] border-[#C4C4C4] w-full md:w-[500px] xl:w-[575px] h-auto xl:h-[473px]'>
                <div className='absolute top-[-20px] left-[-20px] z-[-10] w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]'></div>
                <img className='w-full h-full object-cover rounded-[10px]' src={EllipseImg1} alt="img" />
                <div className='absolute bottom-[-12px] left-[45%] z-[-10] w-[24px] h-[24px] md:w-[31px] md:h-[31px] rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B]'></div>
            </div>

        </div>


{/* section 2 */}

        <div className=' mb-[100px] flex flex-col xl:flex-row justify-between items-center xl:w-[1233px] mx-auto xl:px-0 px-4 md:px-8'>

        {/* left section */}
            <div className='relative border-[1px] rounded-[10px] border-[#C4C4C4] w-full md:w-[500px] xl:w-[575px] h-auto xl:h-[473px]'>
                <div className='absolute bottom-[-35px] left-[25%] z-[-10] w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]'></div>
                <img className='w-full h-full object-cover rounded-[10px]' src={EllipseImg2} alt="img" />
                <div className='absolute top-[-16px] right-[-10px] z-[-10] w-[24px] h-[24px] md:w-[31px] md:h-[31px] rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B]'></div>
            </div>



        {/* right section */}
            <div className='flex flex-col gap-y-6 items-start w-full xl:w-[534px] mb-8 xl:mb-0'>

                <div className='font-semibold font-inter text-[24px] md:text-[28px] text-[#1A202C]'>
                Build the right team to scale
                </div>

                <div className='font-inter font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#2D3748]'>
                Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)
                </div>

                <div className='font-inter font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#2D3748]'>
                Our <span className='bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] bg-clip-text text-transparent'>delivery model</span> helps you cut costs and deliver within budget.
                </div>

                <div className='flex flex-row gap-x-3 w-full'>
                <div className='w-[3px] h-[87px] bg-gradient-to-b from-[#DE4396] to-[#0D1C9F]'></div>
                <div className='font-light leading-[26px] md:leading-[30px] italic bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] bg-clip-text text-transparent text-[14px] md:text-[16px] xl:w-[400px] '>
                    "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
                </div>
                </div>

                <div className='flex flex-row justify-start items-center gap-x-3 mt-4'>
                <div className='w-[41px] h-[41px] rounded-full overflow-hidden'>
                    <img src={img2} alt="img" className='object-cover w-full h-full' />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-[16px] font-normal text-[#1A202C]'>Jeewa markram</div>
                    <div className='text-[13px] uppercase text-[#718096]'>CEO</div>
                </div>
                </div>

            </div>
            

        </div>

    


{/* section 3 */}

        <div className='mb-[30px] flex flex-col xl:flex-row justify-between items-center xl:w-[1233px] mx-auto xl:px-0 px-4 md:px-8'>

        {/* left section */}
            <div className='flex flex-col gap-y-6 items-start w-full xl:w-[534px] mb-8 xl:mb-0'>

                <div className='font-semibold font-inter text-[24px] md:text-[28px] text-[#1A202C]'>
                Build the right team to scale
                </div>

                <div className='font-inter font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#2D3748]'>
                Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)
                </div>

                <div className='font-inter font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#2D3748]'>
                Our <span className='bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] bg-clip-text text-transparent'>delivery model</span> helps you cut costs and deliver within budget.
                </div>

                <div className='flex flex-row gap-x-3 w-full'>
                <div className='w-[3px] h-[87px] bg-gradient-to-b from-[#DE4396] to-[#0D1C9F]'></div>
                <div className='font-light leading-[26px] md:leading-[30px] italic bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] bg-clip-text text-transparent text-[14px] md:text-[16px] xl:w-[400px] '>
                    "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
                </div>
                </div>

                <div className='flex flex-row justify-start items-center gap-x-3 mt-4'>
                <div className='w-[41px] h-[41px] rounded-full overflow-hidden'>
                    <img src={img3} alt="img" className='object-cover w-full h-full' />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-[16px] font-normal text-[#1A202C]'>Jeewa markram</div>
                    <div className='text-[13px] uppercase text-[#718096]'>CEO</div>
                </div>
                </div>

            </div>

        {/* right section */}
            <div className='relative border-[1px] rounded-[10px] border-[#C4C4C4] w-full md:w-[500px] xl:w-[575px] h-auto xl:h-[473px]'>
                <div className='absolute bottom-[-20px] left-[-20px] z-[-10] w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full bg-gradient-to-r from-[#FFEF5E] to-[#F7936F]'></div>
                <img className='w-full h-full object-cover rounded-[10px]' src={EllipseImg3} alt="img" />
                <div className='absolute top-[-17px] left-[50%] z-[-10] w-[24px] h-[24px] md:w-[31px] md:h-[31px] rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B]'></div>
            </div>

        </div>



        </div>
    </div>
  )
}




