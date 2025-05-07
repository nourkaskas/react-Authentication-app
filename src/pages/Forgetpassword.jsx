import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Forgetpassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      return toast.error("Please enter a valid email.");
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("The password has been sent to your email!");
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
          Find your account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            className="w-full border p-2 rounded-2xl focus:border-green-500 focus:outline-none"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-customGreen3 text-white py-2 rounded-2xl"
            disabled={loading}
          >
            {loading ? "Sending..." : "Continue"}
          </button>
        </form>

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

export default Forgetpassword;
