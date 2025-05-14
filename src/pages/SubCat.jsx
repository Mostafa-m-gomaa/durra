import React from 'react'
import { useParams } from 'react-router-dom'
import { getCatgory, getProducts, getSubCats ,getSubCatgory ,getSubCatgoryProduct } from '@/api/categories'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import catImage from '../assets/catImg.png'
import ProdCard from '@/components/ProdCard'



const SubCatPage = () => {
    const {id} =useParams()

   
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
    console.log("categoryData" , subCategoryProducts)

  return (
    <div className='w-[90%] mx-auto flex flex-col gap-16 py-32'>
        <div className="flex w-full items-center">
<div className="flex w-[60%] justify-start  flex flex-col text-left gap-8">
<h1 className='flex flex-wrap '>{subCatData?.name_en}</h1>
<span className='font-thin'>Indulge in the timeless allure of our Jewelry and Diamond Collection at Duraa. Each piece is a masterpiece, meticulously crafted to celebrate elegance, sophistication, and individuality</span>
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