import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Biography from "./Components/Biography/Biography";

function App() {
	return (
		<>
			<ScrollRestoration/>
			<Navbar />
			<Outlet />
			<Biography />
			<Footer />
		</>
	);
}

export default App;
