import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function CartModal() {
	const {
		modal,
		toggleModal,
		cartItems,
		removeAllFromCart,
		totalPrice,
		modifyCartItemQuantity,
	} = useContext(Context);

	useEffect(() => {
		if (modal) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [modal]);

	return (
		<>
			<section className={`modal-container ${modal ? "modal-visible" : ""}`}>
				<div
					className={`modal-overlay ${modal ? "modal-overlay-active" : ""}`}
					onClick={() => toggleModal()}
				></div>

				{cartItems.length > 0 ? (
					<section className="modal-content modal-slide-down">
						<div className="cart-modal-top">
							<h2 className="cart-quantity-title">CART ({cartItems.length})</h2>
							<h3
								className="remove-quantity"
								onClick={() => removeAllFromCart()}
							>
								Remove all
							</h3>
						</div>
						<div className="cart-modal-middle-container">
							{cartItems?.map((item, index) => {
								return (
									<div className="cart-modal-middle" key={index}>
										<section className="cart-modal-middle-left">
											<div className="cart-modal-image-conatiner">
												<img src={item.cartImage} alt={item.name} />
											</div>
											<div className="description-modal">
												<h3 className="shortname">{item.shortName}</h3>
												<h3 className="price">
													${item.price.toLocaleString()}
												</h3>
											</div>
										</section>
										<section className="cart-modal-middle-right">
											<div className="quantity-box quantity-box-padding">
												<button
													onClick={() => modifyCartItemQuantity("minus", item)}
												>
													-
												</button>
												<h3 className="item-quantity">{item.quantity}</h3>
												<button
													onClick={() => modifyCartItemQuantity("plus", item)}
												>
													+
												</button>
											</div>
										</section>
									</div>
								);
							})}
						</div>
						<div className="cart-modal-bottom">
							<div className="top-part">
								<h3 className="title">TOTAL</h3>
								<h3 className="price">${totalPrice.toLocaleString()}</h3>
							</div>
							<Link
								to={"/checkout"}
								className="orange-btn"
								onClick={() => toggleModal()}
							>
								CHECKOUT
							</Link>
						</div>
					</section>
				) : (
					<>
						<section className="modal-container">
							<div
								className="modal-overlay"
								onClick={() => toggleModal()}
							></div>
							<section className="modal-content modal-slide-down">
								<div className="cart-modal-top">
									<h2 className="cart-quantity-title">CART (0)</h2>
								</div>
								<div className="cart-modal-bottom">
									<h3 className="title">Your Cart is Empty...</h3>
									<img
										src="/images/cart/empty-cart.png"
										alt="Empty Cart Icon"
									/>
								</div>
							</section>
						</section>
					</>
				)}
			</section>
		</>
	);
}
