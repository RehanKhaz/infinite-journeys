import React from 'react'
import Link from 'next/link'
import { FaGithub, FaNpm, FaLinkedin } from 'react-icons/fa'
import { fromJSON } from 'postcss'
const UList = ({ unorderedList }) => {
  return (
    <ul className='flex flex-col gap-4 md:gap-6'>
      {unorderedList.map((items, index) => {
        return (
          <li
            key={index}
            className={`${
              index == 0
                ? ' tracking-wider italic font-medium !text-[2em]  text-black'
                : 'tracking-wide font-medium '
            } text-[1em] md:text-[1.2em] ${index == 1 && 'mt-2 md:mt-4'}`}
          >
            <Link href={index > 1 ? `/${items}` : ''}>{items}</Link>
          </li>
        )
      })}
    </ul>
  )
}

const Footer = () => {
  return (
    <footer className='flex relative z-[1000] bg-transparent px-6 md:px-8 lg:px-16 gap-y-8 gap-x-6 md:py-8 flex-wrap py-4  justify-between w-full'>
      <div>
        <div className='font-bold italic cursor-pointer text-[1.6em] lg:text-[2.3em] tracking-wider'>
          Infinite Journey
        </div>
        <br />
        <p className='text-black text-[1.2em] md:text-[1.3em] tracking-wider font-medium '>
          A Travel Blog for Adventurers, <br /> Dreamers, and Explorers
        </p>
      </div>
      <UList unorderedList={['Links', 'Blogs', 'About', 'Contact', 'FAQ']} />
      <div className='flex flex-col items-center  gap-4'>
        <h1 className='text-3xl font-medium italic mt-2 tracking-wider'>
          Contact me!
        </h1>
        <div className='flex items-center gap-6 backdrop-blur-[1px] mt-2'>
          <Link target='main' href={'https://github.com/RehanKhaz'}>
            <FaGithub className='text-4xl cursor-pointer rounded-full  ' />
          </Link>
          <Link target='main' href={'https://www.linkedin.com/in/rehan-khan-31bb062b4/'}>
          <FaLinkedin className='text-4xl cursor-pointer rounded-full text-[#0A66C2] ' />
          </Link>
          <Link target='main' href={'https://www.npmjs.com/~rehankhan'}>
          <FaNpm className='text-6xl rounded-full cursor-pointer text-[#CC3534] ' />
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='tracking-wider font-medium italic text-3xl '>
          Privacy Policy
        </h1>
        <p className='tracking-wider font-medium text-[1.1em] max-md:text-[1em] italic w-[18em]'>
          This website is designed and owned by Infinite Journeys. All content
          is protected by copyright.
          <br />© Copyright 2024-25.
        </p>
      </div>
    </footer>
  )
}

export default Footer
