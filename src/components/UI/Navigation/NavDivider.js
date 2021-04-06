import React from 'react';
// @ts-ignore
import divider from "../../../assets/dividers/divider3.png"
import "./NavDivider.scss"
const NavDivider = () => {
    return (
        <img className="nav-divider" src={divider} alt="Divider"/>
    );
};

export default NavDivider;