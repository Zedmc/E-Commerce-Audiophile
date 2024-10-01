import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./Context/Context.jsx";

import ProductPage from "./Pages/ProductPage/ProductPage.jsx";
import Headphones from "./Pages/Headphones/Headphones.jsx";
import Speakers from "./Pages/Speakers/Speakers.jsx";
import Earphones from "./Pages/Earphones/Earphones.jsx";
import ErrorPage from "./Pages/Error/ErrorPage.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage.jsx";
import "react-toastify/dist/ReactToastify.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoutes from "./Protected Routes/ProtectedRoutes.jsx";

// const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		index: true,
	},
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "headphones",
				element: <Headphones />,
			},
			{
				path: "headphones/:slug",
				element: <ProductPage />,
			},
			{
				path: "speakers",
				element: <Speakers />,
			},
			{
				path: "speakers/:slug",
				element: <ProductPage />,
			},
			{
				path: "earphones",
				element: <Earphones />,
			},
			{
				path: "earphones/:slug",
				element: <ProductPage />,
			},
		],
	},
	{
		element: <ProtectedRoutes />,
		children: [
			{
				path: "checkout",
				element: <CheckoutPage />,
			},
		],
	},
	{
		path: "*",
		element: <ErrorPage WarningMessage={"404 | Page Not Found"} />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <QueryClientProvider client={queryClient}> */}
		<ContextProvider>
			<RouterProvider router={router} />
		</ContextProvider>
		{/* </QueryClientProvider> */}
	</React.StrictMode>
);
