import React from 'react'
import contactImage from '../assets/contact.png'
import facebook from '../assets/face.png'
import youtube from '../assets/Youtube.png'
import x from '../assets/x.png'
import linked from '../assets/Vector.png'
import insta from '../assets/Vectorinsta.png'
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react'



const Contact = () => {
      const { t, i18n } = useTranslation();
            const [lang,setLang] =useState("")
            
        useEffect(()=>{
      setLang(localStorage.getItem("lang"))
        },[])
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-28">
        <div className="flex flex-col-reverse lg:flex-row w-full justify-between">
<img src={contactImage} alt="" />
<div className='w-[90%] py-4 mx-auto lg:w-[60%] flex flex-col gap-4 justify-center items-center'>
    <h2>{t("Contact Us")}</h2>
    <p>{t("contact")}</p>
    <div className="flex">
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
   
    </div>
  )
}

export default Contact