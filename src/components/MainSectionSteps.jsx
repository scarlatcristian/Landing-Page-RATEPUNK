const MainSectionSteps = () => {
  return (
    <div className="main-section__steps">
      <div className="main-section__steps--container step-1">
        <img src="./src/assets/invite.svg" alt="invite" />
        <div className="main-section__steps--steps">
          <h4>STEP 1</h4>
          <h3 className="headline">Invite Friends</h3>
          <p>Refer friends with your referral link.</p>
        </div>
      </div>

      <div className="main-section__steps--container step-2">
        <div className="main-section__steps--steps">
          <h4>STEP 2</h4>
          <h3 className="headline">Collect Coins</h3>
          <p>
            Get one coin for each friend that installs our extension using your
            referral link.
          </p>
        </div>
        <img src="./src/assets/collect-coins.svg" alt="collect-coins" />
      </div>

      <div className="main-section__steps--container step-3">
        <img src="./src/assets/voucher.svg" alt="voucher" />
        <div className="main-section__steps--steps">
          <h4>STEP 3</h4>
          <h3 className="headline">Get Voucher</h3>
          <p>
            Redeem for a 20$ hotel booking voucher once you collect 20 coins.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MainSectionSteps;
