import React from 'react';
import Button5 from "./button5.png"
import Button5Rectangle from "./button5rectangle.svg"

import "./Label.scss"
import "./Label-1.scss"
const Label = (props) => {
    return (
        <div className={"flicker Label Label-" + "1"}>
            <img class="label-image" src={Button5} alt={props.alt}/>
            <img class="label-rectangle" src={Button5Rectangle} alt=""/>
            <h2 class="number">00</h2>
            <h2 class="text">INTRO</h2>
        </div>
    );
};

export default Label;