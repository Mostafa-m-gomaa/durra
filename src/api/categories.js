import { fetchClient } from "./client";



export const getCatgories =() =>{
    return fetchClient(`/categories`)
}
export const getsubCategories =() =>{
    return fetchClient(`/subCategories`)
}