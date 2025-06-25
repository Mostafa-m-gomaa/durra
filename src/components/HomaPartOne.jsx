import React from 'react'
import cardImage from '../assets/card (1).svg'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { useEffect } from 'react';

const HomaPartOne = () => {
       const { t, i18n } = useTranslation();
                        const [lang,setLang] =useState("")
                        
                    useEffect(()=>{
                  setLang(localStorage.getItem("lang"))
                    },[])
  return (
    <div className='w-[90%] relative mx-auto '>
<img src={cardImage} alt="" />
<div className="absolute flex flex-col gap-4 w-[80%] mx-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center">

<div className='text-[13px] lg:text-[20px]'>{t("home1")}</div>
<Link className='px-2 py-1 text-[13px] lg:text-[20px] border-[1px] w-fit mx-auto' to="/contact" >{t("Contact")}</Link>
</div>
    </div>
  )
}

export default HomaPartOne