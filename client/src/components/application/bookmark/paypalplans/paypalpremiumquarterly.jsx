import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';

const paypalpremiumquarterly = (props) => {
  const { amount, currency, createSubscription, onApprove, catchError,onError, onCancel} = props;
  const paypalKey = "AXPEKGBNnTg-16vrrVO_KBxYrNr3x7GUl9zVlppx4OYPfRAxCIvMfKNewkiTXCnptPuIZDxJVkslkyIX"

  console.log(props);

  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => { 
        return details.subscription.create({
        plan_id: 'P-14Y17157AY5485331MG6XP4I'
      });
    }}
      onApprove={(data, details) => {
          // Capture the funds from the transaction
          return details.subscription.get().then(function(details) {
            console.log('Data' , data);
            console.log('Details' , details);

            const token = localStorage.getItem("token");
            const user_id = localStorage.getItem("id");
            const config = {
              headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
              };

              const bodyParameters = {
                membership_id: props.membership_id,
                membership_subscription_id: data.subscriptionID,
                interval: props.interval,
                price: props.amount,
                comment: details.status +'-'+data.orderID
              }

            return axios.put('/api/vendor-membership/asign-to-user/'+`${user_id}`, bodyParameters ,config )
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

export default paypalpremiumquarterly;
