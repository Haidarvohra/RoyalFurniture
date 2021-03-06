import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    {/* <a className="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">Start Bootstrap</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/">Home</NavLink></li>
                            <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/about">About</NavLink></li>
                            <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/product">Products</NavLink></li>
                            <li className="nav-item px-lg-4"><NavLink className="nav-link text-uppercase" to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
