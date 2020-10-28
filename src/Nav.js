import React from 'react';
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="Nav">
            <h1>Nav</h1>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/gallery">
                    <li>Gallery</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>

            </ul>

        </nav>
    );
}

export default Nav;
