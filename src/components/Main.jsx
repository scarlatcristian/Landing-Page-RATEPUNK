const Main = () => {
  return (
    <main className="main-section">
      <form className="main-section__form">
        <h1 className="main-section__form--headline headline">
          REFERRAL FRIENDS AND GET REWARDS
        </h1>

        <p>
          Refer your friends to us and earn hotel booking vouchers. We'll give
          you 1 coin or each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>

        <input
          type="text"
          placeholder="Enter your email address"
          className="main-section__form--input"
        />
        <button className="main-section__form--btn">Get Referral Link</button>
        <p>Limits on max rewards apply</p>
      </form>
    </main>
  );
};
export default Main;
