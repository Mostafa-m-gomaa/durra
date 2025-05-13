import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom"
import replaceImg from '../assets/replaceImg.png'
import { useState } from "react"

export function ProductCarousel({products , subId}) {
  const productsItems = products?.filter((pro) => pro.subCategory?._id === subId)




  const toggleProductInCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem("orders")) || [];

  const productIndex = existingCart.findIndex(item => item._id === product._id);

  let updatedCart;

  if (productIndex !== -1) {
    // Product already in cart, remove it
    updatedCart = existingCart.filter(item => item._id !== product._id);
  } else {
    // Product not in cart, add it
    updatedCart = [...existingCart, product];
  }
setCartItems(updatedCart);
  localStorage.setItem("orders", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("storage-update"));
};


const [cartItems, setCartItems] = useState(() => {
  const stored = localStorage.getItem("orders");
  return stored ? JSON.parse(stored) : [];
});

const isProductInCart = (id) => {
  return cartItems.some((item) => item._id === id);
};
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
        {productsItems?.length > 0 ?     <CarouselContent className="flex gap-4 px-4 w-full ">

            {productsItems?.map((sub , i) => {
                return (
                    <div key={i} className="flex flex-col justify-between gap-4 bg-[#1A1F23] min-w-[45%] max-w-[45%] lg:max-w-[25%] lg:min-w-[25%] p-2">
                      <div className="flex justify-between items-center">
                        <span className='bg-scndcolor text-[10px] px-2'>NEW</span>
                        {/* <button onClick={() => toggleProductInCart(sub)} className="border-[1px]  p-0 m-0 w-[20px] h-[20px] rounded-full relative"> <span className="p-0 m-0 absolute left-[50%] top-[50%] translate-y-[-60%] translate-x-[-50%]">+</span> </button> */}
                        <button onClick={() => toggleProductInCart(sub)} className="text-[12px] bg-scndcolor px-2 py-1 rounded" >   {isProductInCart(sub._id) ? "Remove " : "Add"}</button>
                      </div>
                      <img src={sub?.imageCover || replaceImg } alt="" className='mx-auto max-w-[95%] min-w-[95%] max-h-[270px] min-h-[270px]'/>
                      <div className="flex flex-col justify-between items-start ">

                        <h3 className="flex flex-wrap text-left">{sub?.title_en}</h3>
                        <span className="text-left text-[11px] flex flex-wrap">{sub?.description_en}</span>
                        <h3 className="flex flex-wrap text-left">$ {sub?.priceAfterDiscount}</h3>
                      </div>
                    </div>
                )
            })}
    
      </CarouselContent>
      : 
      
          <CarouselContent className="flex gap-4 px-4 w-full ">

           <div className="bg-[#1A1F23] p-8 rounded-md">
            Coming Soon
           </div>
    
      </CarouselContent>
      }
  {productsItems?.length > 0  &&      <div className="absolute bottom-[-50px] right-0">
      <CarouselPrevious />
      <CarouselNext />
      </div> }
 
    </Carousel>
  )
}




   

