import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <>
            <ul className="list-unstyled">
                <li>
                    <Link to="products">get all products </Link>
                </li>
                <li>
                    <Link to="/products/category/electronics">get all Categories </Link>
                </li>
            </ul>
        </>
    )
}