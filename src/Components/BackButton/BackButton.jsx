import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<button onClick={goBack} className="back-button">
			Go back
		</button>
	);
};

export default BackButton;
