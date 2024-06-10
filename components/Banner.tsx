import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className='relative max-w-7xl w-full flex items-center justify-center mt-5 rounded-2xl bg-white/10 overflow-hidden'>
            <div className='w-full h-[400px] flex items-center justify-end bg-[url("/images/Asset-28.png")] bg-contain bg-left-bottom bg-no-repeat'>
                <div className='px-10 max-w-xl w-full flex flex-col items-center justify-center gap-4'>
                    <h1 className="text-right text-4xl font-semibold text-white">Check out these Awesome Deals Online</h1>
                    <button className='border-2 border-gold-500 rounded-xl px-5 py-3 text-white text-xl font-medium'>Join Now</button>
                </div>
            </div>
            {/* <div className='absolute -top-0 -right-96 w-[1000px] h-full bg-[url("/images/Asset-06.png")] bg-cover bg-no-repeat opacity-40' style={{zIndex:0}}></div> */}
        </section>
    )
}

export default Banner
