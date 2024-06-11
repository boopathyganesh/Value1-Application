"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DealsCard from './ui/DealsCard'
import Banner from './Banner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { brand } from '@/context/data';


const OnlineDeals = () => {
    const [visibleItems, setVisibleItems] = useState(4); // Initial number of items to display
    const [activeTab, setActiveTab] = useState('top-brands'); // Initial active tab
    const router = useRouter();
    const handleViewMore = () => {
        console.log(visibleItems)
        if(visibleItems > 8 && activeTab === "trending-deals"){
            router.push("/reward-store/online-deals/trending-deals")
        }
        else if(visibleItems > 8 && activeTab === "top-brands"){
            router.push("/reward-store/online-deals/top-stores")
        }
        else{
            setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Show 4 more items on each click
        }
    };

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        setVisibleItems(4); // Reset the number of visible items when the tab changes
    };


    return (
        <section className='w-full bg-black-600/80 py-14'>
            <div className='max-w-sm md:max-w-8xl mx-auto bg-black-800 p-5 md:p-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl text-center md:text-left font-bold">Online Deals</h2>
                </div>
                <div className='flex items-center justify-center'>
                    <Banner />
                </div>
                <div className='mt-10 mb-5 md:mb-0'>
                    <div className="relative flex w-full flex-col">
                        <Tabs defaultValue="top-brands" className="w-full flex flex-col items-center justify-center">
                            <TabsList className=''>
                                <TabsTrigger value="top-brands" onClick={() => handleTabChange('top-brands')}>Top Brands</TabsTrigger>
                                <TabsTrigger value="trending-deals" onClick={() => handleTabChange('trending-deals')}>Trending Deals</TabsTrigger>
                            </TabsList>
                            <TabsContent value="top-brands">
                                <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                                    {brand.slice(0, visibleItems).map((card, index) => (
                                        <DealsCard
                                            key={index}
                                            title={card.title}
                                            content={card.content}
                                            image={card.imageUrl}
                                            rating={card.rating}
                                            price={card.price}
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="trending-deals">
                                <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
                                    {brand.slice(0, visibleItems).map((card, index) => (
                                        <DealsCard
                                            key={index}
                                            title={card.title}
                                            content={card.content}
                                            image={card.imageUrl}
                                            rating={3}
                                            price={card.price}
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                        {/* <button className='absolute -bottom-8 lg:top-0 lg:bottom-auto right-5 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button> */}
                        {(activeTab === 'top-brands' && visibleItems < brand.length) || (activeTab === 'trending-deals' && visibleItems < brand.length) ? (
                            <button
                                onClick={handleViewMore}
                                className='absolute -bottom-8 lg:top-0 lg:bottom-auto right-5 bg-gold-500 px-3 py-2 rounded-2xl'
                            >
                                View More
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OnlineDeals
