import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !formData.confirmPassword
    ) {
      return toast.error("Please fill in both email and password.");
    }
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }
    setLoading(true);

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    );
    setTimeout(() => {
      toast.success("Registered successfully!");
      navigate("/login");
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
      <div className="max-w-md mx-auto mt-10 p-10 rounded-3xl shadow-inner bg-customGreen/75">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500 font-serif">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="w-full border p-2 rounded-2xl focus:border-green-500 focus:outline-none"
            onChange={handleChange}
          />
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
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-2 rounded-2xl focus:border-green-500 focus:outline-none"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-customGreen3 text-white py-2 rounded-2xl"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        {/* رابط إلى صفحة تسجيل الدخول */}
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
