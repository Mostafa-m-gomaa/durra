import React from 'react'
import map from '../assets/mapa.svg'
import facebook from '../assets/face.png'
import youtube from '../assets/Youtube.png'
import x from '../assets/x.png'
import linked from '../assets/Vector.png'
import insta from '../assets/Vectorinsta.png'
import durra from '../assets/VectorDuraa.png'

const Footer = () => {
  return (
    <div className='w-[80%] lg:w-[90%] mx-auto flex flex-col gap-8 py-16'>
        <img src={map} alt="" className='w-full ' />
        <div className="flex justify-start    items-center">
            <div className="flex w-[45%] flex-col gap-4">
            <div className='flex flex-col'>
                <span>Address :</span>
                <span className='font-thin'>Level 1, 12 Sample St, Sydney NSW 2000</span>
            </div>
            <div className='flex flex-col'>
                <span>Contact :</span>
                <span className='font-thin'>1800 123 4567</span>
                <span className='font-thin'>info@relume.io</span>
            </div>
            <div className='flex '>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="" className='w-[20px] h-[20px] mx-2' />
        </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src={insta} alt="" className='w-[20px] h-[20px] mx-2' />
        </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src={x} alt="" className='w-[20px] h-[20px] mx-2' />
        </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src={linked} alt="" className='w-[20px] h-[20px] mx-2' />
        </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src={youtube } alt="" className='w-[20px] h-[20px] mx-2' />
        </a>
            </div>
            </div>



         
        </div>
        <img src={durra} alt="" />
        <div className="border-[1px ]"></div>
    </div>
  )
}

export default Footer