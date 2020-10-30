import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
describe("checkout form functions properly", () => {
	// beforeEach(() => { })
	afterEach(() => {
		cleanup();
	})
	test("form header renders", () => {
		render(<CheckoutForm />);

		const header = screen.getByText(/checkout form/i);
		expect(header).toBeInTheDocument();
	});

	test("form shows success message on submit with form details", () => {
		render(<CheckoutForm />);

		const firstNameInput = screen.getByLabelText(/first name/i);
		const lastNameInput = screen.getByLabelText(/last name/i);
		const addressInput = screen.getByLabelText(/address/i);
		const cityInput = screen.getByLabelText(/city/i);
		const stateInput = screen.getByLabelText(/state/i);
		const zipInput = screen.getByLabelText(/zip/i);
		const submitButton = screen.getByRole("button");
		const successMessage = screen.getByTestId("successMessage");

		//check that success message is NOT in document before submit
		expect(successMessage).not.toBeInTheDocument();

		expect(firstNameInput).toBeInTheDocument();
		expect(lastNameInput).toBeInTheDocument();
		expect(addressInput).toBeInTheDocument();
		expect(cityInput).toBeInTheDocument();
		expect(stateInput).toBeInTheDocument();
		expect(zipInput).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();

		fireEvent.change(firstNameInput, { target: { value: "First", } });
		fireEvent.change(lastNameInput, { target: { value: "Last", } });
		fireEvent.change(addressInput, { target: { value: "123 Street St", } });
		fireEvent.change(cityInput, { target: { value: "City", } });
		fireEvent.change(stateInput, { target: { value: "OH", } });
		fireEvent.change(zipInput, { target: { value: "12345" } });

		fireEvent.click(submitButton);

		expect(success).toBeInTheDocument();


	});
})
