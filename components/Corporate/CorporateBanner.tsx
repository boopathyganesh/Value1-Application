import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className='relative max-w-sm md:max-w-8xl w-full flex items-center justify-center my-10 rounded-2xl bg-gold-200 overflow-hidden'>
            <div className='w-full h-[400px] pt-10 md:pt-0 flex items-start md:items-center justify-center banner'>
                {/* <Image src={'/images/group1.png'} alt={''} height={500} width={500} /> */}
                <div className='px-10 max-w-2xl w-full flex flex-col items-center justify-start md:justify-center gap-5'>
                    <h1 className="text-center text-2xl md:text-4xl font-semibold text-black">Join the Value1 Revolution</h1>
                    <p className='text-lg font-medium text-center text-white/80'>Be part of a movement that turns every transaction into a rewarding experience. Empower your
                        employees, enhance their benefits, and foster a culture of co-ownership.
                    </p>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <h3 className='text-center font-bold text-xl text-black'>Start Your Journey with Value1 Today!</h3>
                        <button className='rounded-xl p-3 md:px-5 md:py-3 text-white text-md md:text-xl font-medium bg-black hover:bg-black/70 smooth'>Join Now</button>
                    </div>

                </div>
            </div>
            {/* <div className='absolute -top-0 -right-96 w-[1000px] h-full bg-[url("/images/Asset-06.png")] bg-cover bg-no-repeat opacity-40' style={{zIndex:0}}></div> */}
        </section>
    )
}

export default Banner
