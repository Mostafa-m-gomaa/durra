import React, { useDebugValue, useEffect, useState } from 'react'
import { Search ,Heart ,ShoppingBag ,User, MoveRight} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getCatgories, getsubCategories } from '@/api/categories';
import { Link } from 'react-router-dom';
import burgerIcon from'../../src/assets/menu.png'
import ExampleMenu from './Example';
import replaceImg from '../assets/replaceImg.png'
import {DropdownMenuDemo} from './ChangeLang';
import { useTranslation } from "react-i18next";





const Header = () => {

          const { t, i18n } = useTranslation();
                     const [lang,setLang] =useState("")
                     
                 useEffect(()=>{
               setLang(localStorage.getItem("lang"))
                 },[])
    const [isChecked, setIsChecked] = React.useState(false)

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
const [ordersNum, setOrderNum] = useState(0);

useEffect(() => {
  const updateOrders = () => {
    const orders = localStorage.getItem("orders");
    const ordersArr = JSON.parse(orders) || [];
    setOrderNum(ordersArr.length);
  };

  updateOrders(); // أول مرة
  window.addEventListener("storage-update", updateOrders);

  return () => {
    window.removeEventListener("storage-update", updateOrders);
  };
}, []);

console.log(catItems)

  return (
    <div className='w-full max-w-[100%]  overflow-hidden lg:overflow-visible bg-scndcolor fixed top-0 z-50'>

<div className="w-full overflow-x-hidden lg:overflow-visible mx-auto flex justify-between items-center py-4 ">

    <div className="flex items-center gap-24 relative  pl-[20px] lg:pl-[30px]">

<div className='font-bold flex gap-2 items-center text-[25px] lg:text-[40px]'>
    <img onClick={()=>setIsChecked((prev) => !prev)} src={burgerIcon} alt="" className='lg:hidden' />
    <Link onClick={()=>setIsChecked(false)} to="/">
    DURRA
    </Link>
    </div>

<div className={` flex gap-4 bg-scndcolor fixed lg:static lg:flex-row flex-col lg:items-center items-start ${isChecked ? "left-0" : "left-[-150%]"}  lg:left-0 lg:top-0 top-[65px] lg:gap-8 gap-4 bg-black lg:bg-transparent w-screen lg:w-fit h-screen lg:h-fit overflow-hidden transition-all duration-500 ease-in-out z-50 lg:overflow-visible`}>


{catItems?.map((cat, index) => {
                            let name
                            if(lang==='en'){
                                name=cat.name_en}
                            else if(lang==='turk'){
                                name=cat.name_ar
                            }

                            if( !["Jewelry" , "Gold" , "Diamond"].includes(cat?.name_en)){

                                return (
                                    <Link to={`cat/${cat._id}`} key={index} onClick={() => {setIsChecked(!isChecked) }}
                                     className=" border-b-2 text-[20px]  lg:text-[18px] px-[35px] border-white lg:border-none group capitalize py-2 w-fit lg:px-2  border-transparent pb-2  transition-all ">
                                      
                                          {name}
    
                                        <div className="transition-all z-50   gap-3 absolute hidden w-screen left-0 justify-between overflow-hidden  px-[15px]   lg:group-hover:flex sm:rounded  top-[80%] bg-scndcolor   hover:flex  overflow-y-scroll h-[67vh]">
                                            <div className="flex flex-col gap-2 w-[50%] pt-[15px]">
                                            <h2 className='pl-[20px]'>{name}</h2>
                                            {subCatItems.map((sub, index) => {
                                                let subName 
                                                let catName 
                                                if(lang==='en'){
                                                    subName=sub.name_en
                                                    catName = sub?.category?.name_en || "no-cat";
                         
                                                }
                                                else if(lang==='turk'){
                                                    subName=sub.name_ar
                                                    catName = sub?.category?.name_ar || "no-cat";
                                                  
                                                }
                                                if(name === catName){
                                                    return (
                                                        <Link to={`subCat/${sub._id}`} className="flex  py-2 group justify-between gap-y-1 px-16 items-center hover:bg-black hover:text-white transition-all">
                                                            <Link to={`subCat/${sub._id}`} className="capitalize   transition-all ">{subName}</Link>
                                                           <MoveRight />
                                                        </Link>
                                                    )
                                                }
                                    
                                            })}
                                            </div>
                                            <div className="flex  w-[40%] justify-center items-center">
    
                                            <img src={cat?.imageCover || replaceImg} alt="" className='bg-cardcolor h-[80%]' />
                                            </div>
                                        </div>
    
                                    </Link>
    
                                )
                            }
                        })}
                      
                         
                              <Link to={`cat/jeweleryCat`} onClick={() => {setIsChecked(!isChecked) }}
                                     className="border-b-2 text-[20px]  lg:text-[18px] px-[35px] border-white lg:border-none group capitalize py-2 w-fit lg:px-2  border-transparent pb-2  transition-all  ">
                                      
                                          {t("Jewelery")}
    
                                        <div className="transition-all   gap-3 absolute hidden w-screen left-0 justify-between overflow-hidden  px-[15px]   lg:group-hover:flex sm:rounded  top-[80%] bg-scndcolor   hover:flex  overflow-y-scroll h-[67vh]">
                                            <div className="flex flex-col gap-2 w-[50%] pt-[15px]">
                                            <h2 className='pl-[20px]'>Jewelery</h2>
                                            {catItems?.map((cat, index) => {
                                              
                                                if(["Gold" , "Diamond"].includes(cat?.name_en)){
                                                    return (
                                                        <Link to={`cat/${cat?._id}`} className="flex  py-2 group justify-between gap-y-1 px-16 items-center hover:bg-black hover:text-white transition-all">
                                                            <Link to={`cat/${cat?._id}`} className="capitalize   transition-all ">{cat?.name_en}</Link>
                                                           <MoveRight />
                                                        </Link>
                                                    )
                                                }
                                    
                                            })}
                                            </div>
                                            <div className="flex  w-[40%] justify-center items-center">
    
                                            <img src={ replaceImg} alt="" className='bg-cardcolor h-[80%]' />
                                            </div>
                                        </div>
    
                                    </Link>
                                       <Link to={`ourstory`} onClick={() => {setIsChecked(!isChecked) }}
                                     className="border-b-2 text-[20px]  lg:text-[18px] px-[35px] border-white lg:border-none group capitalize py-2 w-fit lg:px-2  border-transparent pb-2  transition-all  ">
                                       {t("Our Story")}
                                     </Link>
                                       <Link to={`contact`} onClick={() => {setIsChecked(!isChecked) }}
                                     className="border-b-2 text-[20px]  lg:text-[18px] px-[35px] border-white lg:border-none group capitalize py-2 w-fit lg:px-2  border-transparent pb-2  transition-all  ">
                                          {t("Contact Us")}
                                     </Link>
                        
</div>
    </div>

    
<div className="flex gap-2 lg:gap-8 *:gap-1 *:lg:gap-4 *:text-[11px] *:items-center *:lg:text-[15px] pr-[15px] lg:pr-[35px]">
  <DropdownMenuDemo />
    {/* <div className="flex"> <span><Search /></span> <span>search</span></div> */}
    <Link to="/cart" className="flex"> <span className='relative'><ShoppingBag/> <div className="absolute bg-red-600 px-1 rounded-md top-[-15px] left-[-10px]">{ordersNum}</div></span> <span>   {t("Cart")}</span></Link>
</div>
</div>

    </div>
  )
}

export default Header