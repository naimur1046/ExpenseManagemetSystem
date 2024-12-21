import React from "react";
import Sidebar from "../Components/SideBar";
import ExpnenseDetailsCombine from "../Components/ExpenseDetailsCombine";

const ExpensePage = () => {
  return (
    <div className="flex gap-3 bg-pink-50 min-h-screen p-6 ">
      <ExpnenseDetailsCombine />
    </div>
  );
};

export default ExpensePage;
