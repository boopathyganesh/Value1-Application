import { formatCurrency } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
    title: string;
    content: string;
    image: string | StaticImageData;
    rating: number;
    price?: number;
}

const FinanceCard = ({ title, content, image}: CardProps) => {
    return (
        <div className='flex flex-col items-center justify-between w-72 h-52 bg-white/10 text-white rounded-2xl overflow-hidden'>
            <div className='flex flex-col items-start justify-center gap-1.5 text-white p-5'>
                <div className='flex items-center justify-center gap-4'>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center bg-white overflow-hidden'>
                        <Image src={image} alt={""} height={500} width={500} />
                    </div>
                    <h1 className='text-lg font-medium w-44 text-gold-200'>{title}</h1>
                </div>
                <p className='text-gray-500 text-sm'>{content}</p>
                <a href="" className='mt-3 p-2 bg-gold-200 text-black rounded-lg'>Apply Now</a>
            </div>
        </div>
    )
}

export default FinanceCard
