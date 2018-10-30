import React from 'react';
import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <div className="container">
                <div id="branding">
                    <h1 className="highlight">
                        RIDE MY WAY
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li className="current">
                            <NavLink to='/'>Home</NavLink >
                        </li>
                        <li>
                            <NavLink  to='/rides'>Rides</NavLink >
                        </li>
                        <li>
                            <NavLink  to='/register'>Register</NavLink >
                        </li>
                        <li>
                            <NavLink  to='/login'>Login</NavLink >
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
     );
};

export { NavBar as default };