import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import React from "react";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return toast.error("Please fill in both email and password.");
    }
    setLoading(true);
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (
        user &&
        user.email === formData.email &&
        user.password === formData.password
      ) {
        localStorage.setItem("token", "demo-token");
        localStorage.setItem("userName", user.name);
        toast.success("Login successful");

        if (onLogin) onLogin();
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallup.net/wp-content/uploads/2016/01/136027-simple_background-robot-digital_art-artificial_intelligence-technology-Hi-Tech.jpg')",
      }}
    >
      <div className="max-w-md w-full mt-10 p-10 rounded-3xl shadow-inner bg-customGreen/75">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500 font-serif">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded-2xl focus:border-green-500 focus:outline-none"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded-2xl focus:border-green-500 focus:outline-none"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-customGreen3 text-white py-2 rounded-2xl"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-500 underline">
            Register
          </Link>
        </p>
        <p className="mt-4 text-center">
          <Link to="/forgetpassword" className="text-green-500 underline">
            Forget password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
