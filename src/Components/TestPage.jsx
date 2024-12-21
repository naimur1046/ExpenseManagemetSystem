import React from "react";

export const TestPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="flex justify-between items-center w-full px-8 py-4">
        <h1 className="text-lg font-bold text-cyan-600 flex items-center space-x-2">
          <span className="material-icons text-cyan-600">home</span>
          <span>HomeBudget</span>
        </h1>
        <button className="bg-red-100 text-red-600 px-4 py-2 rounded-md">
          Delete
        </button>
      </header>

      <main className="text-center">
        <h1 className="text-4xl font-bold">
          Welcome back, <span className="text-cyan-600">Chris</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Personal budgeting is the secret to financial freedom.
        </p>
        <p className="text-gray-600">Create a budget to get started!</p>

        <div className="mt-8 p-8 border-2 border-dashed border-gray-300 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Create Budget</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="budgetName"
                className="block text-left text-gray-600"
              >
                Budget Name
              </label>
              <input
                type="text"
                id="budgetName"
                placeholder="e.g., Groceries"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-300"
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-left text-gray-600">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                placeholder="$350"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-300"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-600 text-white px-6 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-cyan-700"
            >
              <span>Create Budget</span>
              <span className="material-icons">arrow_forward</span>
            </button>
          </form>
        </div>
      </main>

      <footer className="mt-auto w-full flex justify-center items-center px-4">
        <div className="bg-cyan-600 w-full h-16 rounded-t-full"></div>
      </footer>
    </div>
  );
};
