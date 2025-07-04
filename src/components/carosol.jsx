import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom"
import replaceImg from '../assets/replaceImg.png'
import { useEffect, useState } from "react"

export function CarouselSize({subCatItems}) {
      const [lang,setLang] =useState("")
                     
                 useEffect(()=>{
               setLang(localStorage.getItem("lang"))
                 },[])

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className="flex gap-2 px-4 w-full ">

            {subCatItems?.map((sub , i) => {
                let name
                let desc
                            if(lang==='en'){
                                name=sub?.name_en
                                desc=sub?.description_en
                              }

                            else if(lang==='turk'){
                                name=sub.name_ar
                                desc=sub?.description_ar
                            }
                return (
                    <Link to={`/subcat/${sub?._id}`} key={i} className="flex flex-col gap-4 bg-[#1A1F23] min-w-[45%] max-w-[45%] lg:max-w-[24%] lg:min-w-[24%] p-2">
                      <div className="flex">
                        <span className='bg-scndcolor text-[10px]'>NEW</span>
                      </div>
                      <img src={sub?.imageCover || replaceImg } alt="" className='mx-auto max-w-[95%] min-w-[90%] max-h-[230px] min-h-[230px]'/>
                      
                        <h3 className="flex flex-wrap text-left">{name}</h3>
                        <span className="text-left text-[11px] flex flex-wrap">{desc}</span>
                    </Link>
                )
            })}
    
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}




   


        //         {subCatItems?.map((_, index) => (
        //   <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        //     <div className="p-1">
        //       <Card>
        //         <CardContent className="flex aspect-square items-center justify-center p-6">
        //           <span className="text-3xl font-semibold">{index + 1}</span>
        //         </CardContent>
        //       </Card>
        //     </div>
        //   </CarouselItem>
        // ))}