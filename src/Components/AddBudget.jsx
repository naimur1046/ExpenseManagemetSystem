import React from "react";

const AddBudget = () => {
  return (
    <div className="ml-12">
      <form className="grid grid-cols-2 gap-4 mb-8 ">
        <input
          type="text"
          placeholder="Salary Title"
          className="col-span-2 p-2 border  border-gray-300 rounded-md focus:outline-pink-500"
        />
        <input
          type="number"
          placeholder="Salary Amount"
          className="col-span-2 p-2 border border-gray-300 rounded-md focus:outline-pink-500"
        />
        <input
          type="date"
          className="col-span-1 p-2 border border-gray-300 rounded-md focus:outline-pink-500"
        />
        <select className="col-span-1 p-2 border border-gray-300 rounded-md focus:outline-pink-500">
          <option>Select Option</option>
          <option>Freelance</option>
          <option>Shopify</option>
          <option>YouTube Adsense</option>
          <option>Developer Salary</option>
        </select>
        <input
          type="text"
          placeholder="Add a Reference"
          className="col-span-2 p-2 border border-gray-300 rounded-md focus:outline-pink-500"
        />
        <button className="col-span-2 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition">
          + Add Budget
        </button>
      </form>
    </div>
  );
};

export default AddBudget;
