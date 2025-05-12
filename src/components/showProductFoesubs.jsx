import { getProducts } from '@/api/products'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import replaceImg from '../assets/replaceImg.png'
import { CarouselSize } from './carosol'
import { ProductCarousel } from './productCarousel'

const ShowProductsForSubs = ({title  ,subCategoryId , products }) => {



return (
  <div className="w-full">
      <div className="incontainer">

      <div className="flex w-full justify-between items-center">
  <h3>{title}</h3>
  <Link to={`/subcategory/${subCategoryId}`} >
  <button className="group relative"><div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden text-white border border-neutral-200 bg-transparent px-6 font-medium  transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">{"see all products"}</div><div class="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div></button>
  </Link>

      </div>

  
      <ProductCarousel products={products} subId={subCategoryId}/>

      </div>
  </div>
)
}

export default ShowProductsForSubs