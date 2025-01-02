import React from 'react'
import { IoIosInfinite } from "react-icons/io";


const AboutContent = () => {
  return (
    <section className='flex-center px-8  mb-12 '>
    <div className='min-h-[70vh] lg:w-[60vw] border rounded-2xl border-black backdrop-blur-[4px]'>
        <div className='flex flex-col px-8 py-5 items-center gap-4'>
         <h1 className='font-medium text-2xl md:text-4xl tracking-wider  '>🙌 WELCOME TO <IoIosInfinite className='inline-flex size-[1.5em] font-bold' /> JOURNEYS!</h1>
         <p className='tracking-wider font-medium text-[1em] italic md:text-[1.4em] '>
         At Infinite Journeys, we believe travel is more than visiting new places—it's about embracing cultures, uncovering hidden gems, and creating unforgettable memories. Our mission is to inspire wanderlust and provide valuable insights for planning your adventures. From breathtaking destinations and insider travel tips to personal stories that spark curiosity, this blog is your guide to exploring the world. Whether you're a seasoned traveler or just starting out, Infinite Journeys is here to help you make every trip memorable. Let’s uncover the beauty of our planet together and make every journey infinite! 🌍
         </p>
        </div>
    </div>
    </section>
  )
}

export default AboutContent