import React, { useEffect , useState } from 'react';
import { PayPalButton } from "react-paypal-button-v2";


const paypalstandardmonthly = (props) => {
  const { amount, currency, createSubscription, onApprove, catchError,onError, onCancel} = props;
  const paypalKey = "AYVHVHUfQuFd3o0L6bYflBZwU6KbCURHbh7ROB7Np68bsWwe27tqMhGglLoBLrNmjnc_SrKWHprxAnUK"

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
        plan_id: 'P-8F429145L3966945YMGXPB3I'
      });
    }}
      onApprove={(data, details) => {
          // Capture the funds from the transaction
          return details.subscription.get().then(function(details) {
            // Show a success message to your buyer
            alert("Subscription completed" , data.subscriptionID);
            console.log("Subscriptions" , data.subscriptionID);

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