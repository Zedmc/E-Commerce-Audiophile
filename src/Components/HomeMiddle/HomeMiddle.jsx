import React, { useContext, useRef } from "react";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomeMiddle() {
	const { products } = useContext(Context);
	const navigate = useNavigate();
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start center", "center end"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	const navigateElsewhere = (name) => {
		const productClicked = products.find(
			(product) => product.name.toLowerCase() === name.toLowerCase()
		);

		if (productClicked) {
			navigate(`/${productClicked.category}/${productClicked.slug}`);
		}
	};

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			className="container-wrapper"
		>
			<motion.section className="first-container home-container">
				<div className="empty"></div>
				<div className="text-container-home">
					<h1 className="text-container-product">ZX9 SPEAKER</h1>
					<p className="text-container-description">
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p>
					<button
						className="orange-btn text-container-btn"
						onClick={() => navigateElsewhere("ZX9 SPEAKER")}
					>
						SEE PRODUCT
					</button>
				</div>
			</motion.section>
			<motion.section className="second-container home-container">
				<div className="container-box">
					<h3 className="container-title">ZX7 SPEAKER</h3>
					<button
						className="container-btn"
						onClick={() => navigateElsewhere("ZX7 SPEAKER")}
					>
						SEE PRODUCT
					</button>
				</div>
			</motion.section>
			<motion.section className="third-container home-container">
				<article className="first home-container">
				</article>
				<div className="second home-container">
					<h3 className="container-title">YX1 EARPHONES</h3>
					<button
						className="container-btn"
						onClick={() => navigateElsewhere("YX1 Wireless Earphones")}
					>
						SEE PRODUCT
					</button>
				</div>
			</motion.section>
		</motion.div>
	);
}
