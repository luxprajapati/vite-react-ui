import React from 'react'
import { CustomerCard3 } from './common/CustomerCard3';
import trophy from "../assets/Trophy_perspective_matte.png";


export const DevelopmentCycle = () => {

    const steps = [
  {
    id: 1,
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
  },
  {
    id: 2,
    title: "Sprint planning",
    description:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    id: 3,
    title: "Tech architecture",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
  },
  {
    id: 4,
    title: "Standups & weekly demos",
    description:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    id: 5,
    title: "Code reviews",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
  },
  {
    id: 6,
    title: "Iterative delivery",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];



  return (
    <div>
        {/* heading  */}
        <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center justify-between gap-y-7 mt-20'>
                <div className='w-[69px] h-[5px] bg-gradient-to-r from-[#F76680] to-[#57007B]' ></div>
                <div className='flex flex-col h-[108px] text-center items-center leading-[55px] font-inter font-normal text-[#1A202C] tracking-[1.5px] text-[35px]'>
                    <div>How development</div>
                    <div className='font-bold'>through Alcaline works</div>
                </div>
            </div>
        </div>

        {/* process steps */}

        
                <div className='flex flex-col justify-center items-center gap-y-5 mt-20 mb-[100px] xl:hidden'>
  {steps.map((step) => (
    <>
    <CustomerCard3
      id={step.id}
      name={step.title}
      description={step.description}
      key={step.id}
    />
    <div className='w-[30px] h-[2px]  bg-gradient-to-l from-[#F76680] to-[#57007B] rotate-90'> </div></>
  ))}

  <div>
    <img src={trophy} alt="trophy"/>
  </div>
</div>

{/* Desktop View */}
<div className='mt-20 overflow-hidden hidden xl:flex flex-col gap-y-5 mb-[100px]'>
  {/* Top Row - Odd Steps */}
  <div className='flex flex-row justify-center items-center gap-x-20 translate-x-[-2.5%]'>
    {steps.filter((step) => step.id % 2 !== 0).map((step) => (
      <CustomerCard3
        id={step.id}
        name={step.title}
        description={step.description}
        key={step.id}
      />
    ))}
  </div>

  {/* Lining and Trophy */}
  <div className='flex flex-col justify-evenly h-[60px]'>
    <div className='flex flex-row justify-evenly translate-x-[-2.5%]'>
      <div className='w-[30px] h-[2px] rotate-90 bg-gradient-to-l from-[#F76680] to-[#57007B]'></div>
      <div className='w-[30px] h-[2px] rotate-90 bg-gradient-to-l from-[#F76680] to-[#57007B]'></div>
      <div className='w-[30px] h-[2px] rotate-90 bg-gradient-to-l from-[#F76680] to-[#57007B]'></div>
    </div>

    <div className='relative flex justify-center mx-auto w-[1200px] h-[2px] bg-gradient-to-l from-[#F76680] to-[#57007B]'>
      <div className='absolute right-[-52px] bottom-[-11px]'>
        <img src={trophy} alt="trophy" />
      </div>
    </div>

    <div className='flex flex-row justify-evenly translate-x-[2.5%]'>
      <div className='w-[30px] h-[2px] rotate-90 bg-gradient-to-l from-[#F76680] to-[#57007B]'></div>
      <div className='w-[30px] h-[2px] rotate-90 bg-gradient-to-l from-[#F76680] to-[#57007B]'></div>
      <div className='w-[30px] h-[2px] rotate-90 bg-gradient-to-l from-[#F76680] to-[#57007B]'></div>
    </div>
  </div>

  {/* Bottom Row - Even Steps */}
  <div className='flex flex-row justify-center items-center gap-x-20 translate-x-[2.5%]'>
    {steps.filter((step) => step.id % 2 === 0).map((step) => (
      <CustomerCard3
        id={step.id}
        name={step.title}
        description={step.description}
        key={step.id}
      />
    ))}
  </div>
</div>       
    </div>
  )
}


