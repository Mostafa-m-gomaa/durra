import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "react-i18next";
import { ArrowBigRightDash } from 'lucide-react';
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
export function DropdownMenuDemo() {
  const queryClient= useQueryClient();
      const { t, i18n } = useTranslation();
      const [lang,setLang] =useState("")
      
  useEffect(()=>{
setLang(localStorage.getItem("lang"))
  },[])

    const changeLanguage = (lng) => {
     localStorage.setItem('lang', lng); 
    i18n.changeLanguage(lng); 
    setLang(lng);
window.location.reload(); // إعادة تحميل الصفحة لتطبيق التغييرات
  };


  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button >{lang === "en" ? "Turkey" : "English"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent  align="start">
        <DropdownMenuLabel className="text-black">Choose Lang</DropdownMenuLabel>
   
     
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-black hover:bg-[#726e6e]" onClick={() => changeLanguage('en')}>
          English
          {lang === "en" &&     <ArrowBigRightDash color="#15c168" />}
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-black hover:bg-[#726e6e]"  onClick={() => changeLanguage('turk')}>
          Turkey
           {lang === "turk" &&     <ArrowBigRightDash color="#15c168" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
