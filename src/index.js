import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./provider/AuthContextProvider";
import { BrowserRouter } from "react-router-dom";
import { TicketsContextProvider } from "./provider/TicketsContextProvider";
import { UIContextProvider } from "./provider/UiContextProvider";
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <UIContextProvider>
        <TicketsContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </TicketsContextProvider>
      </UIContextProvider>
    </BrowserRouter>
  </Provider>
);
