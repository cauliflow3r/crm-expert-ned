import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./provider/AuthContextProvider";
import { BrowserRouter } from "react-router-dom";
import { TicketsContextProvider } from "./provider/TicketsContextProvider";
import { UIContextProvider } from "./provider/UiContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UIContextProvider>
      <TicketsContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </TicketsContextProvider>
    </UIContextProvider>
  </BrowserRouter>
);
