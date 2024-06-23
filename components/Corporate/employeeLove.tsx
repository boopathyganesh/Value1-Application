import Image from 'next/image'
import React from 'react'
import { EmployeeLove as data } from '@/context/data'
import MiniCard from '../ui/minicard'

const EmployeeLove = () => {
    return (
        <section className='max-w-full bg-white/15 py-10 w-full my-10'>
            <div className='relative w-full h-[400px] pt-10 md:pt-0 flex items-start md:items-center justify-start text-white'>
                <div className='ml-44 px-10 max-w-5xl w-full flex flex-col items-center gap-4'>
                    <h1 className="text-center text-3xl font-semibold text-gold-200">How Much Employees Love Value1</h1>
                    <p className='text-center text-xl'>See why employees across India are embracing the Value1 platform for their rewards and
                        co-ownership benefits.</p>
                    <div className='flex flex-wrap items-center justify-center gap-4'>
                        {data.map((item, index) => (
                            <MiniCard key={index} title={item.title} content={item.content} />
                        ))}
                    </div>
                </div>
                <Image src={'/images/heart.png'} alt={''} height={500} width={500} className='w-96 absolute bottom-0 right-44' />
            </div>
        </section>
    )
}

export default EmployeeLove
