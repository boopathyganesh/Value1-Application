import React from 'react'
import BenefitCard from '../ui/BenefitCard'

const BenefitsSection = () => {
  return (
    <section className='max-w-7xl flex items-center justify-center mb-10'>
      <div className='flex flex-col items-center justify-center'>
        <div className='mb-20'>
            <h1 className='text-center text-4xl text-gold-400 font-semibold mb-2'>Unlock Exclusive Benefits and Gold Rewards for Your Team</h1>
            <p className='text-center text-2xl text-white/70'>Tailor Programs to Fit Your Employee&apos;s Needs</p>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-5'>
            <BenefitCard title={'Exclusive Rewards'} image={'/images/svgs/savings.svg'} description={'Unlock special pricing and earn gold rewards across online shopping, travel, ticketing, financial services, health, value brands, and professional services. Your expenses transform into gold rewards and ownership shares.'}  />
            <BenefitCard title={'Diverse Services'} image={'/images/svgs/savings.svg'} description={'Explore exclusive deals in online shopping for brands, seamless travel bookings, convenient ticketing, robust financial services, comprehensive health solutions, value brand offers, and expert professional consultations.'}  />
            <BenefitCard title={'Transformative Rewards'} image={'/images/svgs/savings.svg'} description={'Recycle your expenses into valuable gold rewards and ownership shares. Empower your employees with financial growth opportunities and exclusive benefits tailored to their lifestyle needs and preferences'}  />
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
