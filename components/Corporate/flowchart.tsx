import React from 'react'
import RightArow from "@/public/images/svgs/right-arrow-dashed.svg"
import Image from 'next/image';

interface ElementProps {
    title:string;
    description:string;
}

const Element = ({title,description}:ElementProps) => {
    return (
        <div className='p-2 w-40 h-52 flex flex-col items-center justify-center'>
            <div className='h-28 w-28 bg-white border-4 border- border-black border-dashed rounded-full smooth flex items-center justify-center p-2'>
                <span className='text-center text-lg font-medium text-gold-400'>{title}</span>
            </div>
            <div className='mt-3'>
                <p className='text-center text-sm'>{description}</p>
            </div>
        </div>
    )
}

const FlowChart = () => {
  return (
    <section className='max-w-7xl w-full my-20 flex items-center justify-center'>
      <div className='flex flex-wrap flex-col lg:flex-row items-center justify-center'>
        <Element title={'MSOP'} description={'Employee Ownership Plan Advantage!'} />
        <Image src={RightArow} alt='Direction Arrow' className='w-12 relative -top-7' />
        <Element title={'Brands'} description={'Explore 500+ Top Brands!"'} />
        <Image src={RightArow} alt='Direction Arrow' className='w-12 relative -top-7' />
        <Element title={'Gold Rewards'} description={'Enjoy Gold Rewards and Special Prices!'} />
        <Image src={RightArow} alt='Direction Arrow' className='w-12 relative -top-7' />
        <Element title={'Savings'} description={'Save Up to 40% with Gold Expenses!'} />
        <Image src={RightArow} alt='Direction Arrow' className='w-12 relative -top-7' />
        <Element title={'Revolution'} description={'Join the Movement Today!'} />
        <Image src={RightArow} alt='Direction Arrow' className='w-12 relative -top-7' />
        <Element title={'Savings'} description={'Employers Save with Zero Cost!'} />
      </div>
    </section>
  )
}

export default FlowChart
