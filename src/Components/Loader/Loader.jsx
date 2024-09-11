import React from "react";
import "./Loader.css"; // Make sure to create this CSS file with the styles below

const Loader = () => {
	return (
		<div className="loader-overlay">
			<div className="loader-spinner"></div>
		</div>
	);
};

export default Loader;
