import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async () => {
    navigate("/pagemanagement");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-pink-100 h-screen  flex items-center justify-center min-h-screen">
      <div className="flex flex-col w-1/3 items-center justify-center bg-pink-50 px-16 py-12 rounded-2xl shadow-lg border-4 border-pink-200">
        <p className="mb-3 text-4xl font-bold text-pink-800">Log In</p>
        <div className="mb-3 w-full">
          <label className="block text-lg font-medium mb-2 text-gray-700">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full px-6 py-3 text-lg border-2 border-pink-200 rounded-lg focus:ring focus:ring-pink-300 focus:ring-opacity-50 focus:border-pink-400 transition-shadow duration-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6 w-full">
          <label className="block text-lg font-medium mb-2 text-gray-700">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full px-6 py-3 text-lg border-2 border-pink-200 rounded-lg focus:ring focus:ring-pink-300 focus:ring-opacity-50 focus:border-pink-400 transition-shadow duration-300"
            placeholder="Enter your password"
          />
        </div>
        <div className="w-full flex flex-col items-center space-y-6">
          <button
            onClick={handleLoginClick}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-opacity-50"
          >
            Login
          </button>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-gray-600">
              Forgot Password?
              <span className="text-pink-600 cursor-pointer hover:underline ml-2">
                Click here
              </span>
            </p>
            <p className="text-lg font-medium text-gray-700">
              Don't have an account?
              <span
                onClick={handleSignUp}
                className="text-pink-600 cursor-pointer hover:underline ml-2"
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
