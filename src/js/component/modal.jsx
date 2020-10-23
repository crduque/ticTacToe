import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./button.jsx";
import { useEffect } from "react";

export const Modal = props => {
	const [opened, setOpened] = useState(true);
	const [player, setPlayer] = useState(1);
	return opened ? (
		<div>
			<h2>Choose your weapon</h2>
			<button
				type="button"
				onClick={() => {
					setOpened(false);
					setPlayer(0);
				}}>
				X
			</button>
			<button
				type="button"
				onClick={() => {
					setOpened(false);
					setPlayer(0);
				}}>
				O
			</button>
		</div>
	) : (
		<button
			type="button"
			onClick={() => {
				window.location.reload(false);
			}}>
			Restart
		</button>
	);
};
