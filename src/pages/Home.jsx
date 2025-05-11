import { getCatgories , getsubCategories } from '@/api/categories'
import Hero from '@/components/Hero'
import ShowProducts from '@/components/ShowProducts'
import UnderHero from '@/components/UnderHero'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

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


console.log("data" , catItems)
console.log("subcats" , subCatItems)

  return (
    <div className='flex flex-col gap-16'>
        <Hero />
        <UnderHero />
    {catItems?.map((cat ,i)=>{
      return(
         <ShowProducts title={cat?.name_en} linkTitle={`see all products`} categoryId={cat?._id} subs={subCatItems} /> 
      )
    })}
        {/* <ShowProducts title="rgregre" linkTitle="see all regregrewatches" categoryId="2443543546292992" /> */}
    </div>
  )
}

export default Home