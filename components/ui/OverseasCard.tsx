import { formatCurrency } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
    title: string;
    image: string;
}

const OverseasCard = ({ title,image}: CardProps) => {
    return (
        <div className='flex flex-col items-center justify-between w-72 h-[350px] bg-white rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${image})`}}>
            <div className='flex items-center justify-center gap-1.5 bg-black-800/30 p-5 h-full w-full'>
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
        </div>
    )
}
export default OverseasCard
