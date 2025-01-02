'use client'
import React, { useState } from 'react'
import clsx from 'clsx'

const FaqItem = ({ item, index }) => {
  const [checkId, setCheckId] = useState(null)
  function handleAccordian (index) {
    setCheckId(prevIndex => (prevIndex == index ? null : index))
  }
  return (
    <div
      onClick={() => {
        handleAccordian(item.id)
      }}
      className={clsx( 
        `transition-all backdrop-blur-[3px] mt-[2em] rounded-2xl px-4 ease-out duration-1000 delay-200 cursor-pointer`,
        item.id == checkId &&
          'border-t-[2px] rounded-3xl bg-blue-400  max-lg:px-3 px-[1em] max-lg:py-5 py-[2em] border-[#2EF2FF]'
      )}
    >
      {index < 10 && (
        <p className='tracking-wider font-medium text-white'>
          {`${item.id != 10 ? 0 : ''}${Number(item.id)}`}
        </p>
      )}
      <div className='flex flex-col gap-3'>
        <div className='flex cursor-pointer   items-center justify-between'>
          {
            <span className='text-2xl max-w-[19em] max-md:text-lg font-medium text-black'>
              {' '}
              {item.question}
            </span>
          }
          <div className='size-fit border-black hover:border-blue-900 transition-borderColor ease-in-out duration-300 delay-100 border-[1px] rounded-full p-1'>
            <span className='transition-all delay-100 ease-in-out duration-1000 font-medium size-10 flex items-center text-white text-2xl justify-center rounded-full bg-blue-500 '>
              {item.id == checkId ? '-' : '+'}
            </span>
          </div>
        </div>
        {item.id == checkId && (
          <div className='max-md:text-lg pr-5 md:text-xl  tracking-wider text-black'>
            {item.answer}
          </div>
        )}
      </div>
    </div>
  )
}

export default FaqItem
