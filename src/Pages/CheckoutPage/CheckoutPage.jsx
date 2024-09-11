import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ThankYouModal from "../../Components/ThankYouModal/ThankYouModal";
import CartSummary from "../../Components/CartSummary/CartSummary";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { formSchema } from "../../Schemas/formSchema";
import BackButton from "../../Components/BackButton/BackButton";
// import { Bounce, toast, ToastContainer } from "react-toastify";

function CheckoutPage() {
	return (
		<>
			<Formik
				initialValues={{
					name: "",
					email: "",
					phone: "",
					address: "",
					zipcode: "",
					city: "",
					country: "",
					payment: "e-Money",
					eMoneyNumber: "",
					eMoneyPin: "",
				}}
				validationSchema={formSchema}
				onSubmit={(values) => {
					if (values.length > 0) {
						console.log("hello");
					}
					console.log(values);
					console.log(errors);
				}}
			>
				{({
					values,
					touched,
					isSubmitting,
					errors,
					handleSubmit,
					setFieldValue,
					setFieldTouched,
				}) => (
					<>
						{useEffect(() => {
							if (values.payment === "Cash on Delivery") {
								setFieldValue("eMoneyNumber", "", false);
								setFieldTouched("eMoneyNumber", false, false);
								setFieldValue("eMoneyPin", "", false);
								setFieldTouched("eMoneyPin", false, false);
							}

							// if (errors) {
							// 	const lengthErrors = Object.keys(errors).length
							// 	console.log(lengthErrors)

							// 	toast.error("Verify form for errors", {
							// 		position: "top-left",
							// 		autoClose: 3000,
							// 		hideProgressBar: false,
							// 		closeOnClick: true,
							// 		pauseOnHover: true,
							// 		draggable: true,
							// 		progress: undefined,
							// 		theme: "light",
							// 		transition: Bounce,
							// 		size: 110,
							// 	});
							// }
						}, [values.payment, setFieldValue, setFieldTouched])}
						<Navbar />
						{isSubmitting && <ThankYouModal />}
						<article className="checkout-container-wrapper">
							<BackButton />
							<main className="checkout-container">
								<Form className="left-column form">
									<h1 className="form-title">Checkout</h1>

									<section className="form-section">
										<h3>Your Details</h3>
										<div className="details-container">
											<div className="input-container">
												<label htmlFor="name">Name</label>
												<Field
													id="name"
													name="name"
													type="text"
													autoComplete="off"
													placeholder="Alex Terrier"
													className={`input ${
														errors.name && touched.name ? "input-error" : ""
													}`}
												/>
												<ErrorMessage
													name="name"
													component="span"
													className="input-error-message"
												/>
											</div>

											<div className="input-container">
												<label htmlFor="email">Email Address</label>
												<Field
													id="email"
													name="email"
													type="email"
													placeholder="name@email.com"
													className={`input ${
														errors.email && touched.email ? "input-error" : ""
													}`}
												/>
												<ErrorMessage
													name="email"
													component="span"
													className="input-error-message"
												/>
											</div>

											<div className="input-container">
												<label htmlFor="phone">Phone</label>
												<Field
													id="phone"
													name="phone"
													placeholder="123 456 7890"
													type="text"
													className={`input ${
														errors.phone && touched.phone ? "input-error" : ""
													}`}
												/>
												<ErrorMessage
													name="phone"
													component="span"
													className="input-error-message"
												/>
											</div>
										</div>
									</section>

									<section className="form-section">
										<h3>Shipping Info</h3>
										<div className="details-container">
											<div className="input-container span-2">
												<label htmlFor="address">Address</label>
												<Field
													id="address"
													name="address"
													placeholder="123 Main St"
													type="text"
													className={`input ${
														errors.address && touched.address
															? "input-error"
															: ""
													}`}
												/>
												<ErrorMessage
													name="address"
													component="span"
													className="input-error-message"
												/>
											</div>

											<div className="input-container">
												<label htmlFor="zipcode">Zipcode</label>
												<Field
													id="zipcode"
													name="zipcode"
													type="text"
													placeholder="10101"
													className={`input ${
														errors.zipcode && touched.zipcode
															? "input-error"
															: ""
													}`}
												/>
												<ErrorMessage
													name="zipcode"
													component="span"
													className="input-error-message"
												/>
											</div>

											<div className="input-container">
												<label htmlFor="city">City</label>
												<Field
													id="city"
													name="city"
													type="text"
													placeholder="Montréal"
													className={`input ${
														errors.city && touched.city ? "input-error" : ""
													}`}
												/>
												<ErrorMessage
													name="city"
													component="span"
													className="input-error-message"
												/>
											</div>

											<div className="input-container">
												<label htmlFor="country">Country</label>
												<Field
													id="country"
													name="country"
													type="text"
													className={`input ${
														errors.country && touched.country
															? "input-error"
															: ""
													}`}
													placeholder="Canada"
												/>
												<ErrorMessage
													name="country"
													component="span"
													className="input-error-message"
												/>
											</div>
										</div>
									</section>

									<section className="form-section">
										<h3>Payment Details</h3>
										{/* <p className="payment-method-title">red</p> */}
										<div
											role="group"
											aria-labelledby="my-radio-group"
											className="details-container"
										>
											<div className="input-container payment-method-title">
												Payment Method
											</div>
											<div className="input-container radio">
												<label
													htmlFor="radio-1"
													className={`radio-label ${
														errors.payment && touched.payment
															? "input-error"
															: ""
													}`}
												>
													<Field
														id="radio-1"
														type="radio"
														name="payment"
														value="e-Money"
														className={
															errors.payment && touched.payment
																? "input-error"
																: ""
														}
													/>
													<h2>e-Money</h2>
												</label>
												<ErrorMessage
													name="payment"
													component="span"
													className="input-error-message"
												/>
											</div>

											{/* <div className="input-container">red</div> */}
											<div className="input-container radio">
												<label
													htmlFor="radio-2"
													className={`radio-label ${
														errors.payment && touched.payment
															? "input-error"
															: ""
													}`}
												>
													<Field
														id="radio-2"
														type="radio"
														name="payment"
														value="Cash on Delivery"
														className={
															errors.payment && touched.payment
																? "input-error"
																: ""
														}
													/>
													<h2>Cash on Delivery</h2>
												</label>
												<ErrorMessage
													name="payment"
													component="span"
													className="input-error-message"
												/>
											</div>
											{values.payment === "Cash on Delivery" ? (
												<div className="cash-on-demand-box">
													<img
														src={
															"/images/checkout/icon-cash-on-delivery.svg"
														}
														alt=""
													/>
													<p className="description">
														The 'Cash on Delivery' option enables you to pay in
														cash when our delivery courier arrives at your
														residence. Just make sure your address is correct so
														that your order will not be cancelled.
													</p>
												</div>
											) : (
												<div className="alternate-box">
													<div className="input-container">
														<label htmlFor="eMoneyNumber">e-Money number</label>
														<Field
															id="eMoneyNumber"
															name="eMoneyNumber"
															type="text"
															placeholder="e.g. 1234567890"
															className={`input ${
																errors.eMoneyNumber && touched.eMoneyNumber
																	? "input-error"
																	: ""
															}`}
														/>
														<ErrorMessage
															name="eMoneyNumber"
															component="span"
															className="input-error-message"
														/>
													</div>

													<div className="input-container">
														<label htmlFor="eMoneyPin">e-Money Pin</label>
														<Field
															id="eMoneyPin"
															name="eMoneyPin"
															type="text"
															placeholder="123"
															className={`input ${
																errors.eMoneyPin && touched.eMoneyPin
																	? "input-error"
																	: ""
															}`}
														/>
														<ErrorMessage
															name="eMoneyPin"
															component="span"
															className="input-error-message"
														/>
													</div>
												</div>
											)}
										</div>
									</section>
								</Form>
								<article className="right-column">
									<CartSummary handleSubmit={handleSubmit} />
								</article>
							</main>
						</article>
					</>
				)}
			</Formik>
			<Footer />
			{/* <ToastContainer /> */}
		</>
	);
}

export default CheckoutPage;
