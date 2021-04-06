import React from 'react';
import "./NavItem.scss"

const NavItem = (props) => {
    return (
        <div className="nav-item">
            <a href={props.link}>
                {props.children}
            </a>
        </div>
    );
};

export default NavItem;