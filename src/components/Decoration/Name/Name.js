import React from "react";

// Photoshop generated SVG's
// @ts-ignore
import A from "./A.svg";
// @ts-ignore
import B from "./B.svg";
// @ts-ignore
import Z from "./Z.svg";
// @ts-ignore
import K from "./K.svg";
// @ts-ignore
import LineBreak from "./LineBreak.svg";
// @ts-ignore
import Underscore from "./Underscore.svg";

import "./CursorFlicker.scss";
import "./Name.scss";
import "./Glitch.scss";
import Letter from "./Letter";
import promiseTimeout from "../../../util/promiseTimeout"
import initFlicker from "../Flicker/Flicker";
const nameRef = React.createRef();
let elements = [];

function randomFromString(string) {
	return string[Math.floor(Math.random() * string.length + 0)];
}
class Name extends React.Component {
	render() {
		return (
			<div ref={nameRef} className="name">
				<span className="offset">
					<h1>M</h1>
					<Letter svg={A} />
					<h1>X</h1>
					<Letter svg={LineBreak} />
				</span>
				<br />
				<Letter svg={Z} />
				<h1>A</h1>
				<Letter svg={B} />
				<h1>A</h1>
				<h1>R</h1>
				<Letter svg={K} />
				<h1>A</h1>
				<Letter className="cursor" svg={Underscore} />
				<div className="glitch-wrapper">
					<h2 data-text="_DEVELOPER" className="glitch-text">
						_DEVELOPER
					</h2>
				</div>
			</div>
		);
	}
	componentDidMount() {
		this.animate(0);
		elements = [...nameRef.current.querySelectorAll("h1, img")];
		for (const element of elements) {
			element.style = "visibility: hidden";
		}
	}
	async animate(current) {

		console.log("Run");
		await promiseTimeout(30);

		let currentElement = elements[current];
		let savedElement = null;

		if (elements[current + 1]) {
			savedElement = currentElement.cloneNode(true);
			currentElement.style = "";
		} else {
			await promiseTimeout(70);
			elements[current].style = "";
			initFlicker();
			return;
		}

		let i = 0;
		while (i < 2) {
			const newLetter = document.createElement("h1");
			newLetter.innerText = randomFromString("!<>-_\\/[]{}—=+*^?#_>");
			newLetter.style = "transform: none";
			currentElement.parentNode.replaceChild(newLetter, currentElement);
			currentElement = newLetter;
			i++;
			await promiseTimeout(70);
		}

		savedElement.style = "";
		currentElement.parentNode.replaceChild(savedElement, currentElement);

		this.animate(current + 1);
	}
}

export default Name;
