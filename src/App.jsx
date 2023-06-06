import { useState } from "react";
import "./App.scss";

function App() {
  return (
    <main className="main-section">
      <form className="main-section__form">
        <h1>REFERRAL FRIENDS AND GET REWARDS</h1>
        <p>
          Refer your friends to us and earn hotel booking vouchers. We'll give
          you 1 coin or each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>
        <input type="text" placeholder="Enter your email address" />
        <button>Get Referral Link</button>
        <p>Limits on max rewards apply</p>
      </form>
    </main>
  );
}

export default App;
