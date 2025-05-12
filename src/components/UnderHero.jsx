import React from 'react'
import neckImage from '../assets/neck.png'
import rightImage from '../assets/image 5.png'
import leftImage from '../assets/image 4.png'

const UnderHero = () => {
  return (
    <div className='flex flex-col gap-8'>

    <div className='container w-[90%] gap-4 mx-auto py-32'> 
<div className="flex justify-between">
    <div className="w-[35%] flex flex-col gap-4 items-start justify-center p-8">
    <h2>Durra</h2>
    <p>Timeless Jewelry, Designed for You</p>
    <button className='border-[1px] font-light border-[#8d9091] p-2'>Explore Our Collection</button>
    </div>
    <div className="w-[35%] bg-[#181E1F] flex flex-col gap-2 px-6 pb-6">
<img src={neckImage} alt="necklace" className='mx-auto ' />
<div className='text-[20px]'>Alpine Eagle 41</div>
<p>41 mm, automatic, Lucent Steel™</p>
<div className='text-[20px]'>$ 590.99</div>
    </div>
    <div className="w-[28%] bg-[#181E1F] flex flex-col gap-2 px-6 pb-6">
<img src={neckImage} alt="necklace" className='mx-auto ' />
<div className='text-[20px]'>Alpine Eagle 41</div>
<p>41 mm, automatic, Lucent Steel™</p>
<div className='text-[20px]'>$ 590.99</div>
    </div>
 
</div>
<div className="flex justify-between">

    <div className="w-[40%] bg-[#181E1F] flex flex-col gap-2 px-6 pb-6">
<img src={neckImage} alt="necklace" className='mx-auto ' />
<div className='text-[20px]'>Alpine Eagle 41</div>
<p>41 mm, automatic, Lucent Steel™</p>
<div className='text-[20px]'>$ 590.99</div>
    </div>
    <div className="w-[58%] bg-[#181E1F] flex flex-col gap-2 px-6 pb-6">
<img src={neckImage} alt="necklace" className='mx-auto ' />
<div className='text-[20px]'>Alpine Eagle 41</div>
<p>41 mm, automatic, Lucent Steel™</p>
<div className='text-[20px]'>$ 590.99</div>
    </div>
 
</div>

    </div> 
    <div className="relative w-full">
        <img src={leftImage} alt="" className="absolute" />
        <img  src={rightImage} alt="" className="absolute right-0 bottom-[-80px]" />
<div className='w-[90%] lg:w-[50%] mx-auto text-[28px] capitalize text-center py-28'>At durra, every piece is a symphony of meticulous craftsmanship and timeless allure, forged in precious metals and gemstones to transcend trends and become heirlooms of tomorrow.</div>
    </div>
    </div>
  )
}

export default UnderHero