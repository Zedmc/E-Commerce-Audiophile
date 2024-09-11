import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { SHIPPING_PRICE } from "../../Constants/constants";

function CartSummary({ handleSubmit }) {
	const { cartItems, totalPrice, grandPrice, VAT_Price } = useContext(Context);

	return (
		<div className="cart-modal-middle-container">
			<h2 className="form-title">Summary</h2>
			{cartItems?.map((item, index) => {
				return (
					<div className="cart-modal-middle" key={index}>
						<section className="cart-modal-middle-left">
							<div className="cart-modal-image-conatiner">
								<img src={item.cartImage} alt={item.name} />
							</div>
							<div className="description-modal">
								<h3 className="shortname">{item.shortName}</h3>
								<h3 className="price">${item.price.toLocaleString()}</h3>
							</div>
						</section>
						<section className="cart-modal-middle-right">
							<div className="quantity-summary">x {item.quantity}</div>
						</section>
					</div>
				);
			})}
			<section className="summary-prices">
				<div className="row">
					<h2>Total</h2>
					<h2>${totalPrice.toLocaleString()}</h2>
				</div>
				<div className="row">
					<h2>Shipping</h2>
					<h2>${SHIPPING_PRICE}</h2>
				</div>
				<div className="row">
					<h2>VAT (Included)</h2>
					<h2>${VAT_Price.toLocaleString()}</h2>
				</div>
				<div className="row">
					<h2>Grand Total</h2>
					<h2>${grandPrice.toLocaleString()}</h2>
				</div>
			</section>
			<button
				type="submit"
				className="orange-btn checkout-link"
				onClick={handleSubmit}
			>
				CHECKOUT
			</button>
		</div>
	);
}

export default CartSummary;
