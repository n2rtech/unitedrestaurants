import React, { useEffect , useState } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import axios from 'axios';
import {toast} from 'react-toastify';

const paypalstandardmonthly = (props) => {
  const { amount, currency, createSubscription, onApprove, catchError,onError, onCancel} = props;
  const paypalKey = "AdHb0ADMHUAWykWQD-w8MBR3kupSvY7AXDVzaROrrMBZgAT0H4bfhnlXrywvplNb2chG4LC1zAbD7x7t"

  console.log(props);

//   const [loadState, setLoadState] = useState({ loading: false, loaded: false });

//   useEffect(() => {
//     if (!loadState.loading && !loadState.loaded) {
//       setLoadState({ loading: true, loaded: false });
//       const script = document.createElement("script");
//       script.src = `https://www.paypal.com/sdk/js?client-id=AXPEKGBNnTg-16vrrVO_KBxYrNr3x7GUl9zVlppx4OYPfRAxCIvMfKNewkiTXCnptPuIZDxJVkslkyIX&vault=true&intent=subscription&currency=USD`;
//       script.addEventListener("load", () =>
//         setLoadState({ loading: false, loaded: true })
//       );
//       document.body.appendChild(script);
//       console.log("append script");
//     }
// // ...
//   }, [loadState,...]);

  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => { 
        return details.subscription.create({
        plan_id: 'P-7BG4286373878825UMG6KZHY'
      });
    }}
      onApprove={(data, details) => {
          // Capture the funds from the transaction
          return details.subscription.get().then(function(details) {
            // Show a success message to your buyer
            console.log('Data' , data);
            console.log('Details' , details);

            const token = localStorage.getItem("token");
            const user_id = localStorage.getItem("id");
            const config = {
              headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
              };

              const bodyParameters = {
                membership_id: props.membership_id,
                membership_subscription_id: '',
                interval: props.interval,
                price: props.amount,
                comment: 'Subscription Added'
              }

            return axios.post('/api/vendor-membership/asign-to-user/'+`${user_id}`, bodyParameters ,config )
            .then(response => toast.success('Transaction completed by ' + details.payer.name.given_name))
            .catch(error => console.log('Form submit error', error))

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

export default paypalstandardmonthly;
