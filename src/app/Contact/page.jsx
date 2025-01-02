'use client'
import React , {useState} from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useForm, ValidationError } from '@formspree/react'

const page = () => {
    const [state, handleSubmit] = useForm("mjkveovj");
    const [toastShown, setToastShown] = useState(false)
    if (state.succeeded && !toastShown) {
         toast.success('Message sent successfully!')
         setToastShown(!toastShown)
         document.getElementById('Contact').reset();
    }
  return (
    <section className='min-h-screen w-screen'>
        <div className='flex-center relative z-[10] my-[6em]'>

             <form
          id="Contact"
          name="contact-form"
          className="md:w-[48%] items-center border-blue-700 w-[90%] border-[3px] mt-6 rounded-[1em] rounded-tl-[5rem] px-[1rem] py-[.7rem] flex flex-col gap-y-4 md:px-[1.5rem] md:py-[1.1rem] lg:px-[2rem] lg:py-[1.5rem] md:min-h-[60vh]"
          onSubmit={handleSubmit}
          >
          <h1 className="text-[1.5em] underline underline-offset-[6px] md:text-[2.5em] italic  font-[520] tracking-wider leading-0 text-[#268B89] text-center">
            Get in Touch
          </h1>
          <div className="h-[2.5rem] lg:h-[3rem] bg-white w-full rounded-[.9em] border-gray-400 border-[2px] px-[1rem] flex items-center justify-between">
            <input
              required
              type="text"
              id="input-name"
              className="w-full h-full outline-none placeholder:text-[1rem] placeholder:tracking-wider placeholder:leading-0 md:placeholder:text-lg text-lg font-[450]"
              autoComplete="off"
              spellCheck="false"
              name="Name"
              placeholder="Name"
              />
            <IoPersonAdd className="size-6 lg:size-8" />
          </div>
          <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
        />
          <div className="h-[2.5rem] lg:h-[3rem] bg-white w-full rounded-[.9em] border-gray-400 border-[2px] px-[1rem] flex items-center justify-between">
            <input
              required
              type="email"
              id="input-email"
              className="w-full h-full outline-none placeholder:text-[1rem] placeholder:tracking-wider placeholder:leading-0 md:placeholder:text-lg text-lg font-[450]"
              autoComplete="off"
              spellCheck="false"
              name="Email"
              placeholder="Email"
              />
            <MdOutlineMarkEmailRead className="size-6 lg:size-8" />
          </div>
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
          <div className="h-[2.5rem] lg:h-[3rem] bg-white w-full rounded-[.9em] border-gray-400 border-[2px] px-[1rem] flex items-center justify-between">
            <input
              required
              type="text"
              id="input-subject"
              className="w-full h-full outline-none placeholder:text-[1rem] md:placeholder:text-lg text-lg font-[450]"
              spellCheck="false"
              autoComplete="off"
              name="Subject"
              placeholder="Subject"
              />
            <FaRegStar className="size-6 lg:size-8" />
          </div>
          <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
        />
          <div className="h-[4rem] md:h-[5rem] lg:h-[7rem] bg-white w-full rounded-lg border-gray-400 border-[2px] px-[1rem] flex items-center justify-between">
            <textarea
              required
              id="input-message"
              className="w-full h-full outline-none placeholder:text-[1rem] md:placeholder:text-lg text-lg font-[450]"
              spellCheck="false"
              name="Message"
              placeholder="Message"
              />

          </div>
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />
          <button
            type="submit"
            disabled={state.submitting}
            className="p-3 box-border active:text-blue-500 active:bg-white bg-blue-500 text-[.9rem] md:text-lg tracking-wider leading-0 cursor-pointer text-white flex items-center justify-between gap-3 rounded-md w-max"
            >
            <BsFillSendFill /> Send Message
          </button>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </form>
            </div>
    </section>
  )
}

export default page