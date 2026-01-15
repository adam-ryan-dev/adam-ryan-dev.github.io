import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./home/Home";
import Bar from "./Bar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Bar />
    <Home />
  </StrictMode>,
);
