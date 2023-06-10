/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const MainSectionForm = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [messageSubmission, setMessageSubmission] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setValidEmail(validateEmail(inputValue));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail) {
      console.log("Email is valid");

      setMessageSubmission(
        <div className="main-section__form--messageSubmission">
          <img src="./src/assets/success.svg" alt="checked" id="success" />
          <h3 style={{ color: "##1F343E" }}>Your email is confirmed!</h3>
        </div>
      );
    } else {
      console.log("Email is invalid");

      setMessageSubmission(
        <div className="main-section__form--messageSubmission">
          <h4 style={{ color: "red" }}>Enter a valid email</h4>
        </div>
      );
    }
  };

  return (
    <form className="main-section__form" onSubmit={handleSubmit}>
      <div className="main-section__form--container">
        <h1 className="main-section__form--headline headline">
          REFER FRIENDS AND GET REWARDS
        </h1>

        <p className="main-section__form--text">
          Refer your friends to us and earn hotel booking vouchers. We'll give
          you 1 coin or each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>

        <div className="main-section__form--input-btn">
          {messageSubmission}

          <input
            type="text"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            className="main-section__form--input"
          />
          <button type="submit" className="main-section__form--btn">
            Get Referral Link
          </button>
        </div>

        <p className="main-section__form--limits">
          Limits on max rewards apply.
        </p>
      </div>
    </form>
  );
};
export default MainSectionForm;
