import React from "react";
import Expenses from "./components/Expenses";

const expenses = [
  {title: "Dry Cleaning", amount: 35.99, date: new Date(2022, 10, 20)},
  {title: "Breakfast", amount: 5.75, date: new Date(2022, 10, 20)},
  {title: "Lunch", amount: 7.53, date: new Date(2021, 1, 15)},
  {title: "Light Bulbs", amount: 14.99, date: new Date(2020, 11, 7)}
]
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
