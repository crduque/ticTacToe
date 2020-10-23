import React, { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

export const Modal = props => {
	const [opened, setOpened] = useState(true);
	const [player, setPlayer] = useState(0);
	let posiblePositions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

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
						className="border col-4"
						onClick={() => {
							{
								if (player == 1) {
									//dibujas X
									setPlayer(2);
									console.log(player);
								} else if (player == 2) {
									//dibujas O
									setPlayer(1);
									console.log(player);
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
