import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "@/components/ui/toaster"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <App />
      <Toaster />
    </Theme>
  </React.StrictMode>
);
