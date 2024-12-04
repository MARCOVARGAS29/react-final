import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/login/Login"; // El nuevo componente Login
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Asegúrate de que la ruta '/' apunta al componente Login */}
        <Route path="/" element={<Login />} />
        {/* La ruta '/home' debe cargar el componente App o el componente Home */}
        <Route path="/home" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
