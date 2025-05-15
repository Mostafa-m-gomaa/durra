import React from 'react'
import neckImage from '../assets/neck.png'
import { Link } from 'react-router-dom'

const DurraDesign = ({title , subs , categoryId}) => {
const subCatItems = subs?.filter((sub) => sub.category?.name_en === title)
console.log(subCatItems)
  return (
      <div className='flex flex-col gap-8'>
    
        <div className='container w-[95%] lg:w-[90%] gap-4 mx-auto py-32'> 
    <div className="flex justify-between flex-wrap">
        <div className="w-[90%] lg:w-[35%] flex flex-col gap-4 items-start justify-center p-8">
        <h2>Durra</h2>
        <p>Timeless Jewelry, Designed for You</p>
        <Link to={`/cat/${categoryId}`} className='border-[1px] font-light border-[#8d9091] p-2'>Explore Our Collection</Link>
        </div>
        <div className="w-[35%] bg-[#181E1F] lg:flex flex-col gap-2 px-6 pb-6 hidden ">
    <img className="max-h-[280px] min-h-[280px] mx-auto" src={subCatItems[0]?.imageCover} alt="necklace"/>
    <div className='text-[20px]'>{subCatItems[0]?.name_en}</div>
    <p>{subCatItems[0]?.description_en}</p>
   
        </div>
        <div className="w-[28%] bg-[#181E1F] lg:flex hidden flex-col gap-2 px-6 pb-6 ">
    <img src={subCatItems[1]?.imageCover} alt="necklace" className='mx-auto  max-h-[280px] min-h-[280px]' />
    <div className='text-[20px]'>{subCatItems[1]?.name_en}</div>
    <p>{subCatItems[1]?.description_en}</p>
    
        </div>
     
    </div>
    <div className="flex justify-between">
    
        <div className="w-[40%] bg-[#181E1F] lg:flex hidden flex-col gap-2 px-6 pb-6">
    <img src={subCatItems[2]?.imageCover} alt="necklace" className='mx-auto  max-h-[280px] min-h-[280px]' />
    <div className='text-[20px]'>{subCatItems[2]?.name_en}</div>
    <p>{subCatItems[2]?.description_en}</p>
   
        </div>
        <div className="w-[58%] bg-[#181E1F] lg:flex hidden flex-col gap-2 px-6 pb-6">
    <img src={subCatItems[3]?.imageCover} alt="necklace" className='mx-auto max-h-[280px] min-h-[280px] ' />
    <div className='text-[20px]'>{subCatItems[3]?.name_en}</div>
    <p>{subCatItems[3]?.description_en}</p>
    
        </div>
     
    </div>
    
        </div> 
     
        </div>
  )
}

export default DurraDesign