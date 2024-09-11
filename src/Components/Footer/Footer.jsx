import React, { useContext } from "react";
import NavbarSub from "../NavbarSub/NavbarSub";
import FacebookLogo from "/images/shared/desktop/icon-facebook.svg";
import TwitterLogo from "/images/shared/desktop/icon-twitter.svg";
import InstagramLogo from "/images/shared/desktop/icon-instagram.svg";

export default function Footer() {
	return (
		<>
			<footer className="columns">
				<section className="navbar-sub">
					<button
						className="to-top orange-btn"
						// onClick={window.scrollTo(0, 0)}
					></button>
					<NavbarSub />
				</section>
				<div className="bottom">
					<div className="bottom-left">
						<p className="description description-2">
							Audiophile is an all in one stop to fulfill your audio needs.
							We're a small team of music lovers and sound specialists who are
							devoted to helping you get the most out of personal audio. Come
							and visit our demo facility - we're open 7 days a week.
						</p>
						<h3 className="rights">Copyright 2021. All Rights Reserved</h3>
					</div>
					<div className="social-links">
						<img src={FacebookLogo} alt="Facebook Logo" />
						<img src={TwitterLogo} alt="Twitter Logo" />
						<img src={InstagramLogo} alt="Instagram logo" />
					</div>
				</div>
			</footer>
		</>
	);
}
