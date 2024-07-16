import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
export default function ProductDetails(){
    const {prodId}=useParams();
    const [product,setProduct]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:9000/products/${prodId}`)
        .then(res=>res.json())
        .then(product=>setProduct(product))
    },[])
    // console.log(product)
    return(
        <>
        <h1>
            Product Details 

        </h1>
        <h3>Description: {prodId} {product.title} </h3>
    </>
    )
}