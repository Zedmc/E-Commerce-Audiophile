import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Biography from "../../Components/Biography/Biography";
import Footer from "../../Components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

function HomePage() {
	return (
		<>
			<ScrollRestoration />
			<Navbar />
			<HeroSection />
			<Biography />
			<Footer />
		</>
	);
}

export default HomePage;
