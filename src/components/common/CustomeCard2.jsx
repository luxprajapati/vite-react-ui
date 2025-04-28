import React from 'react'

export const CustomeCard2 = ({imageName, colorcode, description, heading}) => {
    console.log(colorcode);
    console.log(imageName);
    console.log(description);
    console.log(heading);
 
  return (
    <div className='flex justify-center items-center xl:w-[604px] xl:h-[237px]  w-auto h-auto xl:m-0 m-3  border-[1px] border-[#E7DAED]'>
        <div className='xl:w-[537px] xl:h-[139px] w-auto h-auto justify-between flex flex-row gap-x-5 xl:m-0 m-5'>
            {/* image div */}
            <div className='w-[69px] h-[56px] rounded-[10px] flex justify-center items-center'
                style={{ backgroundImage: `linear-gradient(120deg, ${colorcode.from} 50%, ${colorcode.to} 100%)` }}
            >
                <img className='' src={imageName} alt={imageName} />
            </div>

            {/* text div */}
            <div className=' flex flex-col gap-y-2 xl:w-[545px] xl:h-[139px] w-[90%] font-inter'>
                <div className='text-[20px] font-semibold'>{heading}</div>
                <div className='text-[14px] font-normal xl:w-[453px]'>{description}</div>
            </div>
        </div>
    </div>
  )
}
