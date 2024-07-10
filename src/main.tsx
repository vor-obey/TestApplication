import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "@radix-ui/themes/styles.css";
import "./index.css";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
