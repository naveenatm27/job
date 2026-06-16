import { useState } from "react";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(10000);
  const [amount, setAmount] = useState("");

  const deposit = () => {
    const value = Number(amount);
    if (value > 0) {
      setBalance(balance + value);
      setAmount("");
    }
  };

  const withdraw = () => {
    const value = Number(amount);

    if (value > 0 && value <= balance) {
      setBalance(balance - value);
      setAmount("");
    } else {
      alert("Insufficient Balance!");
    }
  };

  return (
    <div className="atm-container">
      <h1>ATM Management System</h1>

      <div className="card">
        <h2>Current Balance</h2>
        <h3>₹ {balance}</h3>

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="buttons">
          <button onClick={deposit}>Deposit</button>
          <button onClick={withdraw}>Withdraw</button>
        </div>
      </div>
    </div>
  );
}

export default App;