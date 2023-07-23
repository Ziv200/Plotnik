import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//overmind imports and config
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { config } from "./overmind";
const overmind = createOvermind(config, { devtools: true });
//
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider value={overmind}>
      <App />
    </Provider>
  </React.StrictMode>
);
