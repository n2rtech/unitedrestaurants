import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';

const Paypalwallet = (props) => {
  const { amount, currency } = props;
  const paypalKey = "AYVHVHUfQuFd3o0L6bYflBZwU6KbCURHbh7ROB7Np68bsWwe27tqMhGglLoBLrNmjnc_SrKWHprxAnUK"

  console.log(props);

  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createOrder={(data, details) => { 
        return details.order.create({
          purchase_units: [{
            amount: {
              value: '0.01'
            }
          }]
      });
    }}
      onApprove={(data, details) => {
          // Capture the funds from the transaction
          return details.order.capture().then(function(details) {
            // Show a success message to your buyer
            alert('Transaction completed by ' + details.payer.name.given_name);

          });
        }
      }
      onError={(err) => {
        console.log('Error!', err);
      }}
      catchError={(err) => {
        console.log('Error!', err);
      }}
      onCancel={(err) => {
        console.log('The payment was cancelled!', err);
      }}
      options={{
        clientId: paypalKey,
        vault:true
      }}
      style={{
        shape: 'rect',
        color: 'blue',
        layout: 'vertical',
        label: 'subscribe',
      }}
    />
  );
}

export default Paypalwallet;