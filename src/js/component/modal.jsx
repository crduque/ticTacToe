import React, { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

export const Modal = props => {
	const [opened, setOpened] = useState(true);
	const [player, setPlayer] = useState(0);
	const [turn, setTurn] = useState("Make your first move");
	const [win, setWin] = useState(false);
	const [posiblePositions, setPosiblePositions] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	]);
	const winPositions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	// const endGame = array => {
	// 	for (let index = 0; index < winPositions.length; index++) {
	// 		for (let indexWin = 0; indexWin < 3; indexWin++) {
	// 			if (
	// 				array[winPositions][index][0].includes("X") &&
	// 				array[winPositions][index][1].includes("X") &&
	// 				array[winPositions][index][2].includes("X")
	// 			) {
	// 				console.log("WIN");
	// 			}
	// 		}
	// 	}
	// };

	return opened ? (
		<div className="choosingDiv">
			<h2>Choose who plays first</h2>
			<div>
				<button
					type="button"
					onClick={() => {
						setOpened(false);
						setPlayer(1);
					}}>
					X
				</button>
				<button
					type="button"
					onClick={() => {
						setOpened(false);
						setPlayer(2);
					}}>
					O
				</button>
			</div>
		</div>
	) : (
		<div className="playingDiv">
			<h3>{turn}</h3>
			<div className="row">
				{posiblePositions.map((item, index) => (
					<div
						key={index}
						className="cell col-4"
						onClick={() => {
							if (item == "") {
								if (player == 1) {
									posiblePositions.splice(index, 1, "X");
									setPlayer(2);
									setTurn("Turn Player O");
								} else {
									posiblePositions.splice(index, 1, "O");
									setPlayer(1);
									setTurn("Turn Player X");
								}
							}
							// console.log(posiblePositions);
						}}>
						{item}
					</div>
				))}
			</div>
			<div>
				<button
					type="button"
					onClick={() => {
						window.location.reload(false);
					}}>
					Restart
				</button>
			</div>
		</div>
	);
};
