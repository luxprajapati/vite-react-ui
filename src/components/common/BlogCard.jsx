import React from 'react'
import { NavLink } from 'react-router-dom';
import readMore from "../../assets/Link-click.png";


export const BlogCard = ({imageName, description}) => {
  return (
    <div className='flex flex-col justify-between w-[254px] h-[315px]  '>
        <div className='w-[254px] h-[175px] rounded-[10px]'>
            <img className='object-fit w-[254px] h-[175px]' src={imageName} alt={imageName} />
        </div>
        <div className='font-inter font-medium text-[16px] leading-[25px] text-[#2D3748] '>
            {description}
        </div>
        <div className=' flex justify-end items-center'>
            <NavLink to="#" >
                <img src={readMore} alt="readMore btn" />
            </NavLink>
        </div>
    </div>
  )
}
