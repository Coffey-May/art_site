import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

function Nav() {
    return (
        <nav id="Nav" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '0 3rem auto' }}>
            <div >
                <NavLink to="/" style={{ textDecoration: 'none' }} >
                    <h1 className="cm">CM</h1>
                </NavLink>
            </div>
            <div>
                <ul style={{ paddingTop: '.5rem' }}>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <li id="navLink">Home</li>
                    </NavLink>
                    <NavLink to="/gallery" style={{ textDecoration: 'none' }} >
                        <li id="navLink">Gallery</li>
                    </NavLink>
                    <NavLink to="/contact" style={{ textDecoration: 'none' }}>
                        <li id="navLink">Contact</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;
