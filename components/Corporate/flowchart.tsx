import React from 'react'

import Image from 'next/image';
import Arrow from './FlowChartElement';

const FlowChart = () => {
  return (
    <section className='max-w-7xl w-full my-20 flex items-center justify-center'>
      <div className='flex flex-wrap flex-col lg:flex-row items-center justify-center'>
        <Arrow title={'MSOP'} description='Employee Ownership Plan Advantage!' />
        <Image src={'/images/svgs/right-arrow-dashed.svg'} width={500} height={500} alt='Direction Arrow' className='w-12 relative -top-7' />
        <Arrow title={'Brands'} description='Explore 500+ Top Brands!' />
        <Image src={'/images/svgs/right-arrow-dashed.svg'} width={500} height={500} alt='Direction Arrow' className='w-12 relative -top-7' />
        <Arrow title={'Gold Rewards'} description='Enjoy Gold Rewards and Special Prices!' />
        <Image src={'/images/svgs/right-arrow-dashed.svg'} width={500} height={500} alt='Direction Arrow' className='w-12 relative -top-7' />
        <Arrow title={'Savings'} description='Save Up to 40% with Gold Expenses!' />
        <Image src={'/images/svgs/right-arrow-dashed.svg'} width={500} height={500} alt='Direction Arrow' className='w-12 relative -top-7' />
        <Arrow title='Revolution' description='Join the Movement Today!' />
        <Image src={'/images/svgs/right-arrow-dashed.svg'} width={500} height={500} alt='Direction Arrow' className='w-12 relative -top-7' />
        <Arrow title='Savings' description='Employers Save with Zero Cost!' />
      </div>
    </section>
  )
}

export default FlowChart
