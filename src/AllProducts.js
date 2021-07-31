import React from 'react'
import "./AllProducts.css";
import { Link } from 'react-router-dom';
import Laptop from './Laptop';
import Mobile from './Mobile';
import { Sidebar } from './Sidebar';
import Product from './Product';

function AllProducts() {
    return (
        <div className="allproducts">
            <ul className="allproducts__sidebar">
                {Sidebar.map((val,key)=>{
                    return(
                        <li key={key} 
                        className="allproducts__list"
                        onClick={()=>(
                            window.location.pathname=val.link
                        )}>
                            <div>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
            <div className="allproducts__sideright">
                <img src="https://techstory.in/wp-content/uploads/2021/04/Amazon-1.jpg" alt="" />
            </div>

            

            {/* <div className="allproducts__sidebar">
                            <p>Electronics</p>
                            <ul>
                                <li>
                                <Link to="/laptop">
                                    Laptop
                                </Link>
                                </li>
                                <li>
                                <Link to="/mobile">
                                    Mobile
                                </Link>
                                </li>
                            </ul>
            </div>
            <div className="allproducts__sidebar">
                            <p>Home & Kitchen</p>
                            <ul>
                                <li>
                                <Link to="/decor">
                                    Home Decor Products
                                </Link>
                                </li>
                                <li>
                                <Link to="/furniture">
                                    Furniture
                                </Link>
                                </li>
                            </ul>
            </div>
            <div className="allproducts__popular">
                Popular Products
            </div> */}

            
        </div>
    )
}

export default AllProducts
