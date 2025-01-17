import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import ExpnenseDetailsCombine from "../Components/ExpenseDetailsCombine";
import BudgetDetailsCombine from "../Components/BudgetDetailsCombine";
import IncomeDetailsCombine from "../Components/IncomeDetailsCombine";
import NavSideBar from "../Components/NavSideBar";

const PageManagement = () => {
  return (
    <div className="flex flex-row w-full p-8 gap-5 bg-pink-50">
      <NavSideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="expenses" element={<ExpnenseDetailsCombine />} />
        <Route path="budget" element={<BudgetDetailsCombine />} />
        <Route path="income" element={<IncomeDetailsCombine />} />
      </Routes>
    </div>
  );
};

export default PageManagement;
