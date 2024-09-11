import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import checkmark from "/images/shared/desktop/icon-check-mark.svg";
import { Link } from "react-router-dom";

function ThankYouModal() {
	useEffect(() => {
		document.body.classList.add("no-scroll");
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, []);

	const reset = () => {
		setCartItems([]);
	};

	const { cartItems, setCartItems, grandPrice } = useContext(Context);
	return (
		<>
			<article className="order-container">
				<div className="order-overlay"></div>

				<section className="order-content">
					<img src={checkmark} alt="" />
					<h2 className="order-title">
						Thank you <br />
						for your order
					</h2>
					<p className="order-description">
						You will receive an email conformation shortly.
					</p>

					<div className="order-box">
						<section className="order-box-left">
							<div className="order-box-left-wrapper">
								{cartItems?.map((item, index) => {
									return (
										<div className="order-box-left-row" key={index}>
											<div className="order-box-left-image-container">
												<img src={item.cartImage} alt={item.name} />
											</div>
											<div className="order-box-left-description">
												<h3 className="shortname">{item.shortName}</h3>
												<h3 className="price">
													${item.price.toLocaleString()}
												</h3>
											</div>
											<div className="order-box-quantity">x{item.quantity}</div>
										</div>
									);
								})}
							</div>
						</section>

						<section className="order-box-right">
							<h3>Grand Total</h3>
							<h3>${grandPrice.toLocaleString()}</h3>
						</section>
					</div>
					<Link to="/" className="orange-btn" onClick={() => reset()}>
						Back To Home
					</Link>
				</section>
			</article>
		</>
	);
}

export default ThankYouModal;
