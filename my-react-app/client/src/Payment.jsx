import React from "react";
import ReactDOM from "react-dom/client";
import Pay from "./Pay.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Pay 
    cart={[
              {
                name: 'Coconut',
                unitAmount: {
                  currencyCode: 'USD',
                  value: '16.00',
                },
                quantity: '1',
               
              },
              {
                name: 'Guava',
                unitAmount: {
                  currencyCode: 'USD',
                  value: '16.00',
                },
                quantity: '1',
                
              },
              {
                name: 'Pineapple',
                unitAmount: {
                  currencyCode: 'USD',
                  value: '16.00',
                },
                quantity: '1',
                
              }
            ]}
      
    />
    
  </React.StrictMode>
);
