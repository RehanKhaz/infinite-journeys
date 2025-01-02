'use client'
import { blogData } from '@/app/constants'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { FaUser } from 'react-icons/fa6'
import { useState } from 'react'
import { Comme } from 'next/font/google'
import { comment } from 'postcss'

const Page = () => {
  const params = useParams()
  const ID = params.id
  const findItem = blogData.find(item => item.id == ID)
  const [name, setName] = useState('')
  const [review, setReview] = useState('')
  const [comments, setComments] = useState([])
  console.log(comments)
 
  const todayDate = new Date()
  function handleForm (e) {
    e.preventDefault()
    setName('')
    setReview('')
    if(name.trim() && review.trim() !== ''){
      setComments((prev) => {
        let updatedComments = [...prev, {id:ID, name: name, review: review }]
        localStorage.setItem('Comments', JSON.stringify(updatedComments))
        return updatedComments
      })
    } else{
      alert('Fill the Name and reviews section.')
    }
  }

  useEffect(()=> {
    let Comments = JSON.parse(localStorage.getItem('Comments')) || []
    setComments(Comments)
  },[])
  
  return (
    <div className='relative flex-center w-full z-[10] max-md:mt-[6em] mt-[10em] max-md:px-4 px-16 py-8'>
      <div className='w-full md:w-[70%] min-h-[100vh]  rounded-lg'>
        <div className='flex flex-col backdrop-blur-[2px] max-md:gap-3 gap-5'>
          <div className=' overflow-hidden rounded-lg w-[100%] bg-black h-[15em] md:h-[30em] '>
            <img src={findItem.src} alt={'Blog Image'} className='size-full' />
          </div>
          <div className='flex items-center max-md:gap-3 gap-5'>
            <FaUser className='max-md:size-5 size-8' />
            <p className='max-md:text-lg text-2xl font-medium tracking-wider'>By Annonymous</p>
          </div>
          <h1 className='text-3xl lg:text-5xl italic font-medium tracking-wider'>
            {findItem.title}
          </h1>
          <p className=' text-xl max-md:text-[1.2em] font-medium tracking-wider'>
            {findItem.summary}
          </p>
          <h3 className='max-md:text-3xl text-4xl italic font-medium'>What should you do ?</h3>
          <ul className='flex list-disc px-4 flex-col max-md:gap-2 gap-4'>
            {findItem.content.map((item, index) => {
              return (
                <li key={index} className='max-md:text-[1.1em] text-xl font-medium tracking-wider'>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        {/* Comment Section */}
        {comments.filter((item) => item.id == ID).length > 0 && (
          <div className='max-md:px-3 max-md:py-2 px-8 py-5 rounded-lg border border-white mt-[3em] backdrop-blur-[3px] '>
            <h1 className='max-md:text-[1.7em] text-4xl tracking-wide'>Your Valuable Comments</h1>
            <br />
            <div className='flex flex-col gap-3'>
              {comments.filter((item)=> item.id == ID).map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className='flex w-full bg-white px-4 py-3 rounded-lg flex-col gap-2'
                    >
                      <div className='w-full flex-between'>
                        <div className='flex items-center gap-3'>
                          <span className='max-md:size-8 max-md:text-lg size-12 rounded-full uppercase flex-center text-2xl text-white font-medium bg-blue-600'>
                            {item.name.slice(0, 1)}
                          </span>
                          <p className='text-2xl max-md:text-[1.2em] font-medium tracking-wider capitalize text-slate-500'>
                            {item.name}
                          </p>
                        </div>
                        <p className='text-lg max-md:text-[.8em] font-medium tracking-wide'>{todayDate.toLocaleDateString()}</p>
                      </div>
                      <p className='font-medium text-xl max-md:text-[1.05em] tracking-wider '>
                        {item.review}
                      </p>
                    </div>
                  )
                }
              )}
            </div>
          </div>
        )}
        <div className='min-h-[50vh] max-md:px-3 max-md:py-2 px-8 py-5 rounded-lg mt-[3em] backdrop-blur-[3px] border border-white'>
          <h1 className='max-md:text-[1.8em] text-4xl font-medium tracking-wider'>
            Wanna Share your Reviews!
          </h1>
          <br />
          <div className='flex flex-col max-md:gap-3  gap-4'>
            <input
              required
              autoFocus
              spellCheck={false}
              onChange={e => setName(e.target.value)}
              value={name}
              placeholder='Your Name'
              className='md:w-[50%] w-[95%] rounded-lg text-2xl   outline-none focus:border-emerald-500 focus:border-[2px] placeholder:text-2xl max-md:placeholder:text-lg py-4  indent-4'
              type='text'
            />
            <textarea
              required
              autoFocus
              spellCheck={false}
              value={review}
              onChange={e => setReview(e.target.value)}
              rows={'4'}
              placeholder='Your Review'
              className='text-2xl max-md:placeholder:text-lg tracking-wider indent-3 py-3 rounded-lg focus:border-[2px] focus:border-emerald-500 outline-none'
              id=''
            />
            <div className='w-full flex items-center justify-end'>
              <button
                onClick={handleForm}
                className='bg-orange-400 text-2xl max-md:text-[1.2em] text-white font-medium tracking-wider max-md:px-3  px-6 py-2 rounded-lg'
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
