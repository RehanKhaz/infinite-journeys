import React from 'react'
import { FAQ } from '../constants'
import FaqItem from '../components/FaqItem'

const Page = () => {
  return (
    <section
      id='faq'
      className='my-[6em] flex-center  overflow-x-hidden   relative z-[10]'
    >
      <div className='md:w-[60%] w-full'>
        <div className='flex-center flex-col'>
          <h1 className='text-[4em] font-bold  tracking-widest'>FAQ </h1>
          <p className='tracking-wider font-medium text-2xl italic text-black '>
            You've Got Questions , I've Got Answer.
          </p>
        </div>
        <div className=' flex  w-screen px-3  flex-col  max-md:gap-[2em] gap-4  '>
          <div className='flex  flex-col justify-center max-md:gap-[2em] gap-[3em] md:w-[50%]'>
            {FAQ.map((item, index) => {
              return <FaqItem key={index} item={item} index={index} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
