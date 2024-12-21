import React from "react";

const RecentHistory = () => {
  const history = [
    { id: 1, name: "Dentist Appointment", amount: -120 },
    { id: 2, name: "Traveling", amount: -3000 },
    { id: 3, name: "Rent", amount: -800 },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-purple-800 mb-4">
        Recent History
      </h2>
      <ul>
        {history.map((item) => (
          <li
            key={item.id}
            className="flex justify-between border-b py-2 text-sm"
          >
            <span>{item.name}</span>
            <span
              className={`font-semibold ${
                item.amount < 0 ? "text-red-600" : "text-green-600"
              }`}
            >
              ${item.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentHistory;
