import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

export function PaymentPage() {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "13.99",
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const details = await actions.order.capture();
        const name = details.payer.name.given_name;
        alert("Transaction completed by " + name);
      }}
    />
  );
}
