import React from "react";

const IncomeExpenseSummary = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mb-8">
      {/* First Row */}
      <div className="flex justify-center gap-4">
        <div
          id="TotalIncome"
          className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center w-80 h-30"
        >
          <p className="text-gray-600">Total Income</p>
          <p className="text-2xl font-bold text-green-600">$15200</p>
        </div>
        <div
          id="TotalExpenses"
          className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center w-80 h-30"
        >
          <p className="text-gray-600">Total Expenses</p>
          <p className="text-2xl font-bold text-red-600">$3920</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-center">
        <div
          id="TotalBalance"
          className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center w-80 h-30"
        >
          <p className="text-gray-600">Total Balance</p>
          <p className="text-2xl font-bold text-green-700">$11280</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseSummary;
