import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';

const paypalstandardquarterly = (props) => {
  const { amount, currency, createSubscription, onApprove, catchError,onError, onCancel} = props;
  const paypalKey = "AYVHVHUfQuFd3o0L6bYflBZwU6KbCURHbh7ROB7Np68bsWwe27tqMhGglLoBLrNmjnc_SrKWHprxAnUK"

  console.log(props);

  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => { 
        return details.subscription.create({
        plan_id: 'P-60508956GS002480AMGW3GVA'
      });
    }}
      onApprove={(data, details) => {
          // Capture the funds from the transaction
          return details.subscription.get().then(function(details) {
            // Show a success message to your buyer
            alert("Subscription completed");
            console.log("Subscriptions" , data.subscriptionID)

            // OPTIONAL: Call your server to save the subscription
            // return fetch("/paypal-subscription-complete", {
            //   method: "post",
            //   body: JSON.stringify({
            //     orderID: data.orderID,
            //     subscriptionID: data.subscriptionID
            //   })
            // });
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

export default paypalstandardquarterly;