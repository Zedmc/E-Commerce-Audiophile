import React, { useContext } from "react";
import HomeMiddle from "../HomeMiddle/HomeMiddle";
import TripleProducts from "../TripleProducts/TripleProducts";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
	const { products } = useContext(Context);
	const navigate = useNavigate();

	const navigateElsewhere = (name) => {
		const productClicked = products.find(
			(product) => product.name.toLowerCase() === name.toLowerCase()
		);
		if (productClicked) {
			navigate(`/${productClicked.category}/${productClicked.slug}`);
		}
	};
	return (
		<>
			<section className="hero-section">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1.25 }}
					className="hero-section-description"
				>
					<h3 className="new-product">NEW PRODUCT</h3>
					<h1 className="product">XX99 MARK II HEADPHONES</h1>
					<p className="description">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<button
						onClick={() => navigateElsewhere("XX99 MARK II HEADPHONES")}
						className="orange-btn"
					>
						SEE PRODUCT
					</button>
				</motion.div>
			</section>

			<TripleProducts />
			<HomeMiddle />
		</>
	);
}
