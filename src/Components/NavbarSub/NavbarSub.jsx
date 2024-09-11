import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavbarSub() {
	return (
		<>
			<Link className="logo" to="/">
				audiophile
			</Link>
			<div className="navlinks">
				<NavLink className="navlink" to="/">
					HOME
				</NavLink>
				<NavLink className="navlink" to="/headphones">
					HEADPHONES
				</NavLink>
				<NavLink className="navlink" to="/speakers">
					SPEAKERS
				</NavLink>
				<NavLink className="navlink" to="/earphones">
					EARPHONES
				</NavLink>
			</div>
		</>
	);
}
