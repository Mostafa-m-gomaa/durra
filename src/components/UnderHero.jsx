import React from 'react'
import neckImage from '../assets/neck.png'
import rightImage from '../assets/image 5.png'
import leftImage from '../assets/image 4.png'

const UnderHero = () => {
  return (
    <div className='flex flex-col gap-8'>


    <div className="relative w-full">
        <img src={leftImage} alt="" className="absolute" />
        <img  src={rightImage} alt="" className="absolute right-0 bottom-[-80px]" />
<div className='w-[90%] lg:w-[50%] mx-auto text-[16px] lg:text-[28px] capitalize text-center py-28'>At durra, every piece is a symphony of meticulous craftsmanship and timeless allure, forged in precious metals and gemstones to transcend trends and become heirlooms of tomorrow.</div>
    </div>
    </div>
  )
}

export default UnderHero