import { LucideDelete, RecycleIcon, RemoveFormatting } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const Cart = () => {
    // const [cartItems , setCartItems] = useState([])


    useEffect(()=>{
setCartItems(JSON.parse(localStorage.getItem("orders")) || [])
    } ,[])


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
    <div className='py-32 w-[90%] mx-auto flex flex-col gap-16' >
         <div className="flex">
            <div className="w-[50%]">
<h2>contact information</h2>
            </div>
            <div className="w-[50%] flex flex-col gap-4">
<h2>shopping cart</h2>
{cartItems?.map((item , i)=>{
    return(
        <div key={i} className="flex gap-4 bg-cardcolor p-2">
            <img src={item?.imageCover} alt="" className='max-w-[35%] min-w-[35%]' />
            <div className="flex flex-col gap-2">
                <h3>{item?.title_en}</h3>
                        <button onClick={() => toggleProductInCart(item)} className="text-[12px] bg-scndcolor px-2 py-1 rounded" >   {isProductInCart(item._id) ? "Remove " : "Add"}</button>
                <span>$ {item?.priceAfterDiscount}</span>
            </div>
        </div>
    )
})}
            </div>
         </div>
    </div>
  )
}

export default Cart