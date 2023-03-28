import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

export function PaymentPage() {
  const [paidFor, setPaidFor] = useState(false);

  const handleApprove = (orderId) => {
    //backend

    setPaidFor(true);
    if (paidFor) {
      
    }
  }
  
  return (
    <div className="flex">
      <div className="flex w-1/3 h-screen bg-[#E1BCE8] justify-center flex-col text-center">
        <h1 className="font-bold">Safe&Sound</h1>
        <p>
          Encuentra a los mejores especialistas que te brindarán terapias
          psicológicas.
        </p>
      </div>
      <div className="flex w-2/3 h-screen bg-[#FBE8FE] flex-col">
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#FBE8FE]">
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
            <h1 className="text-center text-2xl font-bold text-[#3E0576] mb-4">
              Información del pago
            </h1>
            <div className="flex justify-around">
              <div className="mb-4">
                <h1 className="mb-1">Nombre del paciente</h1>
                <h1 className="mb-1">Nombre del terapeuta</h1>
                <h1 className="mb-1">Plan seleccionado</h1>
                <h1 className="mb-1">Número de terapias</h1>
                <h1 className="mb-4">Monto del plan</h1>
                <h1 className="mb-4 font-bold">TOTAL</h1>
              </div>
              <div className="mb-4 font-bold">
                <h1 className="mb-1">_____</h1>
                <h1 className="mb-1">_____</h1>
                <h1 className="mb-1">_____</h1>
                <h1 className="mb-1">_____</h1>
                <h1 className="mb-4">_____</h1>
                <h1 className="mb-4">_____</h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className=" bg-[#3E0576] w-56 h-1"></div>
            </div>

            <PayPalButtons
              className="mt-8"
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
      </div>
    </div>
  );
}
