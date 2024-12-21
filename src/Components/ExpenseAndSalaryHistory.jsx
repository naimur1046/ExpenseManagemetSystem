import React from "react";

const ExpenseAndSalaryHistory = () => {
  return (
    <div className="bg-gray-50 p-8 flex flex-col space-y-6 rounded-md shadow-md w-full mx-auto">
      {/* Salary Section */}
      <div className="text-center">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span>Min</span>
          <span className="text-purple-800 font-semibold">Salary</span>
          <span>Max</span>
        </div>
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <span className="text-gray-700 text-lg">$1200</span>
          <span className="text-gray-700 text-lg">$8000</span>
        </div>
      </div>

      {/* Expense Section */}
      <div className="text-center">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span>Min</span>
          <span className="text-purple-800 font-semibold">Expense</span>
          <span>Max</span>
        </div>
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <span className="text-gray-700 text-lg">$120</span>
          <span className="text-gray-700 text-lg">$3000</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseAndSalaryHistory;
