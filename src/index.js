import React from "react";
import { createRoot } from "react-dom";
import AppView from "./view/app_view";
import "./css/app_view.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppView />);
