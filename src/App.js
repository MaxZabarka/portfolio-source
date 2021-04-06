import React from "react";
import "./App.css";
import Crosshairs1 from "./components/Decoration/Crosshairs1/Crosshairs1";
import Crosshairs2 from "./components/Decoration/Crosshairs1/Crosshairs2";
import Name from "./components/Decoration/Name/Name";
import Grid from "./components/Backgrounds/Grid";
import MouseParallax from "./components/HOC/MouseParallax";
import Flicker from "./components/Decoration/Flicker/Flicker";
import Triangle from "./components/Decoration/Triangle/Triangle";
import Label from "./components/Decoration/Label/Label";
import Scroll from "./components/Decoration/Scroll/Scroll";

// TODO:
//Parallax scrolling
//Flicker effect
//Title animation (random letters)

function App() {
	return (
		<div className="App">
			<MouseParallax parallaxAmount={12}>
				<Grid type="grid" />
			</MouseParallax>
			<MouseParallax parallaxAmount={6}>
				<Grid type="dots-1" />
			</MouseParallax>

			<main className="Main">
				<MouseParallax mouseOnly parallaxAmount={13}>
					<Crosshairs1 />
				</MouseParallax>
				<MouseParallax mouseOnly parallaxAmount={15}>
					<Name />
				</MouseParallax>
				<MouseParallax mouseOnly parallaxAmount={15}>
					<Crosshairs2 />
				</MouseParallax>
				<MouseParallax mouseOnly parallaxAmount={10}>
					<Triangle />
				</MouseParallax>
				<MouseParallax mouseOnly parallaxAmount={13}>
					<Label />
				</MouseParallax>
				<MouseParallax mouseOnly parallaxAmount={13}>
					<Scroll />
				</MouseParallax>
			</main>
		</div>
	);
}

export default App;
