import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { InventoryContextProvider } from "./context/InventoryContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <InventoryContextProvider>
        <App />
      </InventoryContextProvider>
    </Router>
  </StrictMode>
);
