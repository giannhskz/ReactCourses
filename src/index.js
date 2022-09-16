import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import "tachyons";
import { robots } from "./components/robots";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App robots={robots} />);
