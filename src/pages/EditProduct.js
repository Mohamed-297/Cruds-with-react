import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
export default function EditProduct(){
    const {prodId}=useParams()
    const [product,setProduct]=useState({})
    const api_url=`http://localhost:9000/products`
    const navigate=useNavigate()
    useEffect(()=>{
        getProduct(api_url)   
    },[])
    const [title,setTitle]=useState()
    const [price,setPrice]=useState()
    useEffect(()=>{
        setTitle(product.title)
        setPrice(product.price)
    },[product])
    console.log(product.title)
    function getProduct(url){

        fetch(`${url}/${prodId}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }
    function handlePrice(event){
        setPrice(event.target.value)
    }
    function handleTitle(event){
        setTitle(event.target.value)
    }
    function handleSubmit(event,url){
        event.preventDefault();
        navigate("/products")
        fetch(`${url}/${prodId}`,{
            method:"PUT",
            body:JSON.stringify({
                title:title,
                price:price
            })
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
    }
    return(

        <>
            <h1>Edit Page</h1>
            <form onSubmit={(event)=>handleSubmit(event,api_url)}>
                <div className="mb-3">
                    <label htmlFor="product" className="form-label">Title</label>
                    <input 
                    type="text" 
                    onChange={handleTitle}
                    name="title"
                    value={title}
                    className="form-control" 
                    id="product" 
                    placeholder="Product title"
                    aria-describedby="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input 
                    type="text"
                    onChange={handlePrice}
                    name="price" 
                    value={price}
                    className="form-control" 
                    id="price" 
                    placeholder="Product price"
                    aria-describedby="title"/>
                </div>
                
                
                <button type="submit" className="btn btn-primary">Edit product</button>
            </form> 
 
        </>
    )
}