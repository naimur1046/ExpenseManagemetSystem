import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLogo from "../assets/DashboardLogo.png";
import ExpenseLogo from "../assets/ExpenseLogo.png";
import IncomeLogo from "../assets/IncomeLogo.png";
import TransactionLogo from "../assets/TransactionLogo.png";
import ManLogo from "../assets/ManLogo.png";

import SettingLogo from "../assets/SettingLogo.png";

const SideBar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
  };

  const handleClosePopup = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className="bg-pink-100 w-1/4 min-h-screen p-6 rounded-lg flex flex-col justify-between border-4 border-pink-200">
      <div>
        <div className="flex items-center space-x-4 mb-8">
          <img src={ManLogo} alt="User Logo" className="w-10 h-10" />
          <div>
            <h2 className="text-xl font-bold">Rumel</h2>
            <p className="text-sm text-gray-600">Your Money</p>
          </div>
        </div>
        <nav className="space-y-6">
          <Link
            to="/pagemanagement"
            className="flex items-center text-lg font-medium text-gray-700 space-x-2"
          >
            <img src={DashboardLogo} alt="Dashboard Logo" className="w-6 h-6" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/pagemanagement/expenses"
            className="flex items-center text-lg font-medium text-gray-700 space-x-2"
          >
            <img src={ExpenseLogo} alt="Expense Logo" className="w-6 h-6" />
            <span>Expenses</span>
          </Link>
          <Link
            to="/pagemanagement/budget"
            className="flex items-center text-lg font-medium text-gray-700 space-x-2"
          >
            <img src={TransactionLogo} alt="Budget Logo" className="w-6 h-6" />
            <span>Budget</span>
          </Link>
          <Link
            to="/pagemanagement/income"
            className="flex items-center text-lg font-medium text-gray-700 space-x-2"
          >
            <img src={IncomeLogo} alt="Income Logo" className="w-6 h-6" />
            <span>Income</span>
          </Link>
          <button
            onClick={handleSettingsClick}
            className="flex items-center text-lg font-medium text-gray-700 space-x-2"
          >
            <img src={SettingLogo} alt="Settings Logo" className="w-6 h-6" />
            <span>Settings</span>
          </button>
        </nav>
      </div>
      <div className="flex flex-row gap-2">
        <a
          href="#"
          className="flex items-center bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
        >
          <span className="material-icons">Sign In</span>
        </a>
        <a
          href="#"
          className="flex items-center bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
        >
          Sign Out
        </a>
      </div>
      {isSettingsOpen && <SettingsPopup onClose={handleClosePopup} />}
    </div>
  );
};

const SettingsPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex p-5 rounded-lg border-3 border-pink-400 items-center justify-center">
      <div className="bg-white m-4 p-8 rounded-lg shadow-lg w-2/3">
        <h2 className="text-2xl font-bold mb-6">Settings</h2>
        <form className="space-y-6">
          {/* User Profile Settings */}
          <div>
            <h3 className="text-lg font-semibold mb-2">User Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 p-2"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 p-2"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          {/* Appearance Settings */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Appearance</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="light-theme"
                  name="theme"
                  className="w-4 h-4 text-pink-500 border-gray-300 focus:ring-pink-400"
                />
                <label htmlFor="light-theme" className="ml-2 text-gray-700">
                  Light Theme
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="dark-theme"
                  name="theme"
                  className="w-4 h-4 text-pink-500 border-gray-300 focus:ring-pink-400"
                />
                <label htmlFor="dark-theme" className="ml-2 text-gray-700">
                  Dark Theme
                </label>
              </div>
            </div>
          </div>

          {/* Currency Settings */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Currency</h3>
            <label className="block text-gray-700 font-medium mb-1">
              Preferred Currency
            </label>
            <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 p-2">
              <option value="usd">Dollar (USD)</option>
              <option value="bdt">Taka (BDT)</option>
              <option value="eur">Euro (EUR)</option>
              <option value="inr">Rupee (INR)</option>
              <option value="gbp">Pound (GBP)</option>
              <option value="other">Other</option>
            </select>
          </div>
        </form>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
