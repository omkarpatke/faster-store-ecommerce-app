import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./context/Product-context";
import { WishlistProvider } from "./context/wishlist-context";
import { CartListProvider } from "./context/cart-context";
import { UserContextProvider } from "./context/userAuth-context";
import { ToastContextProvider } from "./context/toastContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductContextProvider>
      <WishlistProvider>
        <CartListProvider>
          <UserContextProvider>
            <ToastContextProvider>
              <App />
            </ToastContextProvider>
          </UserContextProvider>
        </CartListProvider>
      </WishlistProvider>
    </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
