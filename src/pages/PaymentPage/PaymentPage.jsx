import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

export function PaymentPage() {
  return (
    <div className="flex">
      <h1>Información del pago</h1>
      <div className=" flex w-1/3 h-screen bg-[#E1BCE8] justify-center flex-col text-center">
        <h1 className="font-bold">Safe&Sound</h1>
        <p>
          Encuentra a los mejores especialistas que te brindaran terapias
          psicologicas.
        </p>
      </div>
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
    </div>
  );
}
