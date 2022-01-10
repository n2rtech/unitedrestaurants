import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';

const Paypalwallet = (props) => {
  const { amount, currency } = props;
  const paypalKey = "AYVHVHUfQuFd3o0L6bYflBZwU6KbCURHbh7ROB7Np68bsWwe27tqMhGglLoBLrNmjnc_SrKWHprxAnUK"

  console.log(props.amount);

  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createOrder={(data, details) => { 
        return details.order.create({
          purchase_units: [{
            amount: {
              value: props.amount
            }
          }]
      });
    }}
      onApprove={(data, details) => {
          // Capture the funds from the transaction
          return details.order.capture().then(function(details) {
            // Show a success message to your buyer
            console.log('Details' , details);
            // console.log("Amount2",details.purchase_units[0].amount.value)
            // console.log("Amount1" , details.purchase_units.amount.value);
            // details.5TB18426XL472184P = id
            // details.intent = CAPTURE
            // details.status = COMPLETED
            const token = localStorage.getItem("token");
            const user_id = localStorage.getItem("id");
            const config = {
              headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
              };

              const bodyParameters = {
                user_id: user_id,
                transaction_id: details.id,
                comment: "Added to wallet",
                type: "deposit",
                amount: details.purchase_units[0].amount.value
              }

            return axios.post('/api/wallet', bodyParameters ,config )
            .then(response => toast.success('Transaction completed by ' + details.payer.name.given_name))
            .catch(error => console.log('Form submit error', error))


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