import React from 'react'
import jewelImage from '../assets/replaceImg.png'
import cubeImage from '../assets/cube.png'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react'


const OurStory = () => {


       const { t, i18n } = useTranslation();
                const [lang,setLang] =useState("")
                
            useEffect(()=>{
          setLang(localStorage.getItem("lang"))
            },[])
    
    const arr =[
        {
            title : t("title1"), 
            text :t("sub1")
        },
        {
            title : t("title2"), 
            text :t("sub2")
        },
        {
            title :t("title3") , 
            text :t("sub3")
        },
    ]
  return (
    <div className="w-full">
        <div className="incontainer pt-44 flex flex-col gap-20">
<div className="flex flex-col w-[50%] gap-6">

           <div>{t("Our Story")}</div>
           <h2>{t("story1")}</h2>
           <h4>{t("story2")}</h4>
</div>
<div className="flex  w-full gap-6 items-center">

           <h2 className='w-[50%]'>{t("How It Begin")}</h2>
           <p className='w-[50%]'>{t("story3")}</p>

</div>
<div className="w-full h-[70vh] overflow-hidden  flex justify-center ">
    <img className='m-auto h-[160%]' src={jewelImage} alt="" />
</div>
<div className="flex flex-col w-[70%] gap-6">
<h2>{t("Our Why")}</h2>
<h4>{t("story4")}</h4>
</div>
<div className="w-full flex justify-center gap-3">
    {arr.map((item, index) => (
        <div key={index} className="flex flex-col gap-3 w-[30%]">
            <img className='w-[20px]' src={cubeImage} alt="" />
            <h3 className='text-[20px] font-bold'>{item.title}</h3>
            <p>{item.text}</p>
        </div>
    ))}

</div>
<div className="flex  w-full gap-6 items-center">

           <h2 className='w-[50%]'>{t("Our Journey So Far")}</h2>
           <p className='w-[50%]'>{t("story5")}</p>

</div>
<div className="flex flex-col justify-center items-center gap-12 text-center">
    <h2>{t("Join Us on This Journey")}</h2>
    <p>{t("story6")}</p>
    <Link to="/cat/jeweleryCat" className='bg-myBlue py-2 px-8'>{t("See Our Product")}</Link>
</div>

            </div>
            </div>
  )
}

export default OurStory