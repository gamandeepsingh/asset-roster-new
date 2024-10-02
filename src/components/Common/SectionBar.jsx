import React from 'react'

const SectionBar = ({text,id}) => {
  return (
        <div className='w-screen flex justify-center items-center min-h-[350px] lg:min-h-[450px] bg-darkGreen my-10' id={`${id ? id:""}`}>
            <h1 className='text-3xl lg:text-6xl font-bold text-light text-center w-5/6 font-dmSans leading-10'>{text}</h1>
        </div>
  )
}

export default SectionBar