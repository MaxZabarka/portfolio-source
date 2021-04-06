import React from "react";
import { useSpring, animated } from "react-spring";

const MouseParallax = (props) => {
	let lastX = 0;
	let lastY = 0;
	const calc = (x, y) => [
		x - window.innerWidth / 2,
		y - window.innerHeight / 2,
	];

	const [springProps, setSpring] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 550, friction: 140 },
	}));
	// const divs = [];
	// const counter = 0;
	// console.log(props.children);
	// for (const item of props.children) {
	// 	console.log("amoutn", item.props.parallaxAmount);
	// const transitionFunction = (x, y) =>
	// 	`translate3d(${x / item.props.parallaxAmount}px,${
	// 		y / item.props.parallaxAmount + window.pageYOffset  * item.props.parallaxAmount *0.02
	// 	}px,0)`;

	// 	divs.push(
	// 		<animated.div
	// 			key={counter}
	// 			style={{
	// 				transform: springProps.xy.interpolate(transitionFunction),
	// 				position: "fixed",
	// 			}}
	// 		>
	// 			{item}
	// 		</animated.div>
	// 	);
	// }
	// console.log(divs);

	const transitionFunction = (x, y) =>
		`translate3d(${x / props.parallaxAmount}px,${
			y / props.parallaxAmount -
			(document.documentElement.scrollTop || document.body.scrollTop) *
				props.parallaxAmount * 0.08 * (props.mouseOnly ? 0 : 1)
		}px,0)`;

		window.addEventListener("mousemove", ({ clientX: x, clientY: y }) => {
			requestAnimationFrame(setSpring.bind(null, { xy: calc(x, y) }));
			// setSpring({ xy: calc(x, y) });
			lastX = x;
			lastY = y;
		});
	if (!props.mouseOnly) {

	window.addEventListener(
		"scroll",
		() => {
			console.log(
				document.documentElement.scrollTop || document.body.scrollTop
			);
			// setSpring({ xy: calc(lastX, lastY) });
			requestAnimationFrame(
				setSpring.bind(null, { xy: calc(lastX, lastY) })
			);
		},
		false
	);
}


	return (
		<div className="container">
			<animated.div
				style={{
					transform: springProps.xy.interpolate(transitionFunction),
				}}
			>
				{props.children}
			</animated.div>
		</div>
	);
};

export default MouseParallax;
