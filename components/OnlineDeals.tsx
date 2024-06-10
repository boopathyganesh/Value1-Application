"use client"

import React from 'react'
import DealsCard from './ui/DealsCard'
import Banner from './Banner';
//import { Tabs, Tab } from "@nextui-org/tabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { brand } from '@/context/data';


const OnlineDeals = () => {
    return (
        <section className='w-full bg-black-600/80 py-14'>
            <div className='max-w-8xl mx-auto bg-black-800 p-10 rounded-2xl'>
                <div className='flex flex-col items-start justify-center gap-4'>
                    <h2 className="ml-10 text-3xl font-bold">Online Deals</h2>
                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus blanditiis iure id aliquid quia aut placeat, ducimus vitae libero assumenda. Quod nesciunt, ex soluta blanditiis expedita officiis voluptas obcaecati itaque.</p> */}
                </div>
                <div className='flex items-center justify-center'>
                    <Banner />
                </div>
                <div className='mt-10'>
                    <div className="relative flex w-full flex-col">
                        <Tabs defaultValue="top-brands" className="w-full">
                            <TabsList className='' >
                                <TabsTrigger value="top-brands">Top Brands</TabsTrigger>
                                <TabsTrigger value="trending-deals">Trending Deals</TabsTrigger>
                            </TabsList>
                            <TabsContent value="top-brands">
                                <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                                    {brand.map((card, index) => (
                                        <DealsCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={card.rating} price={card.price} />
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="trending-deals">
                                <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                                    {brand.map((card, index) => (
                                        <DealsCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={3} price={card.price} />
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                        <button className='absolute top-0 right-5 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                    {/* <div className='max-w-7xl mx-auto my-4 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Top Brands</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident recusandae dicta, impedit libero eaque in consequatur obcaecati asperiores accusamus illum ex iusto ipsum dolores soluta sapiente beatae vel incidunt.</p> 
                        <div className='flex items-center justify-center gap-5 py-4'>
                            {data.map((card, index) => (
                                <CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={card.rating} price={card.price} />
                            ))}
                        </div>
                        <button className='absolute top-0 right-10 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                    <div className='max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Trending Deals</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident recusandae dicta, impedit libero eaque in consequatur obcaecati asperiores accusamus illum ex iusto ipsum dolores soluta sapiente beatae vel incidunt.</p>
                        <div className='flex items-center justify-center gap-5 py-10'>
                            {data.map((card, index) => (
                                <CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={card.rating} price={card.price} />
                            ))}
                        </div>
                        <button className='absolute top-0 right-10 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div> */}
                </div>
            </div>

        </section>
    )
}

export default OnlineDeals
