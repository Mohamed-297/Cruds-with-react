import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function CategoryDetails(){
    const {prodID}=useParams()
    const [category,setCategory]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:9000/categories/${prodID}`)
        .then(res=>res.json())
        .then(data=>setCategory(data))

    },[])


    // console.log(prodID)
    return(
        <>
            <h1>CategoryDetails Page</h1>
            <h3 >Title : {category.title}</h3>
            <h3 >Price : {category.price}</h3>
            <h3 >Category : {category.category}</h3>
        </>
    )
}