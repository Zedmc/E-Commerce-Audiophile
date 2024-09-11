import { createContext, useEffect, useState } from "react";
import productData from "../Data/data.json"; // Directly import the JSON file
import { SHIPPING_PRICE } from "../Constants/constants";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
	const localStorageCartItems = JSON.parse(
		localStorage.getItem("cart") || "[]"
	);
	const localStorageCartQuantity = JSON.parse(
		localStorage.getItem("quantity") || "{}"
	);

	// States
	const [products, setProducts] = useState(productData.products); // Set products from imported JSON
	const [modal, setModal] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [cartItems, setCartItems] = useState(localStorageCartItems);
	const [toggleNavbar, setToggleNavbar] = useState(false);
	const [temporaryQuantity, setTemporaryQuantity] = useState(1);
	const [quantity, setQuantity] = useState(localStorageCartQuantity);

	const addingToCart = (id) => {
		const itemSelected = products.find((item) => item.id === id);

		if (!itemSelected) {
			console.log(`Item with id ${id} not found.`);
			return;
		}

		setCartItems((prevCartItems) => {
			const cartItem = prevCartItems.find((item) => item.id === id);

			if (cartItem) {
				// If the cart already has the item, increase the quantity
				return prevCartItems?.map((item) =>
					item.id === id
						? { ...item, quantity: item.quantity + temporaryQuantity }
						: item
				);
			} else {
				// If the cart doesn't have the item, add it with quantity temporaryQuantity
				return [
					...prevCartItems,
					{ ...itemSelected, quantity: temporaryQuantity },
				];
			}
		});
		toast.success(`${itemSelected.name} x${temporaryQuantity} Added to Cart`, {
			position: "top-left",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Bounce,
		});
		setTemporaryQuantity(1);
	};

	const handleToggleNavbar = () => {
		setToggleNavbar(!toggleNavbar);
	};

	const removeAllFromCart = () => {
		setCartItems([]);
	};

	const handleQuantity = (action) => {
		if (action === "plus") {
			setTemporaryQuantity((q) => q + 1);
		} else if (action === "minus") {
			setTemporaryQuantity((q) => Math.max(1, q - 1));
		}
	};

	const modifyCartItemQuantity = (action, item) => {
		console.log(item);

		if (action === "plus") {
			item.quantity++;
			setQuantity(item.quantity);
		}

		if (action === "minus") {
			item.quantity--;
			setQuantity(item.quantity);
		}

		if (item.quantity === 0) {
			const updatedCartItems = cartItems.filter(
				(cartItem) => cartItem.id !== item.id
			);
			setCartItems(updatedCartItems);
		}
	};

	const toggleModal = () => {
		setModal(!modal);
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
		localStorage.setItem("quantity", JSON.stringify(quantity));
	}, [cartItems, quantity]);

	const totalPrice = cartItems.reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);

	const VAT_Price = Number((totalPrice * 0.2).toFixed(2));

	const formattedGrandPrice = (totalPrice + SHIPPING_PRICE + VAT_Price).toFixed(
		2
	);

	const grandPrice = Number(formattedGrandPrice);

	const contextValue = {
		handleQuantity,
		products,
		quantity,
		setQuantity,
		addingToCart,
		cartItems,
		setCartItems,
		removeAllFromCart,
		totalPrice,
		modal,
		setModal,
		toggleModal,
		modifyCartItemQuantity,
		temporaryQuantity,
		VAT_Price,
		grandPrice,
		isVisible,
		setIsVisible,
		toggleNavbar,
		setToggleNavbar,
		handleToggleNavbar,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
