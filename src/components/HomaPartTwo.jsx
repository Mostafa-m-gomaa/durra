import React from 'react'
import imgOne from '../assets/one.png'
import imgTwo from '../assets/two.png'
import imgThree from '../assets/three.png'
const HomaPartTwo = () => {
    const data = [
        {img : imgOne , title : "Seamless Luxury, Delivered to You Designs" , desc : "Free Worldwide Shipping: Complimentary insured shipping on orders over $500."},
        {img : imgTwo , title : "Investment in Gold" , desc : "Our gold investment experts will guide you on the best time to buy or sell, helping you maximize your investment and grow or preserve your wealth with confidence."},
        {img : imgThree , title : "Create a Legacy, Customize Yours" , desc : "Personalized Service, Collaborate with our artisans to design bespoke jewelry."},
    ]
  return (
    <div className='w-[90%] relative mx-auto flex '>
        <div className="flex gap-1 lg:gap-4 w-full justify-center lg:justify-between items-start flex-wrap">
            {data?.map((item , i) => {
                return(
                    <div key={i} className="w-[45%] lg:w-[32%] flex flex-col gap-4 justify-between ">
                        <img src={item?.img} alt="" />
                        <h3>{item?.title}</h3>
                        <p className='font-thin text-[10px] lg:text-[14px]'>{item?.desc}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default HomaPartTwo