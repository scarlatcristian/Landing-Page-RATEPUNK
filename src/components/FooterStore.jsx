const Footer = () => {
  return (
    <div className="footer__store">
      <div className="footer__store--container">
        <img
          src="./src/assets/chrome.svg"
          alt="chrome"
          className="footer__store--container--icon"
        />

        <div className="footer__store--container--text">
          <p className="footer__store--container--text--paragraph">
            available in the
          </p>
          <h2 className="footer__store--container--text--headline">
            chrome web store
          </h2>
        </div>
      </div>

      <div className="footer__store--container">
        <img
          src="./src/assets/apple.svg"
          alt="apple"
          className="footer__store--container--icon"
        />

        <div className="footer__store--container--text">
          <p className="footer__store--container--text--paragraph">
            available in the
          </p>
          <h2 className="footer__store--container--text--headline">
            apple app store
          </h2>
        </div>
      </div>

      <div className="footer__store--review">
        <div className="footer__store--review--stars">
          <span className="footer__store--review--star">&#9733;</span>
          <span className="footer__store--review--star">&#9733;</span>
          <span className="footer__store--review--star">&#9733;</span>
          <span className="footer__store--review--star">&#9733;</span>
          <span className="footer__store--review--star">&#9733;</span>
        </div>

        <p className="footer__store--review--text">Chrome Store reviews</p>
      </div>
    </div>
  );
};
export default Footer;
