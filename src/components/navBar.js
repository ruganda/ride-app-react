import React from 'react';
import {Link} from "react-router-dom";

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
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/rides'>Rides</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
     );
};

export { NavBar as default };