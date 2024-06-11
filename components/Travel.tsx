import React from 'react'
import CustomCard from './ui/CustomCard';
import BigCard from './ui/BigCard';
import Image from 'next/image';

const Travel = () => {
    const data = [
        {
            title: "Adobe Illustrator CC – Advanced Training Course",
            price: 999,
            content: "By Onecontributor in Design",
            rating: 4.5,
            imageUrl: "/images/card1.jpg"
        },
        {
            title: "Adobe Illustrator CC – Advanced Training Course",
            price: 999,
            content: "By Onecontributor in Design",
            rating: 4.5,
            imageUrl: "/images/card2.jpg"
        },
        {
            title: "Adobe Illustrator CC – Advanced Training Course",
            price: 999,
            content: "By Onecontributor in Design",
            rating: 4.5,
            imageUrl: "/images/card1.jpg"
        },
        {
            title: "Adobe Illustrator CC – Advanced Training Course",
            price: 999,
            content: "By Onecontributor in Design",
            rating: 4.5,
            imageUrl: "/images/card2.jpg"
        }
    ];
    return (
        <section className='w-full bg-black py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto p-5 md:p-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Travel</h2>
                    <div className='mt-10 pt-5 md:pt-0 relative max-w-sm md:max-w-6xl mx-auto w-full bg-gold-300 flex flex-col md:flex-row items-center justify-start md:justify-end md:pr-20 gap-3 md:gap-10 h-64 rounded-3xl'>
                        <div className='flex flex-col md:flex-row items-center justify-center' >
                            <Image className='absolute bottom-0 right-0 md:left-0 w-48 md:w-64 pointer-events-none' src={'/images/Asset-28.png'} width={500} height={500} alt={''} />
                            <h1 className='text-center md:text-right text-2xl font-semibold text-black-800'>Planning for a Trip?</h1>
                        </div>
                        <div className='hidden md:flex h-10 border-l border-white/80'></div>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5'>
                            <p className='text-xl font-medium'>Find everything your need to start.</p>
                            <a href='/reward-store/travel/bus-booking' className='bg-gold-600 px-3 py-2 rounded-3xl'>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mb-5 md:mt-0'>
                    <div className='max-w-sm md:max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2 text-center md:text-left'>Bus Booking</h1>
                        <div className='flex items-center justify-center gap-5 py-10'>
                            <BigCard title={data[0].title} content={data[0].content} image={data[0].imageUrl} price={data[0].price} rating={data[0].rating} />
                        </div>
                        <button className='absolute -bottom-5 lg:top-0 lg:bottom-auto right-10 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                    <div className='max-w-sm md:max-w-7xl mx-auto my-5 relative'>
                        <h1 className='text-2xl font-semibold mb-2 text-center md:text-left'>Holiday Planners</h1>
                        <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-5 py-10'>
                            {data.map((card,index)=>(
                                <CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={card.rating} price={card.price} />
                            ))}
                        </div>
                        <button className='absolute -bottom-5 lg:top-0 lg:bottom-auto right-10 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Travel;
