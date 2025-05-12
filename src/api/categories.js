import { fetchClient } from "./client";



export const getCatgories =() =>{
    return fetchClient(`/categories`)
}
export const getCatgory =(id) =>{
    return fetchClient(`/categories/${id}`)
}
export const getSubCats =(id) =>{
    return fetchClient(`/subCategories?category=${id}`)
}
export const getsubCategories =() =>{
    return fetchClient(`/subCategories`)
}
export const getProducts =() =>{
    return fetchClient(`/products`)
}