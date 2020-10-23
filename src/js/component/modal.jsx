import React, { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

export const Modal = props => {
	const [opened, setOpened] = useState(true);
	const [player, setPlayer] = useState(0);
	const [turn, setTurn] = useState("Make your first move");
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

	return opened ? (
		<div>
			<h2>Choose your weapon</h2>
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
	) : (
		<div>
			<h3>{turn}</h3>
			<button
				type="button"
				onClick={() => {
					window.location.reload(false);
				}}>
				Restart
			</button>
			<div className="row">
				{posiblePositions.map((item, index) => (
					<div
						key={index}
						className="cell border col-4"
						onClick={() => {
							{
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
							}
						}}>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};
Modal.PropTypes = {
	textButton: PropTypes.string,
	classContent: PropTypes.string
};
