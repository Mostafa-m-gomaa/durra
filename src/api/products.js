import { fetchClient } from "./client";


export const getProducts =()=>{
    return fetchClient(`/products`)
}