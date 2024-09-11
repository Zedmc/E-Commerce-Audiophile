import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { Context } from "../Context/Context";

const ProtectedRoutes = () => {
	const { cartItems } = useContext(Context);
	return cartItems.length > 0 ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
