import React from 'react'

const Head = ({title,tex,info}) => {
  return (
    <div className='py-10 text-center'>
        <h2 className=' text-2xl md:text-4xl font-bold mb-3'>{title} <span className='underline decoration-1 underline-offset-4 font-normal'>{tex}</span> </h2>
        <p className='text-gray-500 max-w-80 mx-auto mb-4 text-base'>{info}</p>
    </div>
  )
}

export default Head