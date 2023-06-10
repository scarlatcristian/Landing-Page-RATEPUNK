/* eslint-disable react/no-unescaped-entities */
import { useState, useRef } from "react";
import saveEmail from "../../JSONBin";

const referralLink = "https://ratepunk.com/referral";

const MainSectionForm = () => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [messageSubmission, setMessageSubmission] = useState("");
  const [getReferral, setGetReferral] = useState(false);

  const inputRef = useRef(null);

  // Copy referral link
  const handleCopyClick = () => {
    inputRef.current.select();
    document.execCommand("copy");
  };

  // Check if the input is valid email
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setValidEmail(validateEmail(inputValue));
  };

  // Validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Submitting Form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail) {
      // if email is valid save to JSONBin
      saveEmail(email);
      // Get the referral link ready
      setGetReferral(true);
      // Set the text
      setMessageSubmission(
        <div className="main-section__form--messageSubmission">
          <img src="./src/assets/success.svg" alt="checked" id="success" />
          <h4 style={{ color: "#1F343E" }}>Your email is confirmed!</h4>
        </div>
      );
    } else {
      // If email is invalid set this text
      setMessageSubmission(
        <div className="main-section__form--messageSubmission">
          <h4 style={{ color: "#ED6F82" }}>Enter a valid email</h4>
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

        {getReferral ? (
          <div className="main-section__form--input-btn">
            {messageSubmission}

            <div className="main-section__form--input-btn--referral">
              <input
                type="text"
                defaultValue={referralLink}
                ref={inputRef}
                className="main-section__form--input--referral"
              />
              <button
                type="button"
                onClick={handleCopyClick}
                className="main-section__form--btn--referral"
              >
                Copy
              </button>
            </div>
          </div>
        ) : (
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
        )}

        <p className="main-section__form--limits">
          Limits on max rewards apply.
        </p>
      </div>
    </form>
  );
};
export default MainSectionForm;
