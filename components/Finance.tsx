'use client'

import React from 'react'
import CustomCard from './ui/CustomCard'
import { FaCheck } from "react-icons/fa6";
import Image from 'next/image';
//import { Tabs, Tab } from "@nextui-org/tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Finance = () => {
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
        <section className='w-full bg-black-600/80 py-14'>
            <div className='max-w-8xl mx-auto bg-black-800 p-10 rounded-2xl'>
                <div className='flex flex-col items-start justify-center gap-4'>
                    <h2 className="ml-10 text-3xl font-bold">Finance</h2>
                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus blanditiis iure id aliquid quia aut placeat, ducimus vitae libero assumenda. Quod nesciunt, ex soluta blanditiis expedita officiis voluptas obcaecati itaque.</p> */}
                </div>
                <div className='max-w-7xl w-full mx-auto flex items-center justify-between my-16'>
                    <div className='w-1/2 rounded-3xl overflow-hidden'>
                        <Image src={'/images/Asset-013.jpg'} alt={''} width={800} height={800} className='w-full h-auto' />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <h1 className='text-2xl font-bold text-center'>Why Upskill becomes the best training course & bootcamp.</h1>
                        <div className='flex flex-wrap items-center justify-center gap-5 max-w-2xl'>
                            <div className='flex items-center justify-start gap-3 w-64'>
                                <span>
                                    <FaCheck  className='text-3xl text-gold-500' />
                                </span>
                                <div className='flex flex-col items-start justify-center gap-2'>
                                    <h1 className='text-xl font-semibold'>Intensive Learning</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-3 w-64'>
                                <span>
                                    <FaCheck  className='text-3xl text-gold-500' />
                                </span>
                                <div className='flex flex-col items-start justify-center gap-2'>
                                    <h1 className='text-xl font-semibold'>Intensive Learning</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-3 w-64'>
                                <span>
                                    <FaCheck  className='text-3xl text-gold-500' />
                                </span>
                                <div className='flex flex-col items-start justify-center gap-2'>
                                    <h1 className='text-xl font-semibold'>Intensive Learning</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-3 w-64'>
                                <span>
                                    <FaCheck  className='text-3xl text-gold-500' />
                                </span>
                                <div className='flex flex-col items-start justify-center gap-2'>
                                    <h1 className='text-xl font-semibold'>Intensive Learning</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                <div className="relative flex w-full flex-col">
                        <Tabs defaultValue="loans" className="w-full">
                            <TabsList className='ml-20'>
                                <TabsTrigger value="loans">Loans</TabsTrigger>
                                <TabsTrigger value="insurance">Insurance</TabsTrigger>
                                <TabsTrigger value="credit-cards">Credit Cards</TabsTrigger>
                                <TabsTrigger value="capital-market">Capital Market</TabsTrigger>
                            </TabsList>
                            <TabsContent value="loans">
                                <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                                    {data.map((card, index) => (
                                        <CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={card.rating} price={card.price} />
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="insurance">
                                <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                                    {data.map((card, index) => (
                                        <CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={3} price={card.price} />
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="credit-cards">
                                <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                                    {data.map((card, index) => (
                                        <CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={3} price={card.price} />
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="capital-market">
                                <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                                    {data.map((card, index) => (
                                        <CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={3} price={card.price} />
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                        <button className='absolute top-0 right-5 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Finance
