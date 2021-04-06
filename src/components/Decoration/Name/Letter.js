import React from 'react';
import "./Letter.scss"

const Letter = (props) => {
    return  <img src={props.svg} alt="Letter" className={"Letter flicker " + props.className}/>
        // <object className={"Letter "+props.className} data={props.svg} type="image/svg+xml">Letter</object>
};

export default Letter;