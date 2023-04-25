import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";
import { AuthProvider } from "./providers/AuthProvider";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-left">
      <AuthProvider>
        <App />
      </AuthProvider>
    </ToastProvider>
  </StrictMode>,
  rootElement
);
