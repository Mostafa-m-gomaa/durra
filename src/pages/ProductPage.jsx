import { Star } from 'lucide-react'
import React, { useEffect , useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ProductPage = () => {
    const [product , setProduct] = React.useState(null)
    const [selectedImage,setSelectedImage]=useState("")
    useEffect(()=>{
        const product = JSON.parse(localStorage.getItem("product"))
setProduct(JSON.parse(localStorage.getItem("product")))
setSelectedImage(product?.imageCover)
console.log(JSON.parse(localStorage.getItem("product")))
    },[])



          const toggleProductInCart = (product) => {
          const existingCart = JSON.parse(localStorage.getItem("orders")) || [];
        
       
          const productIndex = existingCart.findIndex(item => item._id === product._id);
    
          let updatedCart;
        
          if (productIndex !== -1) {
            // Product already in cart, remove it
            updatedCart = existingCart.filter(item => item._id !== product._id);
          } else {
            // Product not in cart, add it
            updatedCart = [...existingCart, product];
          }
        setCartItems(updatedCart);
          localStorage.setItem("orders", JSON.stringify(updatedCart));
          window.dispatchEvent(new Event("storage-update"));
        };
        
        
        const [cartItems, setCartItems] = useState(() => {
          const stored = localStorage.getItem("orders");
          return stored ? JSON.parse(stored) : [];
        });
        
        const isProductInCart = (id) => {
          return cartItems.some((item) => item._id === id);
        };
  return (
    <div className='pt-32 w-[95%] mx-auto'>
        <div className="flex w-full items-start justify-center gap-8 flex-col lg:flex-row">
<div className="flex w-[95%] lg:w-[45%] flex-col gap-4">
<img src={selectedImage} alt="" className='transition-all' />
<div className="flex w-full gap-1 flex-wrap">
    {product?.images?.map((img , i) => {
return(
  <img src={img} className='max-w-[20%] min-w-[20%] max-h-[90px] min-h-[90px] cursor-pointer' onClick={()=>setSelectedImage(img)}/>
)
    })}
</div>

<div className="w-full bg-[#1A1F23] text-center py-16 px-20 flex flex-col gap-10">
<h3>The story behind</h3>
<span className='font-thin text-[12px] '>Traveling Time" is a poetic journey across the globe, tracing time zones and blending continents into a fantastical equestrian world. As latitudes merge and borders dissolve, time becomes fluid, and the compass spins endlessly, symbolizing the freedom to be anywhere, anytime. This imaginative exploration celebrates the boundless possibilities of time and space.</span>
</div>
</div>
<div className="flex w-[95%] lg:w-[30%] flex-col gap-4">
<h2 className="flex flex-wrap text-left">{product?.title_en}</h2>
<h3>${product?.priceAfterDiscount}</h3>
<div className="flex items-center text-[12px]">
    <Star size={20} />
    <Star size={20} />
    <Star size={20} />
    <Star size={20} />
    <Star size={20} />
    <div>(5.0 stars)</div>
</div>
<div className='font-thin'>{product?.description_en}</div>
                            <Button onClick={() => toggleProductInCart(product)} className="text-[12px] bg-buttoncolor px-2 py-1 rounded" >   {isProductInCart(product?._id) ? "Remove " : "Add To Cart"}</Button>
<span className='text-center text-[9px]'>Free shipping over $50</span>
   <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Details</AccordionTrigger>
        <AccordionContent className='flex flex-col gap-2'>
            {product?.highlights_en.map((item , i) => <span key={i}>{item}</span>)}
          
        </AccordionContent>
      </AccordionItem>
    </Accordion>

</div>
        </div>
    </div>
  )
}

export default ProductPage