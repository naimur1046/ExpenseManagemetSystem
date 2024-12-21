import React from "react";
import Sidebar from "../Components/SideBar";
import IncomeDetailsCombine from "../Components/IncomeDetailsCombine";

const IncomePage = () => {
  return (
    <div className="flex gap-3 bg-pink-50 min-h-screen p-6 ">
      <IncomeDetailsCombine />
    </div>
  );
};

export default IncomePage;
