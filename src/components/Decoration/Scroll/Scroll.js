import React from 'react';
import ScrollSVG from "./Scroll.svg"
import "./Scroll.scss"
const Scroll = () => {
    return (
        <div class="Scroll">
            <img src={ScrollSVG} alt="Scroll"/>
            <h2>SCROLL</h2>
        </div>
    );
};

export default Scroll;