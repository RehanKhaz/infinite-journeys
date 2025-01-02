' use client'
import React from 'react'
import { IoMdTime } from "react-icons/io"
import Link from 'next/link'
import { SlCalender } from "react-icons/sl";


const Blog = ({value, index}) => {

  return (
    <Link key={index}
      className='sm:w-[47%] lg:w-[32%]  p-3 gap-2  flex max-lg:min-h-[25em] min-h-[30em] backdrop-blur-[3px] flex-col items-center [box-shadow:3px_2px_10_3px_rgb(255,255,255)]   justify-between  w-[95%]' href={`/Blog/${value.id}`}>
    
      <img src={value.src} alt='' className='w-full h-[13em] md:h-[18em] rounded-lg object-cover' />
    <p className='blog-heading italic  '>
        {value.title}
      </p>
      <p className='blog-summ'>
        {value.summary}
      </p>
      <div className='flex-between w-full'>
      <div className='flex items-center max-md:gap-2 gap-4'>
      <IoMdTime className='max-md:size-[1em] size-[2em]'/>
      <p className='text-[.9em] font-medium tracking-wider'>{value.time}</p>
      </div>
      <div className='flex items-center max-md:gap-2 gap-4'>
      <SlCalender className='size-[2em] max-md:size-[1em]'/> 
      <p className='text-[.9em] font-medium tracking-wider'>{value.date}</p>
      </div>
      </div>
       <button className='text-white px-6 rounded-lg text-lg tracking-wider py-3 bg-[#3B82F6]'>
        Read More
       </button>
      </Link>
  )
}

export default Blog
