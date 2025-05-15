import React from 'react'
import cardImage from '../assets/card (1).svg'
import { Link } from 'react-router-dom'

const HomaPartOne = () => {
  return (
    <div className='w-[90%] relative mx-auto '>
<img src={cardImage} alt="" />
<div className="absolute flex flex-col gap-4 w-[80%] mx-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center">

<div className='text-[13px] lg:text-[20px]'>“At Duraa, we turn gold into opportunity. With expert analysts guiding every decision, we pinpoint the perfect moment to buy or sell—so your investment shines brighter.”</div>
<Link className='px-2 py-1 text-[13px] lg:text-[20px] border-[1px] w-fit mx-auto' to="/contact" >Contact</Link>
</div>
    </div>
  )
}

export default HomaPartOne