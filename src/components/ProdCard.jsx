import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";


const ProdCard = ({product }) => {

      const { t, i18n } = useTranslation();
                            const [lang,setLang] =useState("")
                            
                        useEffect(()=>{
                      setLang(localStorage.getItem("lang"))
                        },[])
    
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
         <div  className="flex flex-col justify-between gap-4 bg-[#1A1F23] min-w-[45%] max-w-[45%] lg:max-w-[24%] lg:min-w-[24%] p-2">
                          <div className="flex justify-between items-center">
                            <span className='bg-scndcolor text-[10px] px-2'>{t("NEW")}</span>
                            <button onClick={() => toggleProductInCart(product)} className="text-[12px] bg-scndcolor px-2 py-1 rounded" >   {isProductInCart(product?._id) ? "Remove " : "Add"}</button>
                          </div>
                          <img src={product?.imageCover } alt="" className=' mx-auto max-w-[95%] min-w-[95%] max-h-[270px] min-h-[270px]'/>
                          <div className="flex flex-col justify-between items-start ">
    
                            <h3 className="flex flex-wrap text-left">{lang === "en" ?  product?.title_en :  product?.title_ar}</h3>
                            <span className="text-left text-[11px] flex flex-wrap">{lang === "en" ?  product?.description_en :  product?.description_ar}</span>
                            <div className="flex justify-between w-full items-start lg:items-center py-2 flex-col lg:flex-row gap-2">
                            <div className="flex flex-wrap text-left">$ {product?.priceAfterDiscount}</div>
                            <Button type="button"  >
                            <Link onClick={()=>{localStorage.setItem("product" , JSON.stringify(product))}} to={`/product/${product?._id}`}>{t("View Product")}</Link>
                            </Button>
                            </div>
                          </div>
                        </div>
  )
}

export default ProdCard