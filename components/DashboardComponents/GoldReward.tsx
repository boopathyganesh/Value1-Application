import React from 'react'

const GoldReward = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl w-full h-52 bg-white p-4">
      <h1 className='text-xl font-semibold'>Gold Reward</h1>
      <div className='w-max flex flex-col items-start justify-center p-4'>
        <h5 className='text-lg font-medium'>Current reward value</h5>
        <p className='text-gold-500 text-base font-normal'><span>&#8377;3,242.17</span><span>(1.7326 gm)</span></p>
        <p className='text-green-500 text-base font-normal'><span>+&#8377;324</span> <span>(11.28%)</span> Total returns</p>
      </div>
    </div>
  )
}

export default GoldReward
