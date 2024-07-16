import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import { Routes,Route,Link } from 'react-router-dom';
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/EditProduct";
import Swal from 'sweetalert2'
import Category from "./pages/Category";
import AddCategory from "./pages/AddCategory";
import CategoryDetails from "./pages/CategoryDetails";
import EditCategory from "./pages/EditCategory";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar/>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/add" element={<AddProduct/>}/>
            <Route path="/products/:prodId" element={<ProductDetails/>}/>
            <Route path="/products/:prodId/edit" element={<EditProduct/>}/>
            <Route path="/products/category/electronics" element={<Category/>}/>
            <Route path="/products/category/electronics/categories/:prodID" element={<CategoryDetails/>}/>
            <Route path="/products/category/electronics/categories/edit/:prodID" element={<EditCategory/>}/>
            <Route path="/products/category/electronics/newCategory" element={<AddCategory/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
