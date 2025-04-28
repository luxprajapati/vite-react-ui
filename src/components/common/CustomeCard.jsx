import React from 'react'
import readmore from "../../assets/Frame 24.png";


export const CustomeCard = ({imageName, heading, description, colorcode}) => {
    console.log(colorcode);
  return (
    <div className='flex flex-col xl:flex-row justify-between items-center xl:w-[1236px] xl:h-[416px]  sm:w-[600px] xl:rounded-r-[30px] xl:rounded-b-[30px] border-[1px] gap-y-5 border-[#E7DAED] rounded-[10px] xl:m-0 m-5 ' style={{backgroundColor: colorcode}}>
        {/* left side */}
        <div >
            <img className='xl:w-[601px] xl:h-[416px]'  src={imageName} alt='image' />
        </div>
        {/* right side */}
        <div className='xl:w-1/2 flex justify-center items-center xl:mb-0 mb-10' >
            <div className='flex flex-col justify-between gap-y-5 items-start xl:w-[529px] xl:h-[259px] font-inter xl:m-0 m-5'>
                <div className='text-[#2D3748] font-semibold text-[28px]' >{heading}</div>
                <div className='font-normal text-[14px]  text-[#4A5568]'>{description}</div>
                <div className='flex flex-row justify-end w-full hover:cursor-pointer'>
                    <img src={readmore} alt='readmore' />
                </div>
            </div>
        </div>

    </div>
  )
}
