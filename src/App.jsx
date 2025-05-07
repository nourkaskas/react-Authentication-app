import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Forgetpassword from "./pages/Forgetpassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const userName = localStorage.getItem("userName");

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setIsAuthenticated(false);
    window.location.href = "/login"; // إجبار إعادة التوجيه
  };

  return (
    <Router>
      <div>
        {isAuthenticated && (
          <div className="relative bg-customGreen1 text-white p-4 flex justify-between items-center">
            <span className="text-lg">Welcome {userName}</span>
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-white text-center font-bold font-serif text-2xl italic">
              Yassmein AI
            </h1>
            <button
              onClick={handleLogout}
              className="bg-customGreen2 px-3 py-1 rounded"
            >
              <FiLogOut className="text-green-600 text-lg" />
            </button>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/forgetpassword" element={<Forgetpassword />} /> //1
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
