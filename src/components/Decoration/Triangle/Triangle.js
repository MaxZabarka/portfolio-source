import React from "react";
import TrianglePNG from "./triangle7.png";
import "./Triangle.scss";
const Triangle = () => {
	return (
        <div className="Triangle flicker">
		    <img src={TrianglePNG} alt="Triangle" />
            </div>
	);
};

export default Triangle;
