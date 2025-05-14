import React from 'react'
import { useParams } from 'react-router-dom'
import { getCatgory, getProducts, getSubCats } from '@/api/categories'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import catImage from '../assets/catImg.png'
import ShowProducts from '@/components/ShowProducts'
import ShowProductsForSubs from '@/components/showProductFoesubs'
import GradientCard from '@/components/gradientCard'

const CatPage = () => {
    const {id} =useParams()

    const {data : categoryData , isLoading} = useQuery({
        queryKey : ['category' , id],
        queryFn : () => getCatgory(id)
    })
    const {data : subCategoryData } = useQuery({
        queryKey : ['subCategory' , id],
        queryFn :  ()=>getSubCats(id)
    })
    const {data : productsData } = useQuery({
        queryKey : ['products' ],
        queryFn :  getProducts
    })
    const catItems = categoryData?.data || {}
    const subCatItems = subCategoryData?.data || []
    const productsItems = productsData?.data || []


    console.log(subCatItems)

  return (
    <div className='w-[90%] mx-auto flex flex-col gap-16 py-32'>
        <div className="flex w-full items-center">
<div className="flex w-[60%] justify-start  flex flex-col text-left gap-8">
<h1>{catItems?.name_en}</h1>
<span className='font-thin'>Indulge in the timeless allure of our Jewelry and Diamond Collection at Duraa. Each piece is a masterpiece, meticulously crafted to celebrate elegance, sophistication, and individuality</span>
</div>
<img src={catItems?.imageCover || catImage} className='mx-auto max-w-[30%] max-h-[400px]' alt="" />
        </div>



<div className="flex w-full gap-2 justify-center flex-wrap gap-2">
{subCatItems?.map((sub,i)=> <GradientCard key={i} title={sub?.name_en} image={sub?.imageCover}  link={`/subCat/${sub?._id}`}/>)}
</div>

        <div className="flex gap-32 flex-col w-full ">
{subCatItems?.map((sub , i) => {
    return (
      <ShowProductsForSubs title={sub?.name_en} products={productsItems}  subCategoryId={sub?._id}  />
    )

}
)}
        </div>

    </div>
  )
}

export default CatPage