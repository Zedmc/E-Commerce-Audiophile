import React, { useContext, useEffect, useState } from "react";
import CartModal from "../CartModal/CartModal";
import NavbarSub from "../NavbarSub/NavbarSub";
import TripleProducts from "../TripleProducts/TripleProducts";
import cartIcon from "/images/shared/desktop/icon-cart.svg";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function Navbar() {
	const {
		cartItems,
		modal,
		toggleModal,
		isVisible,
		setIsVisible,
		toggleNavbar,
		handleToggleNavbar,
	} = useContext(Context);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 1024) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (toggleNavbar) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [toggleNavbar]);

	return (
		<>
			<header>
				<nav className="navbar">
					{isVisible && <NavbarSub />}
					{!isVisible && (
						<>
							{toggleNavbar && (
								<section className="hidden-navbar-container">
									<div
										className={
											toggleNavbar
												? "hidden-navbar-overlay hidden-navbar-overlay-active"
												: "hidden-navbar-overlay"
										}
										onClick={() => handleToggleNavbar()}
									></div>

									<section className="hidden-navbar">
										<TripleProducts />
									</section>
								</section>
							)}
							{toggleNavbar ? (
								<img
									className="hamburger-menu-icon"
									src="/images/shared/tablet/icon-close-menu.svg"
									alt="icon-close-menu"
									onClick={() => handleToggleNavbar()}
								/>
							) : (
								<img
									className="hamburger-menu-icon"
									src="/images/shared/tablet/icon-hamburger.svg"
									alt="Hamburger Menu Icon"
									onClick={() => handleToggleNavbar()}
								/>
							)}
							<Link className="logo" to="/">
								audiophile
							</Link>
						</>
					)}

					<img
						src={cartIcon}
						className="cart"
						alt="cart icon"
						onClick={toggleModal}
					/>
					{modal ? <CartModal /> : null}

					{cartItems.length > 0 ? (
						<div className="cart-modal-dot">{cartItems.length}</div>
					) : null}
				</nav>
			</header>
		</>
	);
}
