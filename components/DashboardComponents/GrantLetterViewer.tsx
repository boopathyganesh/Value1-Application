import React from 'react'

const GrantLetterViewer = () => {
    return (
        <div className="flex flex-col items-left justify-center rounded-3xl max-w-2xl w-[600px] h-max px-4 py-2 gap-3 bg-white/15 text-white">
            <h2 className='text-xl font-semibold'>Your GrantLetter</h2>
            <h4 className='text-base font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita provident quo voluptates iure nisi quidem quaerat voluptatibus in dolorem repellat rerum, earum ducimus debitis id ratione, a accusamus non?</h4>
            <div className='flex items-center justify-end'>
                <button className='p-2 bg-gold-200 text-black w-max rounded-xl'>View Letter</button>
            </div>
        </div>
    )
}

export default GrantLetterViewer
