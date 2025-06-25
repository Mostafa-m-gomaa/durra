import React from 'react'
import { useParams } from 'react-router-dom'
import { getCatgory, getProducts, getSubCats ,getSubCatgory ,getSubCatgoryProduct } from '@/api/categories'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import catImage from '../assets/catImg.png'
import ProdCard from '@/components/ProdCard'
import { useTranslation } from "react-i18next";
import { useState } from 'react'



const SubCatPage = () => {
    const {id} =useParams()
      const { t, i18n } = useTranslation();
                const [lang,setLang] =useState("")
                
            useEffect(()=>{
          setLang(localStorage.getItem("lang"))
            },[])
   
    const {data : subCategoryData , isLoading} = useQuery({
        queryKey : ['subCategory' , id],
        queryFn : () => getSubCatgory(id)
    })
    const {data : subCategoryProducts } = useQuery({
        queryKey : ['subCategoryProducts' , id],
        queryFn : () => getSubCatgoryProduct(id)
    })
 
    // const catItems = categoryData?.data || {}
    const subCatData = subCategoryData?.data || []
    const productsItems = subCategoryProducts?.data || []

  return (
    <div className='w-[90%] mx-auto flex flex-col gap-16 py-32'>
        <div className="flex w-full items-center">
<div className="flex w-[60%] justify-start  flex flex-col text-left gap-8">
<h1 className='flex flex-wrap '>{lang === "en" ? subCatData?.name_en : subCatData?.name_ar}</h1>
<span className='font-thin'>{t("subc1")}</span>
</div>
<img src={subCatData?.imageCover || catImage} className='mx-auto max-w-[30%] max-h-[400px]' alt="" />
        </div>


       <div className="w-[98%] mx-auto flex justify-center flex-wrap gap-1">
{productsItems?.map((pro , i) => <ProdCard product={pro}  />) }
       </div>

    </div>
  )
}

export default SubCatPage