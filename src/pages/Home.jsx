import { getCatgories , getsubCategories } from '@/api/categories'
import Hero from '@/components/Hero'
import ShowProducts from '@/components/ShowProducts'
import UnderHero from '@/components/UnderHero'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import DurraDesign from './DurraDesign'
import GradientCard from '@/components/gradientCard'
import HomaPartOne from '@/components/HomaPartOne'
import HomePartTwo from '@/components/HomaPartTwo'
 

const Home = () => {



const {data : categories}=useQuery({
    queryKey:['categories'],
    queryFn: getCatgories
})
const catItems = categories?.data || []
const {data : subCats}=useQuery({
    queryKey:['subCats'],
    queryFn: getsubCategories
})

const subCatItems = subCats?.data || []




  return (
    <div className='flex flex-col gap-16 w-full pt-16'>
        <Hero />

            {catItems?.map((cat ,i)=>
              cat?.name_en === "Duraa Designs" &&    <DurraDesign categoryId={cat?._id} title={cat.name_en} subs={subCatItems}   />)}
        <UnderHero />
        <div className="flex justify-center gap-1 w-[90%] mx-auto flex-wrap">

        {catItems?.map((cat,i)=> ["Duraa Designs" , "Watches" , "Jewelry"].includes(cat?.name_en) && <GradientCard width="max-w-[45%] min-w-[45%] lg:max-w-[30%] lg:min-w-[30%]" title={cat?.name_en} image={cat?.imageCover} link={`/cat/${cat._id}`} />)}
        </div>
    {catItems?.map((cat ,i)=>{
      return(
         <ShowProducts title={cat?.name_en} linkTitle={`see all products`} categoryId={cat?._id} subs={subCatItems} /> 
      )
    })}
 <HomaPartOne />
 <HomePartTwo />
    </div>
  )
}

export default Home