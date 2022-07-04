import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { Provider } from "react-redux";
import { store } from './store/store';
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider, ToastContextProvider, UserContextProvider, CartListProvider, WishlistProvider } from "./context/index";
makeServer();



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductContextProvider>
      <WishlistProvider>
        <CartListProvider>
          <UserContextProvider>
            <ToastContextProvider>
            <Provider store={store}>
               <App />
            </Provider>
            </ToastContextProvider>
          </UserContextProvider>
        </CartListProvider>
      </WishlistProvider>
    </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
