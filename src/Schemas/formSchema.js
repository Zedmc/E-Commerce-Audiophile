import * as Yup from "yup";

export const formSchema = Yup.object().shape({
	name: Yup.string().required("Name required").min(2, "Enter at least 2 characters"),
	email: Yup.string().email("Invalid email address").required("Email required"),
	phone: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits long").required("Phone number required"),
	address: Yup.string().required("Address required"),
	zipcode: Yup.string().required("Zipcode required").matches(/^\d{6}$/, "Enter exactly 6 digits"),
	city: Yup.string().required("City required"),
	country: Yup.string().required("Country required"),
	payment: Yup.string().required("Payment method required"),
	eMoneyNumber: Yup.string()
		.when("payment", {
			is: "e-Money",
			then: (schema) =>
				schema
					.required("e-Money number required")
					.matches(/^\d{10}$/, "Enter exactly 10 digits"),
			otherwise: (schema) => schema.notRequired().nullable(),
		}),

	eMoneyPin: Yup.string()
		.when("payment", {
			is: "e-Money",
			then: (schema) =>
				schema
					.required("e-Money PIN required")
					.matches(/^\d{3}$/, "Enter exactly 3 digits"),
			otherwise: (schema) => schema.notRequired().nullable(),
		}),
});
