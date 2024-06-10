import Education from '@/components/Education'
import Finance from '@/components/Finance'
import HeroSection from '@/components/HeroSection'
import OnlineDeals from '@/components/OnlineDeals'
import Travel from '@/components/Travel'
import ValueBrands from '@/components/ValueBrands'
import ValueProfessionals from '@/components/ValueProfessionals'
import Partners from '@/components/partners'
import Testimonials from '@/components/testimonials'
import React from 'react'

const pages = () => {
  return (
    <main className='max-w-full w-full flex flex-col items-center justify-center'>
      <HeroSection />
      <OnlineDeals />
      <Travel />
      <Finance />
      <Education />
      <ValueBrands />
      <ValueProfessionals />
      <Testimonials />
      <Partners />
    </main>
  )
}

export default pages
