import React from 'react'
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Hero = () => {
    return (
        <section className='max-w-8xl w-full flex items-center justify-center gap-10 mt-10 p-10 text-white'>
            <div className='w-[500px] flex flex-col items-start justify-center gap-10'>
                <div className='flex flex-col items-start justify-center'>
                    <h1 className='text-5xl font-semibold tracking-wide leading-tight mb-5 text-gold-400'>Why Choose Value1?</h1>
                    <p className='text-left text-lg font-normal'>See why both employers and employees love Value1!</p>
                    <p className='text-left text-lg font-normal'>Discover what makes our co-ownership rewards platform different.</p>
                </div>
                <div className='w-full'>
                    <Accordion type="single" collapsible className="w-full" defaultValue='item-1'>
                        <AccordionItem value="item-1">
                            <AccordionTrigger><div>Empowering <span className='text-gold-400'>India&apos;s Workforce</span></div></AccordionTrigger>
                            <AccordionContent>
                                Provide exclusive perks to your employees across India with a single employee discounts and
                                rewards platform.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger><div>Completely <span className='text-gold-400'>Customizable</span></div></AccordionTrigger>
                            <AccordionContent>
                                Dozens of configurable elements, including your branding, design, and content.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger><div>Comprehensive <span className='text-gold-400'>Benefits Marketplace</span></div></AccordionTrigger>
                            <AccordionContent>
                                Pick and choose what you need from a world of rewards-focused benefits
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger><div>Actionable <span className='text-gold-400'>Business Intelligence</span></div></AccordionTrigger>
                            <AccordionContent>
                                24/7 access to a reporting suite, providing you with business intelligence and data-supported
                                recommendations.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className='w-1/2 h-[500px] flex item-center justify-center bg-[url("/images/corporate_banner1.png")] bg-cover bg-no-repeat bg-top'>
                {/* <Image src={'/images/corporate_banner1.png'} height={500} width={500} alt={''} className='w-full h-auto ' /> */}
            </div>
            
        </section>
    )
}

export default Hero
