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
import Image from 'next/image';
import BigCardX from './ui/BigCard';

const GoldStore = () => {
    return (
        <section className='w-full bg-black py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto p-5 md:p-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Gold Store</h2>
                </div>
                <div className='relative max-w-sm md:max-w-8xl mx-auto w-full h-[400px] flex items-center justify-end mt-5 rounded-2xl bg-white/10 overflow-hidden bg-[url("/images/gold-nuggets.jpg")] bg-no-repeat bg-center' style={{ backgroundSize: "100%" }}>
                    <div className='px-10 max-w-3xl w-full flex flex-col items-center justify-start md:justify-center gap-4'>
                        <h1 className="text-center text-2xl md:text-4xl font-bold text-white">Unlock Exclusive Benefits and Transform Your Learning Journey into <span className='text-gold-300'>Golden Opportunities!</span></h1>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='max-w-sm md:max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Digital AU/G</h1>
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
                        <h1 className='text-2xl font-semibold mb-2'>Jewellery</h1>
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
                        <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                            <div className='w-1/2'>
                                <h1 className='text-2xl font-semibold mb-2 text-center md:text-left'>Gold SIP</h1>
                                <div className='flex items-center justify-center gap-5 py-10'>
                                    <BigCardX image={"/images/kerla.webp"} />
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <h1 className='text-2xl font-semibold mb-2 text-center md:text-left'>Gold Lease</h1>
                                <div className='flex items-center justify-center gap-5 py-10'>
                                    <BigCardX image={"/images/kerla.webp"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-sm md:max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Coins</h1>
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

export default GoldStore;
