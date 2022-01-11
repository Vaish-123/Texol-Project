import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navdiv'>
            <ul className="nav justify-content-center mt-3">
                <li className="nav-item">
                    <a className="nav-link btn btn-info" href="/">View Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-info ml-3" href="/addproducts">Add Product</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-info ml-3" href="/addwarehouse">Add stock</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link btn btn-info ml-3" href="/listwarehouse" >List Warehouse</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
