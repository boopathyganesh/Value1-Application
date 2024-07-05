import React from 'react'
import Image from 'next/image';
import ProfessionalCard from './ui/ProfessionalCard';
import { v_prof } from '@/context/data';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ValueProfessionals = () => {

    return (
        <section className='w-full bg-black py-2'>
            <div className='max-w-8xl mx-auto p-5 md:px-10 py-5 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Value Professionals</h2>
                    <div className='mt-10 pt-5 md:pt-0 relative max-w-sm md:max-w-6xl mx-auto w-full bg-gold-300 flex flex-col md:flex-row items-center justify-start md:justify-end md:pr-20 gap-3 md:gap-10 h-64 rounded-3xl'>
                        <div className='flex flex-col md:flex-row items-center justify-center' >
                            <Image className='absolute bottom-0 right-0 md:left-0 w-48 md:w-64 pointer-events-none' src={'/images/Asset-28.png'} width={500} height={500} alt={''} />
                            <h1 className='text-center md:text-right text-2xl font-semibold text-black-800'>Planning for a Trip?</h1>
                        </div>
                        <div className='hidden md:flex h-10 border-l border-white/80'></div>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5'>
                            <p className='text-xl font-medium'>Find everything your need to start.</p>
                            <a href='/reward-store/travel/bus-booking' className='bg-gold-600 px-3 py-2 rounded-3xl text-center'>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Value Professionals</h1>
                        <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-5 py-10'>
                            <Carousel>
                                <CarouselContent className='max-w-7xl flex px-4'>
                                    {v_prof.map((card, index) => (
                                        <CarouselItem key={index} className='basis-1/4'>
                                            <ProfessionalCard key={index} title={card.title} image={card.imageUrl} type='professional' />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className='bg-gold-300 text-black-800' />
                                <CarouselNext className='bg-gold-300 text-black-800' />
                            </Carousel>
                        </div>
                        <div className='absolute -bottom-5 lg:top-0 lg:bottom-auto right-10 flex items-center justify-center gap-5'>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Default(TN)" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Tamil Nadu</SelectItem>
                                    <SelectItem value="dark">Karnataka</SelectItem>
                                    <SelectItem value="system">Kerala</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Default(Chennai)" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Chennai">Chennai</SelectItem>
                                    <SelectItem value="Coimbatore">Coimbatore</SelectItem>
                                    <SelectItem value="Madurai">Madurai</SelectItem>
                                    <SelectItem value="Tiruchirappalli">Tiruchirappalli</SelectItem>
                                    <SelectItem value="Tuticorin">Tuticorin</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ValueProfessionals;
