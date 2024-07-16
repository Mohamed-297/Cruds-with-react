import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
export default function Category(){
    const [category,setCategory]=useState([])
    useEffect(()=>{
        getCategory()
    },[])
    function getCategory(){
        fetch(`http://localhost:9000/categories`)
        .then(res=>res.json())
        .then(data=>setCategory(data))
    
    }
    // console.log(category)
    function handleDelete(cat){
        Swal.fire({
            title:`u really want to delete ${cat.title}`,
            showCancelButton:true
        }).then(data=>{
            if(data.isConfirmed){

                fetch(`http://localhost:9000/categories/${cat.id}`,{
                    method:"DELETE"
                }).then(res=>res.json())
                .then(data=>getCategory())
            }
        })
    }
    return(
        <>
        <h1>category Page</h1>
        <Link to="newCategory" className="btn btn-success">Add New category</Link>
        <table className="table table-striped mt-5 products-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>category</th>
                    <th>Price</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                
                    {category.map(cat=>{
                        return (
                        <tr key={cat.id} > 
                        <td>{cat.id}</td>
                        <td>{cat.title}</td>
                        <td>{cat.category}</td>
                        <td>{cat.price}</td>
                        <td>
                            <button onClick={()=>handleDelete(cat)} className=" btn btn-danger btn-sm">Delete</button>
                            <Link to={`categories/${cat.id}`} className=" btn btn-info btn-sm">View</Link>
                            <Link to={`categories/edit/${cat.id}`} className=" btn btn-primary btn-sm">Edit</Link>
                        </td>
                    </tr>)
                    })}
                    
                
                
            </tbody>
        </table>
        </>)
} 