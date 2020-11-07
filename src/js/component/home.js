import React from "react";
import { Game } from "./game.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<h1>Tic Tac Toe</h1>
			<Game />
		</div>
	);
}
