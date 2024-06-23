import React from 'react'

interface ElementProps {
    title:string;
    description:string;
}

const FlowChartElement = ({title,description}:ElementProps) => {
    return (
        <div className='p-2 w-40 h-52 flex flex-col items-center justify-center'>
            <div className='h-28 w-28 bg-gold-200 border-4 border- border-black border-dashed rounded-full smooth flex items-center justify-center p-2'>
                <span className='text-center text-lg font-medium text-white'>{title}</span>
            </div>
            <div className='mt-3'>
                <p className='text-center text-sm'>{description}</p>
            </div>
        </div>
    )
}

export default FlowChartElement
