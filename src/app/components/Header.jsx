'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { navElements } from '../constants'
import { IoIosInfinite } from "react-icons/io";



const Header = () => {
  const [sideBarDisplay, setSideBarDisplay] = useState(false)
    
  return (
    <header className='px-6 w-dvw fixed z-[100] top-0 flex items-center py-3 gap-4 justify-between lg:py-5 backdrop-blur-[7px] md:px-8 lg:px-16 bg-transparent'>
        <Link href={'/'}>
      <div className='font-bold italic uppercase  flex items-center gap-4   text-[1.3em] sm:text-[1.5em] cursor-pointer md:text-[1.6em] lg:text-[1.9em] tracking-widest'>
         <IoIosInfinite className='size-[2em]'/> 
        Journeys
      </div>
        </Link>
      <nav className='flex items-center md:gap-[4em]'>
        {navElements.map((navItem, index) => {
          return (
            <Link
              key={index}
              className='hidden md:block md:text-[1.4em] tracking-widest italic transition-colors ease-in-out hover:text-blue-500  duration-1000 delay-300 lg:text-xl  font-medium ' 
              href={index === 0 ? '/' : `/${navItem}`}
            >
              {navItem}{' '}
            </Link>
          )
        })}
      </nav>

      <GiHamburgerMenu
        onClick={() => setSideBarDisplay(prev => !prev)}
        className='md:hidden block size-6 md:size-7'
      />

      {sideBarDisplay && (
        <div
          className={`flex absolute bg-white text-white right-1 top-4  rounded-2xl   flex-col items-center   px-[1.5rem] gap-8 py-[2rem] z-[999] min-h-[100vh] w-screen sm:w-[14em]`}
        >
          <div className='w-full relative '>
            <RxCross1
              onClick={() => setSideBarDisplay(!sideBarDisplay)}
              className='top-1/2 right-0 size-6 cusor-pointer rounded-full text-black border-box'
            />
          </div>
          {navElements.map((navItem, index) => {
            return (
              <Link
                href={index === 0 ? '/' : `/${navItem}`}
                onClick={() => setSideBarDisplay(!sideBarDisplay)}
                key={index}
                className={`font-[500]  hover:text-[#5c5ccf] text-black leading-0 tracking-wider text-[1.1rem] `}
              >
                {navItem}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}

export default Header
