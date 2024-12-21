import React from "react";
import IncomeDetails from "./IncomeDetails";
import AddIncome from "./AddIncome";

const IncomeDetailsCombine = () => {
  return (
    <div className="bg-pink-100 w-full flex flex-col p-8  rounded-lg border-4 border-pink-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Incomes</h1>
      <div className="flex flex-col  bg-white p-6 pb-12 shadow-md rounded-lg">
        <div className="mb-6 w-full">
          <h2 className="text-2xl w-full  font-bold text-gray-800 text-center">
            Total Income: <span className="text-green-500">$16500</span>
          </h2>
        </div>
        <div className="flex flex-row justify-between gap-5 w-full">
          <div className="">
            <AddIncome />
          </div>
          <div>
            <IncomeDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeDetailsCombine;
