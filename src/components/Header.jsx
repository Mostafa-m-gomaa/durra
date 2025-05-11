import React from 'react'
import { Search ,Heart ,ShoppingBag ,User, MoveRight} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getCatgories, getsubCategories } from '@/api/categories';
import { Link } from 'react-router-dom';
import burgerIcon from'../../src/assets/menu.png'
import ExampleMenu from './Example';
import replaceImg from '../assets/replaceImg.png'
import { IconRight } from 'react-day-picker';


const Header = () => {

    const lang = "en"
    const [isChecked, setIsChecked] = React.useState(true)

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
console.log(catItems)




  return (
    <div className='w-full bg-scndcolor'>

<div className="w-full overflow-x-hidden lg:overflow-visible mx-auto flex justify-between items-center py-4 ">

    <div className="flex items-center gap-24 relative  pl-[20px] lg:pl-[30px]">

<div className='font-bold flex gap-2 items-center text-[25px] lg:text-[40px]'>
    <img onClick={()=>setIsChecked((prev) => !prev)} src={burgerIcon} alt="" className='lg:hidden' />
    <Link onClick={()=>setIsChecked(false)} to="/">
    DURRA
    </Link>
    </div>

<div className={` flex gap-4 bg-scndcolor fixed lg:static lg:flex-row flex-col lg:items-center items-start ${isChecked ? "left-0" : "left-[-150%]"}  lg:left-0 lg:top-0 top-[65px] lg:gap-8 gap-4 bg-black lg:bg-transparent w-screen lg:w-fit h-screen lg:h-fit overflow-hidden transition-all duration-500 ease-in-out z-50 lg:overflow-visible`}>


{catItems.map((cat, index) => {
                            let name
                            if(lang==='en'){
                                name=cat.name_en}
                            else if(lang==='ar'){
                                name=cat.name_ar
                            }
                            return (
                                <Link to={`cat/${cat._id}`} key={index} onClick={() => {setIsChecked(!isChecked) }}
                                 className="border-b-2 text-[20px]  lg:text-[18px] px-[35px] border-white lg:border-none group capitalize py-2 w-fit lg:px-2  border-transparent pb-2  transition-all  ">
                                  
                                      {name}

                                    <div className="transition-all   gap-3 absolute hidden w-screen left-0 justify-between overflow-hidden  px-[15px]   lg:group-hover:flex sm:rounded  top-[90%] bg-scndcolor   hover:flex  overflow-y-scroll h-[67vh]">
                                        <div className="flex flex-col gap-2 w-[50%] pt-[15px]">
                                        <h2 className='pl-[20px]'>{name}</h2>
                                        {subCatItems.map((sub, index) => {
                                            let subName 
                                            let catName 
                                            if(lang==='en'){
                                                subName=sub.name_en
                                                catName = sub?.category?.name_en || "no-cat";
                     
                                            }
                                            else if(lang==='ar'){
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

                                        <img src={replaceImg} alt="" className='bg-cardcolor h-[80%]' />
                                        </div>
                                    </div>

                                </Link>

                            )
                        })}
                      
                         
                        
                        
</div>
    </div>

    
<div className="flex gap-2 lg:gap-8 *:gap-1 *:lg:gap-4 *:text-[11px] *:items-center *:lg:text-[15px] pr-[15px] lg:pr-[35px]">
    {/* <div className="flex"> <span><Search /></span> <span>search</span></div> */}
    <div className="flex"> <span><Heart /></span> <span>WishList</span></div>
    <div className="flex"> <span><ShoppingBag/></span> <span>Cart</span></div>
    <div className="flex"> <span><User /></span> <span>Account</span></div>
</div>
</div>

    </div>
  )
}

export default Header