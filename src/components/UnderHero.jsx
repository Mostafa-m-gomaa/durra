import React from 'react'
import neckImage from '../assets/neck.png'
import rightImage from '../assets/image 5.png'
import leftImage from '../assets/image 4.png'
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';

const UnderHero = () => {
      const { t, i18n } = useTranslation();
                              const [lang,setLang] =useState("")
                              
                          useEffect(()=>{
                        setLang(localStorage.getItem("lang"))
                          },[])
  return (
    <div className='flex flex-col gap-8'>


    <div className="relative w-full">
        <img src={leftImage} alt="" className="absolute" />
        <img  src={rightImage} alt="" className="absolute right-0 bottom-[-80px]" />
<div className='w-[90%] lg:w-[50%] mx-auto text-[16px] lg:text-[28px] capitalize text-center py-28'>{t("underHero")}</div>
    </div>
    </div>
  )
}

export default UnderHero