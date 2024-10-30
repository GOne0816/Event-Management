import React, { useState } from 'react'

const CreateEvent = () => {
  const [data, setData ]= useState(`0`)
  return (
    <>
    <div className="flex justify-center items-center flex-col gap-8  w-full h-screen bg-emerald-400">
      <img className='w-40 h-40 object-cover rounded-full' src="https://c3.ttcache.com/thumbnail/VJFBq965yNr/288x162/5_240.jpg" alt="" />
      <h1 className='text-5xl font-semibold font-serif text-pink-700'>Chut Ka Rakshak Jagjeevan</h1>
      <p className='font-bold ml-96 pl-48' >made by <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className='font-serif font-normal' >hujaifa </span></p>
     <div className='w-64 h-80 rounded-xl text-center flex justify-center items-center flex-col gap-12 shadow-2xl bg-indigo-400'>
      <h1 className='text-2xl  font-bold'>How much you are chut ka pyasa</h1>
      <h2 className='text-3xl font-semibold'>{data}</h2>
      <div className='flex gap-6'>
        <button onClick={()=>{
          setData('100%')
        }} className='bg-emerald-600 h-12 flex justify-center items-center  text-2xl'>Calculate</button>
      </div>
     </div>
    </div>
    </>
  )
}

export default CreateEvent
