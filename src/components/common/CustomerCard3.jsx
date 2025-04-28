import React from 'react'

export const CustomerCard3 = ({id, name, description}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-2 xl:w-[299px] xl:h-[159px] xl:m-0 m-5  sm:w-[500px] h-auto border-[1px] border-[#E7DAED] rounded-[9px] p-4'>
        <div className='flex flex-col justify-between items-start  xl:w-[245px] xl:h-[111px] w-auto h-auto  '>
            <div className='font-inter font-bold text-[18px] bg-gradient-to-bl from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#{id} <span className='text-[#1A202C]'>{name}</span></div>
            <div className='font-inter font-normal text-[14px] ' >{description}</div>
        </div>
    </div>
  )
}
