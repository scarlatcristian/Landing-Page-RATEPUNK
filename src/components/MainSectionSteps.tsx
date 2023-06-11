import React from "react";

const MainSectionSteps: React.FC = () => {
  return (
    <div className="main-section__steps">
      <div className="main-section__steps--container">
        <img
          src="./src/assets/invite.svg"
          alt="invite"
          className="invite icon"
        />
        <div className="main-section__steps--steps">
          <h4 className="main-section__steps--container--steps">STEP 1</h4>
          <h3 className="main-section__steps--container--headline headline">
            INVITE FRIENDS
          </h3>
          <p className="main-section__steps--container--text">
            Refer friends with your unique referral link.
          </p>
        </div>
      </div>

      <div className="main-section__steps--container">
        <div className="main-section__steps--steps order">
          <h4 className="main-section__steps--container--steps">STEP 2</h4>
          <h3 className="main-section__steps--container--headline headline">
            COLLECT COINS
          </h3>
          <p className="main-section__steps--container--text">
            Get one coin for each friend that installs our extension using your
            referral link.
          </p>
        </div>
        <img
          src="./src/assets/collect-coins.svg"
          alt="collect-coins"
          className="collect-coins icon order"
        />
      </div>

      <div className="main-section__steps--container">
        <img
          src="./src/assets/voucher.svg"
          alt="voucher"
          className="voucher icon"
        />
        <div className="main-section__steps--steps">
          <h4 className="main-section__steps--container--steps">STEP 3</h4>
          <h3 className="main-section__steps--container--headline headline">
            GET VOUCHER
          </h3>
          <p className="main-section__steps--container--text">
            Redeem for a 20$ hotel booking voucher once you collect 20 coins.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MainSectionSteps;
