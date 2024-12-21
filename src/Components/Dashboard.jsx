import React from "react";
import TransactionChart from "./TransactionChart";
import IncomeExpenseSummary from "./IncomeExpenseSummary";
import RecentHistory from "./RecentHistory";
import ExpenseAndSalaryHistory from "./ExpenseAndSalaryHistory";

const Dashboard = () => {
  return (
    <div className="bg-pink-100 w-full flex flex-col p-8  rounded-lg border-4 border-pink-200">
      <h1 className="text-2xl font-bold text-purple-800 mb-6">
        All Transactions
      </h1>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col w-2/3">
          <div>
            <TransactionChart />
            <IncomeExpenseSummary />
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-5">
          <RecentHistory />
          <ExpenseAndSalaryHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
