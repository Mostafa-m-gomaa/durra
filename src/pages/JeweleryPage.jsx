import React from 'react'
import { useParams } from 'react-router-dom'
import { getCatgory, getProducts, getSubCats , getCatgories , getsubCategories } from '@/api/categories'
import { useQuery } from '@tanstack/react-query'
import { useEffect , useState } from 'react'
import catImage from '../assets/catImg.png'
import ShowProducts from '@/components/ShowProducts'
import ShowProductsForSubs from '@/components/showProductFoesubs'
import GradientCard from '@/components/gradientCard'
import { useTranslation } from "react-i18next";


const JewelPage = () => {

   const { t, i18n } = useTranslation();
            const [lang,setLang] =useState("")
            
        useEffect(()=>{
      setLang(localStorage.getItem("lang"))
        },[])

    
    const {data : subCats}=useQuery({
        queryKey:['subCats'],
        queryFn: getsubCategories
    })
    
    const subCatItems = subCats?.data || []
    const {data : categories}=useQuery({
        queryKey:['getcategories'],
        queryFn: getCatgories
    })
    const catItems = categories?.data || []
    console.log(catItems)

  return (
    <div className='w-[90%] mx-auto flex flex-col gap-16 py-32'>
        <div className="flex w-full items-center">
<div className="flex w-[60%] justify-start  flex flex-col text-left gap-8">
<h1>{t("Jewelery")}</h1>
<span className='font-thin'>{t("jewel1")}</span>
</div>
<img src={catImage} className='mx-auto max-w-[30%] max-h-[400px]' alt="" />
        </div>
<div className="flex justify-center gap-1 w-[90%] mx-auto">

   {catItems?.map((cat ,i)=>{
      let name
                            if(lang==='en'){
                                name=cat?.name_en}
                            else if(lang==='turk'){
                                name=cat.name_ar
                            }
    if(["Gold" , "Diamond"].includes(cat?.name_en)){

        return(
        <GradientCard key={i} title={name} image={cat?.imageCover}  link={`/cat/${cat?._id}`}/>
        )
    }
    })}
</div>
   {catItems?.map((cat ,i)=>{
      let name
                            if(lang==='en'){
                                name=cat?.name_en}
                            else if(lang==='turk'){
                                name=cat.name_ar
                            }
    if(["Gold" , "Diamond"].includes(cat?.name_en)){

        return(
           <ShowProducts title={name} linkTitle={t("see all products")} categoryId={cat?._id} subs={subCatItems} /> 
        )
    }
    })}

{/* <div className="flex w-full gap-2 justify-center flex-wrap gap-2">
{subCatItems?.map((sub,i)=> <GradientCard key={i} title={sub?.name_en} image={sub?.imageCover}  link={`/subCat/${sub?._id}`}/>)}
</div>

        <div className="flex gap-32 flex-col w-full ">
{subCatItems?.map((sub , i) => {
    return (
      <ShowProductsForSubs title={sub?.name_en} products={productsItems}  subCategoryId={sub?._id}  />
    )

}
)}


        </div> */}



    </div>
  )
}

export default JewelPage