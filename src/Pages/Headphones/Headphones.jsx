import React from "react";
import Banner from "../../Components/Banner/Banner.jsx";
import TripleProducts from "../../Components/TripleProducts/TripleProducts.jsx";
import Products from "../../Components/Products/Products.jsx";

export default function Headphones() {
	return (
		<>
			<Banner name="Headphones" />
			<Products category="Headphones" />
			<TripleProducts />
		</>
	);
}
