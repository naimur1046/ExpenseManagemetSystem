import React from "react";
import DeveloperLogo from "../assets/DeveloperLogo.png";
import GlobeLogo from "../assets/GlobeLogo.png";
import TeachingLogo from "../assets/TeachingLogo.png";
import YoutubeLogo from "../assets/YoutubeLogo.png";
import EducationCostLogo from "../assets/EducationCostLogo.png";
import ExtraCostLogo from "../assets/ExtraCostLogo.png";
import MedicineCostLogo from "../assets/MedicineCostLogo.png";
import RentCostLogo from "../assets/RentLogo.png";

const ExpenseDetails = () => {
  // Data array containing details for each income item
  const incomeData = [
    {
      name: "Education Cost",
      description: "This is the basic cost",
      amount: "$1500",
      date: "2024-12-01",
      logo: EducationCostLogo,
    },
    {
      name: "Medicine Cost",
      description: "I was ill for 10 days",
      amount: "$2000",
      date: "2024-12-05",
      logo: MedicineCostLogo,
    },
    {
      name: "Extra Cost",
      description: "There are some cost which is over calculation",
      amount: "$800",
      date: "2024-12-10",
      logo: ExtraCostLogo,
    },
    {
      name: "Rent Cost",
      description: "This is very simple cost",
      amount: "$3000",
      date: "2024-12-15",
      logo: RentCostLogo,
    },
  ];

  return (
    <div className="mr-12">
      <ul className="flex flex-col gap-4">
        {incomeData.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center gap-2 py-4 pl-2 pr-4  border-4 border-pink-200 bg-pink-50 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-4 mx-5">
              <img
                src={item.logo}
                alt={`${item.name} Logo`}
                className="w-10 h-10"
              />
              <div>
                <div>
                  <p className="font-bold text-gray-800">{item.name}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="text-gray-500 font-semibold">{item.amount}</p>
                </div>
              </div>
            </div>
            <div>
              <button className="col-span-2 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseDetails;
