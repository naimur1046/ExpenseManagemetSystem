import React from "react";
import Sidebar from "../Components/SideBar";
import TransactionView from "../Components/AddBudget";
import BudgetDetailsCombine from "../Components/BudgetDetailsCombine";

const BudgetPage = () => {
  return (
    <div className="flex gap-3 bg-pink-50 min-h-screen p-6">
      <BudgetDetailsCombine />
    </div>
  );
};

export default BudgetPage;
