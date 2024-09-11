import React, { useContext, useEffect, useState } from "react";
import Product from "../../Components/Product/Product.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../Context/Context.jsx";
import TripleProducts from "../../Components/TripleProducts/TripleProducts.jsx";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Loader from "../../Components/Loader/Loader.jsx";
import ErrorPage from "../Error/ErrorPage.jsx";

export default function ProductPage() {
	const navigate = useNavigate();
	const { products } = useContext(Context);
	const { slug } = useParams();
	const [filteredProduct, setFilteredProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const controls = useAnimation();
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	useEffect(() => {
		if (inView) {
			controls.start({ opacity: 1, y: 0 });
		}
	}, [controls, inView]);

	useEffect(() => {
		const fetchProduct = async () => {
			setLoading(true);
			try {
				const product = await products.find((item) => item.slug === slug);
				if (product) {
					setFilteredProduct(product);
				} else {
					setError(true);
				}
			} catch (err) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		if (slug && products) {
			fetchProduct();
		}
	}, [slug, products]);

	const navigateElsewhere = (location) => {
		const productClicked = products.find(
			(product) => `${product.category}/${product.slug}` === location
		);
		if (productClicked) {
			navigate(`/${productClicked.category}/${productClicked.slug}`);
		}
	};

	if (loading) return <Loader />;

	if (error || !filteredProduct)
		return <ErrorPage WarningMessage={"404 | Product Not Found"} />;

	return (
		<>
			<Product filteredProduct={filteredProduct} />

			<section className="feature-box">
				<section className="feature-box-left">
					<h2 className="feature-title">Features</h2>
					<p className="features description">{filteredProduct?.features}</p>
				</section>
				<section className="feature-box-right">
					<h2 className="feature-title">In the box</h2>
					{filteredProduct?.includedItems.map((item, index) => {
						return (
							<div className="included-items" key={index}>
								<h5 className="quantity-included">{item.quantity}x</h5>
								<h5 className="quantity description">{item.item}</h5>
							</div>
						);
					})}
				</section>
			</section>

			<section className="gallery">
				{Object.values(filteredProduct?.gallery)?.map((galleryItem, index) => {
					const classNames = [
						"gallery-first",
						"gallery-second",
						"gallery-third",
					];
					return (
						<img
							key={index}
							src={galleryItem.desktop}
							alt={`Gallery Image ${index + 1}`}
							className={classNames[index]}
						/>
					);
				})}
			</section>

			<section className="additional-container">
				<h2 className="title">YOU MAY ALSO LIKE</h2>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={controls}
					transition={{ duration: 1.25 }}
					className="additional-cards"
				>
					{filteredProduct?.others.map((otherItem, index) => {
						return (
							<picture className="additional-card" key={index}>
								<source
									media="(max-width: 480px)"
									srcSet={otherItem.image.mobile}
									alt="Other Product Image"
								/>
								<source
									media="(max-width: 1024px)"
									srcSet={otherItem.image.tablet}
									alt="Other Product Image"
								/>
								<img
									className="additional-image"
									src={otherItem.image.desktop}
									alt=""
								/>
								<div className="description-container">
									<h3 className="title">{otherItem.name}</h3>
									<button
										className="orange-btn"
										onClick={() => navigateElsewhere(otherItem.slug)}
									>
										SEE PRODUCT
									</button>
								</div>
							</picture>
						);
					})}
				</motion.div>
			</section>

			<TripleProducts />
		</>
	);
}
