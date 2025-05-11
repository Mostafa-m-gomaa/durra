import React from 'react'
import image from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='w-full'>
    <div className="flex w-[80%] mx-auto flex-col gap-16 py-20"> 
        <h1>Durra: Rare as a Pearl,</h1>
        <h1 className='text-right'>Timeless as a Legacy.</h1>
    </div>
    <img src={image} className='h-[70vh] w-full' />
    </div>
  )
}

export default Hero