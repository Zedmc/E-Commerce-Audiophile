import React from "react";
import Banner from "../../Components/Banner/Banner.jsx";
import TripleProducts from "../../Components/TripleProducts/TripleProducts.jsx";
import Products from "../../Components/Products/Products.jsx";

export default function Speakers() {
	return (
		<>
			<Banner name="Speakers" />
			<Products category="Speakers" />
			<TripleProducts />
		</>
	);
}
