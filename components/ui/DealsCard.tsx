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

const DealsCard = ({ title, content, image, rating, price }: CardProps) => {
    return (
        <div className='flex items-center justify-between w-[350px] h-32 bg-white rounded-2xl overflow-hidden px-5 group'>
            <div className='flex items-center justify-center w-24 h-24 rounded-full border-2 border-gold-500 group-hover:border-dashed overflow-hidden bg-white'>
                <Image src={image} alt={title} width={800} height={800} className='w-20 h-auto group-hover:scale-105 smooth' />
            </div>
            <div className='flex flex-col items-center justify-center gap-1.5 text-black-800 p-5'>
                <h1 className='text-lg font-medium'>{title}</h1>
                <p className='text-gold-500 text-sm'>Flat {content} Worth of Gold</p>
                <button className='px-2 py-2 bg-gold-200 text-white rounded-xl'>Avail Now</button>
            </div>
        </div>
    )
}

export default DealsCard
