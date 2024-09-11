import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";

export default function Products({ category }) {
	const { products } = useContext(Context);

	const navigate = useNavigate();

	const filteredProducts = products?.filter(
		(product) => product.category.toLowerCase() === category.toLowerCase()
	);

	const sendToProductPage = (id) => {
		const productClicked = products.find((product) => product.id === id);
		if (productClicked) {
			navigate(`/${productClicked.category}/${productClicked.slug}`);
		}
	};

	return (
		<section className="product-wrapper">
			{filteredProducts && filteredProducts
				.sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
				?.map((product) => {
					return (
						<section className="product-section-container" key={product.id}>
							<section className="product-section">
								<div className="hero-section-description">
									<h3 className="new-product-section">
										{product.new ? "New Product" : ""}
									</h3>
									<h1 className="product-name">{product.name.toUpperCase()}</h1>
									<p className="product-description">{product.description}</p>
									<button
										onClick={() => sendToProductPage(product.id)}
										className="orange-btn"
									>
										SEE PRODUCT
									</button>
								</div>
							</section>
							{console.log(product)}
							<picture className="product-image-container">
								<source
									media="(max-width: 480px)"
									srcSet={product.categoryImage.mobile}
									alt="Biography Image"
								/>
								<source
									media="(max-width: 1024px)"
									srcSet={product.categoryImage.tablet}
									alt="Biography Image"
								/>
								<img
									src={product.categoryImage.desktop}
									alt="Biography Image"
								/>
							</picture>
						</section>
					);
				})}
		</section>
	);
}
