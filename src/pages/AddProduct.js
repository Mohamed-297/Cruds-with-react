import { useState } from "react";
import {  useNavigate } from "react-router-dom";
export default function AddProduct(){
    const [title,setTitle]=useState("")
    const [price,setPrice]=useState()
    let navigate =useNavigate()
    function handleSubmit(event){
        event.preventDefault();
        navigate("/products")
        fetch(`http://localhost:9000/products`,{
            method:"POST",
            body:JSON.stringify({
                title:title,
                price:price,
            })
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    function handlePrice(event){
        setPrice(event.target.value)
    }
    function handleTitle(event){
        setTitle(event.target.value)
    }
    return(
        <>
            <h1>Add product</h1>
            <form onSubmit={handleSubmit}>
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
                
                
                <button type="submit" className="btn btn-primary">Add product</button>
            </form> 
        </>
    )
}