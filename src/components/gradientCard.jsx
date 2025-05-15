import React from 'react'
import { Link } from 'react-router-dom'

const GradientCard = ({title ,image  ,link , ...props}) => {
  return (
   <div className={`${props.width ?props.width : "max-w-[45%] min-w-[45%] lg:w-[40%]" } bg-gradient-to-t to-[#012E3600] from-[#012A48] flex flex-col `} >
    <div className="w-[90%] mx-auto flex flex-col justify-between items-center py-4 gap-6">

    <img src={image} alt="" className='max-h-[220px] min-h-[220px] lg:max-h-[280px] lg:min-h-[280px] max-w-[80%] min-w-[80%] lg:max-w-[60%] lg:min-w-[60%]' />
{title}
<Link className='px-4 py-1 border-[1px] w-fit mx-auto text-[12px]' to={link}>Explore Our Collection</Link>
    </div>
</div>
  )
}

export default GradientCard