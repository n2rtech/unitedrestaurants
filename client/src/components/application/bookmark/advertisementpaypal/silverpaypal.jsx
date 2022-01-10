import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';


const silverpaypal = (props) => {
  const { amount, currency , planid , interval , membership_id} = props;
  const paypalKey = "AdHb0ADMHUAWykWQD-w8MBR3kupSvY7AXDVzaROrrMBZgAT0H4bfhnlXrywvplNb2chG4LC1zAbD7x7t"

  console.log(props);
  

  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => { 
         console.log("Actions ", details);
        return details.subscription.create({
        plan_id: planid
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
                adds_membership_id: props.membership_id,
                membership_subscription_id: data.subscriptionID,
                interval: props.interval,
                price: props.amount,
                comment: details.status +'-'+data.orderID
              }

            return axios.put('/api/adds-membership/asign-to-user/'+`${user_id}`, bodyParameters ,config )
            .then(response => toast.success('Transaction Completed'))
            .catch(error => console.log('Form submit error', error))
          }).catch(function (error) {
            console.log(error);
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
        vault:true,
        intent: 'subscription'
      }}
      style={{
        shape: 'pill',
        color: 'blue',
        layout: 'vertical',
        label: 'subscribe'
      }}
    />
  );
}

export default silverpaypal;
