import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
    type: "brand"|"professional";
    title: string;
    image: string;
}

const ProfessionalCard = ({ title,image,type}: CardProps) => {
    return (
        <div className='relative flex flex-col items-center justify-center w-72 h-[350px] bg-white rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${image})`}}>
            <div className='absolute bottom-0 flex items-center justify-center p-3 w-full bg-black/55 text-white rounded-t-2xl max-h-20 hover:max-h-max smooth'>
                <h1 className='text-xl text-center font-semibold'>{title}</h1>
            </div>
        </div>
    )
}
export default ProfessionalCard
