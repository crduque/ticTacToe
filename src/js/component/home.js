import React from "react";
import { Modal } from "./modal.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="">
			<h1>TicTacToe in React.js</h1>
			<Modal />
		</div>
	);
}
