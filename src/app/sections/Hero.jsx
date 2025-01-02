import React from 'react'

const Hero = () => {
  return (
    <div  className='h-[100vh] fixed  left-0 top-0 w-screen'>
        <div className='h-screen opacity-90 w-screen absolute z-[10] top-0 left-0'>
          <img src={'/images/hero-travel.jpg'} className='h-full w-full ' />
        </div>
    </div>
  )
}

export default Hero
