import React, { useEffect } from 'react'
import image from '../assets/hero.jpg'
import { useTranslation } from "react-i18next";
import { useState } from 'react';



const Hero = () => {
   

      const { t, i18n } = useTranslation();
                      const [lang,setLang] =useState("")
                      
                  useEffect(()=>{
                setLang(localStorage.getItem("lang"))
                  },[])

  return (
    <div className='w-full'>
    <div className="flex w-[80%] mx-auto flex-col gap-16 py-20"> 
        <h1>   {t("hero1")}</h1>
        <h1 className='text-right'>{t("hero2")}</h1>

    </div>
    <img src={image} className='h-[70vh] w-full' />
    </div>
  )
}

export default Hero