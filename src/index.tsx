import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css"; // Import Tailwind styles
import App from "./App";

// Create root element
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
