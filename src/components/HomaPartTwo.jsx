import React from 'react'
import imgOne from '../assets/one.png'
import imgTwo from '../assets/two.png'
import imgThree from '../assets/three.png'
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { useEffect } from 'react';
const HomaPartTwo = () => {
           const { t, i18n } = useTranslation();
                            const [lang,setLang] =useState("")
                            
                        useEffect(()=>{
                      setLang(localStorage.getItem("lang"))
                        },[])
    const data = [
        {img : imgOne , title : t("title4") , desc : t("desc1")},
        {img : imgTwo , title : t("title5") , desc : t("desc2")},
        {img : imgThree , title :t("title6")  , desc : t("desc3") },
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