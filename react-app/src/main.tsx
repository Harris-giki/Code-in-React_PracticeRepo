import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/cs/bootstrap.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  /* using react-dom to render this component tree inside an element with the ID of root*/
  /* StrictMode is another component in react that doesn't has any visual representation but its purpose is to identify potential problems*/
);
