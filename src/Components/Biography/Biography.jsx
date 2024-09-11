import React from "react";

export default function Biography() {
	return (
		<>
			<div className="biography-container">
				<section className="text-container">
					<h2 className="biography-title title">
						BRINGING YOU THE <span className="biography-span">BEST</span> AUDIO
						GEAR
					</h2>
					<p className="biography-description description">
						Located at the heart of New York City, Audiophile is the premier
						store for high end headphones, earphones, speakers, and audio
						accessories. We have a large showroom and luxury demonstration rooms
						available for you to browse and experience a wide range of our
						products. Stop by our store to meet some of the fantastic people who
						make Audiophile the best place to buy your portable audio equipment.
					</p>
				</section>

				<picture className="image-container">
					{/* <source
						media="(max-width: 480px)"
						srcSet="/images/shared/mobile/image-best-gear.jpg"
						alt="Biography Image"
					/>
					<source
						media="(max-width: 1024px)"
						srcSet="/images/shared/tablet/image-best-gear.jpg"
						alt="Biography Image"
					/>
					<img
						src={"/images/shared/desktop/image-best-gear.jpg"}
						alt="Biography Image"
					/> */}
				</picture>
			</div>
		</>
	);
}
