import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

export function PaymentPage() {
  return (
    <div className="flex">
      <div className=" flex w-1/3 h-screen bg-[#E1BCE8] justify-center flex-col text-center">
        <h1 className="font-bold">Safe&Sound</h1>
        <p>
          Encuentra a los mejores especialistas que te brindaran terapias
          psicologicas.
        </p>
      </div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#FBE8FE]">
        <h1>Información del pago</h1>
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
    </div>
  );
}
