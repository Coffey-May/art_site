import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';




function Nav() {
    return (
        <nav className="Nav">
            <h1 className="cm">CM</h1>


            <ul>
                <NavLink to="/" style={{ textDecoration: 'none' }} className="nav-link" >
                    <li className="nav-link">Home</li>
                </NavLink>
                <NavLink to="/gallery" style={{ textDecoration: 'none' }} className="nav-link">
                    <li className="nav-link">Gallery</li>
                </NavLink>
                <NavLink to="/contact" style={{ textDecoration: 'none' }} className="nav-link">
                    <li className="nav-link">Contact</li>
                </NavLink>

            </ul>

        </nav>
    );
}

export default Nav;
