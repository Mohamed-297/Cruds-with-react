import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCategory(){
    const [cat,setCat]=useState({})
    const {prodID}=useParams()
    const navigate = useNavigate()
    console.log(prodID)
    useEffect(()=>{
        fetch(`http://localhost:9000/categories/${prodID}`)
        .then(res=>res.json())
        .then(data=>setCat(data))
    },[])

    const [price,setPrice]=useState("")
    const [title,setTitle]=useState("")
    const [category,setCategory]=useState("")
    useEffect(()=>{
        if(cat){

            setCategory(cat.category);
            setTitle(cat.title);
            setPrice(cat.price);
        }
    },[cat])
    function handleSubmit(event){
        event.preventDefault();
        fetch(`http://localhost:9000/categories/${prodID}`,{
            method:"PUT",
            body:JSON.stringify({
                price:price,
                title:title,
                category:category
            })
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        navigate("/products/category/electronics")
    }
    function handlePrice(event){
        setPrice(event.target.value)
    }
    function handleTitle(event){
        setTitle(event.target.value)
    }
    function handleCategory(event){
        setCategory(event.target.value)
    }

    // console.log("price : "+price,"title :"+title,"category : "+category)
    return(
        <>
        <h1>Edit Category Page </h1>
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
                
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input 
                    type="text"
                    onChange={handleCategory}
                    name="category" 
                    value={category}
                    className="form-control" 
                    id="category" 
                    placeholder="Product category"
                    aria-describedby="category"/>
                </div>
                <button type="submit" className="btn btn-primary">Edit category</button>
            </form> 
        </>
    )
}