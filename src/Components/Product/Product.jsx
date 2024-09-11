import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { ToastContainer } from "react-toastify";
import BackButton from "../BackButton/BackButton";

export default function Product({ filteredProduct }) {
	const { handleQuantity, addingToCart, temporaryQuantity } =
		useContext(Context);

	return (
		<>
			<BackButton />
			<section className="purchase-section-container">
				{filteredProduct && (
					<picture className="purchase-image-container">
						<source
							media="(max-width: 480px)"
							srcSet={filteredProduct.image.mobile}
							alt="Biography Image"
						/>
						<source
							media="(max-width: 1024px)"
							srcSet={filteredProduct.image.tablet}
							alt="Biography Image"
						/>
						<img src={filteredProduct.image.desktop} alt="Biography Image" />
					</picture>
				)}
				<section className="purchase-section">
					<div className="purchase-section-description">
						{filteredProduct && (
							<>
								<h3 className="new-product-section">
									{filteredProduct.new ? "NEW PRODUCT" : null}
								</h3>
								<h1 className="purchase-name">
									{filteredProduct.name.toUpperCase()}
								</h1>
								<p className="product-description purchase-description">
									{filteredProduct.description}
								</p>
								<h3 className="product-price purchase-price">
									${filteredProduct.price.toLocaleString()}
								</h3>
								<div className="quantity-section">
									<div className="quantity-box">
										<button
											onClick={() => handleQuantity("minus", filteredProduct)}
										>
											-
										</button>
										<h3 className="item-quantity">{temporaryQuantity}</h3>
										<button
											onClick={() => handleQuantity("plus", filteredProduct)}
										>
											+
										</button>
									</div>
									<button
										className="orange-btn"
										onClick={() => addingToCart(filteredProduct.id)}
									>
										ADD TO CART
									</button>
									<ToastContainer
										position="bottom-right"
										autoClose={3000}
										hideProgressBar={false}
										newestOnTop={false}
										closeOnClick
										rtl={false}
										pauseOnFocusLoss
										draggable
										pauseOnHover
										theme="light"
										transition:Bounce
									/>
								</div>
							</>
						)}
					</div>
				</section>
			</section>
		</>
	);
}
