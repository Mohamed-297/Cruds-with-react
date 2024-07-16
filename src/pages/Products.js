import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
export default function Products(){
    const [products,setProducts]=useState([])

    useEffect(()=>{
        getAllProducts()
    },[])

    function getAllProducts(){
        fetch(`http://localhost:9000/products`)
        .then(res=>res.json()).then(data=>setProducts(data))
    
    }
    function deleteProduct(product){
        Swal.fire({
            title:`Are u sure u want to delete ${product.title}?`,
            showCancelButton:true
        }).then(data=>{
            if(data.isConfirmed){

                fetch(`http://localhost:9000/products/${product.id}`,{
                    method:"DELETE"
                }).then(res=>res.json())
                .then(data=>getAllProducts())
            }
        })
    }
    return( 
        <>
        <h1>Products Page</h1>
        <Link to="/products/add" className="btn btn-success">Add New Product</Link>
        <table className="table table-striped mt-5 products-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    {/* <th>Description</th> */}
                    <th>Price</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {products.map(prod=>{
                    return <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.title}</td>
                    {/* <td>{`${prod.description.slice(0,20)}...`}</td> */}
                    <td>{prod.price}</td>
                    <td>
                        <button onClick={()=>deleteProduct(prod)} className=" btn btn-danger btn-sm">Delete</button>
                        <Link to={`/products/${prod.id}`} className=" btn btn-info btn-sm">View</Link>
                        <Link to={`/products/${prod.id}/edit`}className=" btn btn-primary btn-sm">Edit</Link>
                    </td>
                </tr>
                })}
                
            </tbody>
        </table>
        </>
    )
} 