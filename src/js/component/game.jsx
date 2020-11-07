import React, { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Alert } from "bootstrap";
import { Modal, Button } from "react-bootstrap";

export const Game = props => {
	const [opened, setOpened] = useState(true);
	const [player, setPlayer] = useState(0);
	const [turn, setTurn] = useState("Make your first move");
	const [winnerPlayer, setWinnerPlayer] = useState(null);
	const [posiblePositions, setPosiblePositions] = useState([
		"", //0
		"", //1
		"", //2
		"", //3
		"", //4
		"", //5
		"", //6
		"", //7
		"" //8
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

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// const modal = winnerPlayer => {
	// 	return (
	// 		<>
	// 			<Modal show={show} onHide={handleClose}>
	// 				<Modal.Header closeButton>
	// 					<Modal.Title>Modal heading</Modal.Title>
	// 				</Modal.Header>
	// 				<Modal.Body>{winnerPlayer} wins!</Modal.Body>
	// 				<Modal.Footer>
	// 					<Button variant="secondary" onClick={handleClose}>
	// 						Close
	// 					</Button>
	// 					<Button
	// 						variant="primary"
	// 						// onClick={window.location.reload(false)}
	// 					>
	// 						Restart
	// 					</Button>
	// 				</Modal.Footer>
	// 			</Modal>
	// 		</>
	// 	);
	// };
	const endGame = array => {
		for (let index = 0; index < winPositions.length; index++) {
			for (let indexWin = 0; indexWin < 3; indexWin++) {
				if (
					array[winPositions[index][0]].includes("X") &&
					array[winPositions[index][1]].includes("X") &&
					array[winPositions[index][2]].includes("X")
				) {
					console.log("X WIN");
					handleShow();
					setWinnerPlayer("X");
				}
				if (
					array[winPositions[index][0]].includes("O") &&
					array[winPositions[index][1]].includes("O") &&
					array[winPositions[index][2]].includes("O")
				) {
					console.log("O WIN");
					handleShow();
					setWinnerPlayer("O");
				}
			}
		}
	};

	return opened ? (
		<div className="choosingDiv">
			<h2>Choose who plays first</h2>
			<div>
				<button
					type="button"
					onClick={() => {
						setPlayer(1);
						setOpened(false);
					}}>
					X
				</button>
				<button
					type="button"
					onClick={() => {
						setPlayer(2);
						setOpened(false);
					}}>
					O
				</button>
			</div>
		</div>
	) : (
		<div className="playingDiv">
			<>
				<Modal show={show}>
					<Modal.Body>{winnerPlayer} wins!</Modal.Body>
					<Modal.Footer>
						<button
							type="button"
							onClick={() => {
								window.location.reload(false);
							}}>
							Restart
						</button>
					</Modal.Footer>
				</Modal>
			</>
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
									endGame(posiblePositions);
								} else {
									posiblePositions.splice(index, 1, "O");
									setPlayer(1);
									setTurn("Turn Player X");
									endGame(posiblePositions);
								}
							}
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
					Reset
				</button>
			</div>
		</div>
	);
};
