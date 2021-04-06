import React from 'react';
import NavItem from "./NavItem"
import "./NavBar.scss"
import NavDivider from './NavDivider';
const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav">
            <NavItem link="/">/max</NavItem>
            <ul>
                <li><NavItem link="/">~/1_about</NavItem></li>
                <li><NavItem link="/">~/2_projects</NavItem></li>
                <li><NavItem link="/">~/3_contact</NavItem></li>
            </ul>
            </div>

            <NavDivider/>
        </nav>
    );
};

export default NavBar;