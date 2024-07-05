import React from 'react'
import OverseasCard from './ui/OverseasCard';
import { languages, overseas } from '@/context/data';
import LanguageCard from './ui/LanguageCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Education = () => {
    return (
        <section className='w-full bg-black py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto p-5 md:p-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Education</h2>
                </div>
                <div className='mt-10'>
                    <div className='max-w-sm md:max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Overseas Education</h1>
                        <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-5 py-10'>
                            <Carousel>
                                <CarouselContent className='max-w-7xl flex px-4'>
                                    {overseas.map((card, index) => (
                                        <CarouselItem key={index} className='basis-1/4'>
                                            <OverseasCard key={index} title={card.title} image={card.imageUrl} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className='bg-gold-300 text-black-800' />
                                <CarouselNext className='bg-gold-300 text-black-800' />
                            </Carousel>
                        </div>
                        <button className='absolute -bottom-5 lg:top-0 lg:bottom-auto right-10 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                    <div className='max-w-sm md:max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Language classes</h1>
                        <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-5 py-10'>
                            <Carousel>
                                <CarouselContent className='max-w-7xl flex px-4'>
                                    {languages.map((card, index) => (
                                        <CarouselItem key={index} className='basis-1/4'>
                                            <LanguageCard key={index} title={card.title} image={card.imageUrl} rating={card.rating} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className='bg-gold-300 text-black-800' />
                                <CarouselNext className='bg-gold-300 text-black-800' />
                            </Carousel>
                        </div>
                        <button className='absolute -bottom-5 lg:top-0 lg:bottom-auto right-10 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;
