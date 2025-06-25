import { LucideDelete, RecycleIcon, RemoveFormatting } from 'lucide-react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Formik } from 'formik'
import { Button } from '@/components/ui/button'
import { toast } from 'react-hot-toast'
import { useTranslation } from "react-i18next";


const BASE_URL = import.meta.env.VITE_API_URL;
const Cart = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [notes,setNotes] = useState('')
    const [image, setImage] = useState(null);
    const[loader,setLoader] = useState(false)
  const { t, i18n } = useTranslation();
      const [lang,setLang] =useState("")
      
  useEffect(()=>{
setLang(localStorage.getItem("lang"))
  },[])

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
          setImage(file);
        } else {
          setImage(null);
        }
      };

       const submitForm =(e)=>{
      
      setLoader(true)
      
        e.preventDefault()
        const formData = new FormData();
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('notes', notes);
        formData.append('identity', image);
        cartItems.forEach((el , ind) =>{
            formData.append(`orderItems`, el._id);
           
        })


        fetch(`${BASE_URL}/orders `, {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            setLoader(false)
            console.log(data);
            if(data.status === 'success'){
                toast.success('Order Submitted Successfully')
            }
           else if(data.status === 'fail'){
                toast.error(data.message)
            }
          })
          .catch((error) => {
            console.error(error);
          });

    }
 


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



         const [subTotal, setSubTotal] = useState(0)

    useEffect(()=>{
setCartItems(JSON.parse(localStorage.getItem("orders")) || [])
    const storedCart = JSON.parse(localStorage.getItem("orders")) || [];
    const total = storedCart.reduce((acc, item) => {
      return acc + item.priceAfterDiscount;
    }, 0);
    setSubTotal(total);
    } ,[cartItems])
  return (
    <div className='py-32 w-[90%] mx-auto flex flex-col gap-16' >
         <div className="flex flex-col lg:flex-row">
            <div className="w-[90%] lg:w-[50%] flex flex-col gap-12 items-start">
<h2>{t("Contact Information")} </h2>
          

        <form onSubmit={submitForm}
  className="flex w-[80%]  flex-col rounded-xl bg-clip-border text-gray-700 shadow-md gap-4 " 
>


    <div className="flex flex-col gap-2">
      <label>
        {t("Your Name")}
        
      </label>
      <input
      onChange={(e)=>setEmail(e.target.value)}
        placeholder="write your name here"
        type='text'
        className="peer h-full w-full   bg-scndcolor px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  disabled:border-0 disabled:bg-blue-gray-50"
      />
  
    </div>
    <div className="flex flex-col gap-2">
      <label>
        {t("Email")}
        
      </label>
      <input
      required
      onChange={(e)=>setEmail(e.target.value)}
        placeholder="write your email here"
        type='email'
        className="peer h-full w-full   bg-scndcolor px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  disabled:border-0 disabled:bg-blue-gray-50"
      />
  
    </div>
    <div className="flex flex-col gap-2">
      <label>
        {t("Phone Number")}
        
      </label>
      <input
     required
        placeholder=" write your phone number here"
        onChange={(e)=>setPhone(e.target.value)}
        type='number'
        className="peer h-full w-full   bg-scndcolor px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  disabled:border-0 disabled:bg-blue-gray-50"
      />
      
    </div>
    <div className="flex flex-col gap-2">
      <label>
          {t("Address")}
          
      </label>
      <input
      required
        placeholder=" write your address here"
        onChange={(e)=>setAddress(e.target.value)}
        type='text'
        className="peer h-full w-full   bg-scndcolor px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  disabled:border-0 disabled:bg-blue-gray-50"
      />
 
    </div>
    <div className="flex flex-col gap-2">
      <label>
          {t("Notes")}
        
      </label>
      <input
        onChange={(e)=>setNotes(e.target.value)}
        placeholder=" write your notes here"
        type='text'
        className="peer h-full w-full   bg-scndcolor px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  disabled:border-0 disabled:bg-blue-gray-50"
      />
    
    </div>
    <div className="flex flex-col gap-2">
      <label>
        {t("Identity")}
        
      </label>
      <input
    required
      onChange={handleImageChange}
      accept='image/*'
        placeholder=" upload your identity here"
        type='file'
        className="peer h-full w-full   bg-scndcolor px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  disabled:border-0 disabled:bg-blue-gray-50"
      />

    </div>
 
 
    <div className="flex w-full justify-between">
      <div>
        {t("Total")} :
        
      </div>
      ${subTotal}
    </div>
 <Button className="w-full" type="submit" disabled={loader} >
    

      {t("Pay")}
  
     
     {loader && <RecycleIcon className='animate-spin' />}
 </Button>

</form>
            </div>
            <div className="w-[90%] lg:w-[50%] flex flex-col gap-4 pt-8 lg:pt-0">
<h2>  {t("shopping cart")}</h2>
{cartItems?.map((item , i)=>{
          let name
                            if(lang==='en'){
                                name=item.name_en}
                            else if(lang==='turk'){
                                name=item.name_ar
                            }
    return(
        <div key={i} className="flex gap-4 bg-[#1F2A33] p-2">
            <img src={item?.imageCover} alt="" className='max-w-[35%] min-w-[35%] min-h-[220px] max-h-[220px] bg-[#181E1F]'  />
            <div className="flex flex-col gap-8">
                <h3>{name}</h3>
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