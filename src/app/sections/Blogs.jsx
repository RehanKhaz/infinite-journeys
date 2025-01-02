import React from 'react'
import { blogData } from '../constants'
import Blog from '../components/Blog'

const Blogs = () => {
  return (
    <div className='relative w-screen  z-[10]'>
        <div className='flex w-full mb-[5em] items-center justify-center mt-[10em] max-md:px-[2em] md:px-[4em] min-h-screen flex-wrap   gap-[1em]'>
            {
                blogData.map((blog, index) => (
                    <Blog value={blog} key={index} index={index}/>
                ))
            }

        </div>
        
    </div>
  )
}

export default Blogs