import React from 'react'
import CustomCard from './ui/CustomCard'
import Image from 'next/image';
import { data } from '@/context/data';


const ValueBrands = () => {
    return (
        <section className='w-full bg-black-600/80 py-2'>
            <div className='max-w-8xl mx-auto p-10 rounded-2xl bg-black-800'>
                <div className='flex flex-col items-start justify-center gap-4'>
                    <h2 className="ml-10 text-3xl font-bold">Value Brands</h2>
                    <div className='mt-10 relative max-w-6xl mx-auto w-full bg-gold-300 flex items-center justify-end pr-20 gap-10 h-64 rounded-3xl'>
                        <div className=' flex items-center justify-center' >
                            <Image className='absolute bottom-0 left-0 w-64 pointer-events-none' src={'/images/Asset-28.png'} width={500} height={500} alt={''} />
                            <h1 className='text-right text-2xl font-semibold text-black-800'>Planning for a Trip?</h1>
                        </div>
                        <div className='h-10 border-l border-white/80'></div>
                        <div className='flex items-center justify-center gap-5'>
                            <p className='text-xl font-medium'>Find everything your need to start.</p>
                            <a href='/reward-store/travel/bus-booking' className='bg-gold-600 px-3 py-2 rounded-3xl'>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Value Brands</h1>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident recusandae dicta, impedit libero eaque in consequatur obcaecati asperiores accusamus illum ex iusto ipsum dolores soluta sapiente beatae vel incidunt.</p> */}
                        <div className='flex items-center justify-center gap-5 py-10'>
                            {data.map((card, index) => (
                                <CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={card.rating} price={card.price} />
                            ))}
                        </div>
                        <button className='absolute top-0 right-10 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ValueBrands;
