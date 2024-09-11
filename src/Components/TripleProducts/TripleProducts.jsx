import React, { useContext } from "react";
import Headphone from "/images/shared/desktop/image-headphones.png";
import Speaker from "/images/shared/desktop/image-speakers.png";
// import Speaker from "../../../images/shared/desktop/image-speakers.png";
import WirelessEarphone from "/images/shared/desktop/image-earphones.png";
import LinkArrow from "/images/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Context } from "../../Context/Context";

const displayProducts = [Headphone, Speaker, WirelessEarphone];
const displayProductNames = ["Headphones", "Speakers", "Earphones"];
const displayProductLinks = ["headphones", "speakers", "earphones"];


export default function TripleProducts() {
	const { setToggleNavbar } = useContext(Context);
	const controls = useAnimation();
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0,
	});

	useEffect(() => {
		if (inView) {
			controls.start({ opacity: 1, y: 0 });
		}
	}, [controls, inView]);

	return (
		<section className="display-container-wrapper">
			{displayProducts?.map((product, index) => {
				return (
					<Link
						className="logo"
						to={`/${displayProductLinks[index]}`}
						key={index}
						onClick={() => setToggleNavbar(false)}
					>
						<motion.div
							ref={ref}
							initial={{ opacity: 0, y: 20 }}
							animate={controls}
							transition={{ duration: 0.75 }}
							className="display-container"
						>
							<img src={product} alt="" className="display-product" />
							<h3 className="display-product-name">
								{displayProductNames[index]}
							</h3>

							<div className="shop">
								Shop
								<img src={LinkArrow} alt="link arrow" />
							</div>
						</motion.div>
					</Link>
				);
			})}
		</section>
	);
}
