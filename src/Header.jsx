import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";



function Header(){


    return(
        <header>
            <h1>Mantis</h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="https://cybersecuritynews.com/">Cyber News</a></li>
                    <li><Link to="/about">About</Link></li>
                    
                </ul>
            </nav>
            <hr></hr>
        </header>
    )

}

export default Header