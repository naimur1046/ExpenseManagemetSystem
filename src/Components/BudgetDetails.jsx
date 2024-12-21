import React from "react";
import DeveloperLogo from "../assets/DeveloperLogo.png";
import GlobeLogo from "../assets/GlobeLogo.png";
import TeachingLogo from "../assets/TeachingLogo.png";
import YoutubeLogo from "../assets/YoutubeLogo.png";
import InstituteLogo from "../assets/InstituteLogo.png";
import RentLogo from "../assets/RentLogo.png";
import FoodLogo from "../assets/FoodLogo.png";

const BudgetDetails = () => {
  const incomeData = [
    {
      name: "Mess Rent",
      description: "This is my monthly cost",
      amount: "$1500",
      date: "2024-12-01",
      logo: RentLogo,
    },
    {
      name: "Food",
      description: "This is my regular cost",
      amount: "$2000",
      date: "2024-12-05",
      logo: FoodLogo,
    },
    {
      name: "Instutional Cost",
      description: "Earnings from video ads",
      amount: "$800",
      date: "2024-12-10",
      logo: InstituteLogo,
    },
    {
      name: "Developer Salary",
      description: "Monthly software developer salary",
      amount: "$3000",
      date: "2024-12-15",
      logo: DeveloperLogo,
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

export default BudgetDetails;
