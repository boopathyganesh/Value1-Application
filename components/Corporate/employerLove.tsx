import Image from 'next/image'
import React from 'react'
import { EmployerLove as data } from '@/context/data'
import MiniCard from '../ui/minicard'

const EmployerLove = () => {
    return (
        <section className='max-w-full bg-black py-10 w-full my-10'>
            <div className='relative w-full h-[400px] pt-10 md:pt-0 flex items-start md:items-center justify-center text-white'>
                <Image src={'/images/group1.png'} alt={''} height={500} width={500} />
                <div className='ml-5 px-10 max-w-5xl w-full flex flex-col items-center gap-4'>
                    <h1 className="text-center text-3xl font-semibold text-gold-200">How Much Employers Love Value1</h1>
                    <p className='text-center text-xl'>Discover the reasons why employers across India are choosing Value1 for their co-ownership
                        and rewards platform.</p>
                    <div className='flex flex-wrap items-center justify-center gap-4'>
                        {data.map((item, index) => (
                            <MiniCard key={index} title={item.title} content={item.content} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmployerLove
