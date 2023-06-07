/* eslint-disable react/no-unescaped-entities */

const MainSectionForm = () => {
  return (
    <form className="main-section__form">
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
          <input
            type="text"
            placeholder="Enter your email address"
            className="main-section__form--input"
          />
          <button className="main-section__form--btn">Get Referral Link</button>
        </div>

        <p className="main-section__form--limits">
          Limits on max rewards apply.
        </p>
      </div>
    </form>
  );
};
export default MainSectionForm;
