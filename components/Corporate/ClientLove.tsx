import Image from 'next/image'
import React from 'react'
import { ClientLove as data } from '@/context/data'
import ApproachCard from '../ui/ApproachCard'

const ClientLove = () => {
    return (
        <section className='max-w-9xl py-10 flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center text-center'>
                <h1 className='text-gold-400 text-3xl font-bold'>Discover Value 1 Company&apos;s Unique Approach</h1>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-5 pt-4'>
                {data.map((item,index)=>(
                    <ApproachCard key={index} title={item.title} image={item.image} description={item.content} />
                ))}
            </div>
        </section>
    )
}

export default ClientLove
