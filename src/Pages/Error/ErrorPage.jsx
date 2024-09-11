import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ErrorPage({WarningMessage}) {

	useEffect(() => {
			document.body.classList.add("no-scroll");
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, []);
	return (
		<>
			<article className="error-container">
				<div className="error-overlay"></div>

				<section className="error-content">
					<h2>{WarningMessage}</h2>
					<h3>Looks like you're lost...<br/>Head to home.</h3>
					<Link to="/">
						<button className="orange-btn">Back to home</button>
					</Link>
				</section>
			</article>
		</>
	);
}
