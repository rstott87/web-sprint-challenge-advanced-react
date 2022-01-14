import React from "react";
import '@testing-library/jest-dom/extend-expect';
import MutationObserver from 'mutationobserver-shim';
import { getByRole, render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows


test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);
    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);

    await waitFor(()=>{
        const successMessage = screen.queryByText(/You have ordered some plants!/i);
        expect(successMessage).toBeInTheDocument();
    });    
});

