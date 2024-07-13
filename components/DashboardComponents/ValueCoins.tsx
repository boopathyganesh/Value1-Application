import Image from 'next/image'
import React from 'react'

const ValueCoins = () => {
  return (
    <div className="relative flex flex-col items-center justify-start rounded-3xl p-4 w-full h-52 gap-5 bg-white group">
      <h3 className='text-lg font-semibold w-full pl-10'>Value Coins</h3>
      <div className='w-full flex items-center justify-center gap-10'>
        <Image src={"/images/svgs/value-coin.svg"} alt='' height={500} width={500} className='w-20 h-auto group-hover:animate-jello-vertical smooth'/>
        <span className='text-xl font-bold'>101</span>
      </div>
      <button className='absolute bottom-5 right-10 p-3 rounded-xl bg-gold-200'>Redeem</button>
    </div>
  )
}

export default ValueCoins
