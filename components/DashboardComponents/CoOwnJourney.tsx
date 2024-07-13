import React from 'react'
import {Timeline,TimelineComponent} from '../ui/timeline'

const CoOwnJourney = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl w-2/3 h-96 bg-white p-3 gap-4 overflow-hidden">
      <h1 className='text-xl font-semibold w-full pl-10'>Co-Own Journey(timeline)</h1>
      <div className='overflow-y-scroll h-72 flex items-start justify-center'>
        <Timeline>
          <TimelineComponent title={'Membership added'} date={'10/07/2024'} content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique veniam nulla, eos quis hic, consectetur sequi maxime deserunt aliquid aspernatur, eligendi perspiciatis illo molestias cumque odio iusto omnis quidem?' />
          <TimelineComponent title={'Membership added'} date={'10/07/2024'} content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique veniam nulla, eos quis hic, consectetur sequi maxime deserunt aliquid aspernatur, eligendi perspiciatis illo molestias cumque odio iusto omnis quidem?' />
          <TimelineComponent title={'Membership added'} date={'10/07/2024'} content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique veniam nulla, eos quis hic, consectetur sequi maxime deserunt aliquid aspernatur, eligendi perspiciatis illo molestias cumque odio iusto omnis quidem?' />
          <TimelineComponent title={'Membership added'} date={'10/07/2024'} content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique veniam nulla, eos quis hic, consectetur sequi maxime deserunt aliquid aspernatur, eligendi perspiciatis illo molestias cumque odio iusto omnis quidem?' />
          <TimelineComponent title={'Membership added'} date={'10/07/2024'} content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique veniam nulla, eos quis hic, consectetur sequi maxime deserunt aliquid aspernatur, eligendi perspiciatis illo molestias cumque odio iusto omnis quidem?' />
          
        </Timeline>
      </div>
    </div>
  )
}

export default CoOwnJourney
