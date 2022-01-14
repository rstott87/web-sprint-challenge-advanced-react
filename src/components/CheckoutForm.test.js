import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows


test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);

    await waitFor(()=>{
        const successMessage = screen.queryByTestId("succesMessage");
        expect(successMessage).toBeInTheDocument();
    });
    

});
