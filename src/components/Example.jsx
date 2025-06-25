import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ExampleMenu = ({ catItems, subCatItems, lang }) => {
          // const [lang,setLang] =useState("")
                     
          //        useEffect(()=>{
          //      setLang(localStorage.getItem("lang"))
          //        },[])
  return (
    <div className="relative group">
      {/* Simulated Category (Single Item for Simplicity) */}
      <Link
        to="/cat/some-id"
        className="block px-4 py-2 capitalize border-b-4 border-transparent hover:border-black transition-all"
      >
        Hover Me
      </Link>

      {/* Dropdown - shown on hover */}
      <div className="absolute top-full left-0 w-screen bg-black text-white hidden group-hover:flex z-50 p-4 flex-wrap h-[67vh] overflow-y-scroll">
        {subCatItems.map((sub, index) => {
          const subName = lang === "en" ? sub.name_en : sub.name_ar;
          return (
            <Link
              key={index}
              to={`/subCat/${sub._id}`}
              className="w-[45%] flex items-center justify-between gap-4 p-4 hover:bg-white hover:text-black transition-all"
            >
              <span className="capitalize">{subName}</span>
              <img
                src={sub.imageCover}
                alt={subName}
                className="w-[150px] h-[100px] object-cover rounded"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ExampleMenu;
