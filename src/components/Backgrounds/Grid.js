import React from 'react';
import "./Grid.scss"
const Grid = (props) => {
    let className = null;

    if (props.type === "grid") {
        className = "bg grid-bg"
    } else if (props.type === "dots-1") {
        className = "bg dots-1-bg"
    }
    return (
        <div className={className}/>
    );
};

export default Grid;