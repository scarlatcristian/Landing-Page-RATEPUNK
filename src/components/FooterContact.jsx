/* eslint-disable react/no-unescaped-entities */
const FooterContact = () => {
  return (
    <footer className="footer__contact">
      <div className="footer__contact--rate-punk footer__contact--rate-punk--icon">
        <div className="header__icon footer__icon">
          <img src="./src/assets/logo.svg" alt="logo" />
        </div>

        <div className="footer__contact--rate-punk--text">
          <p>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you're getting the best deal!
          </p>
        </div>

        <div className="footer__contact--rate-punk--copyright">
          <p>© 2021 Ratepunk. All Rights Reserved.</p>
        </div>
      </div>

      <div className="footer__contact--quick-links">
        <h3 className="footer__contact--header">QUICK LINKS</h3>

        <a href="#" className="footer__contact--quick-links--link">
          Price Comparison
        </a>
        <a href="#" className="footer__contact--quick-links--link">
          Chrome Extension
        </a>
        <a href="#" className="footer__contact--quick-links--link">
          How it works
        </a>
        <a href="#" className="footer__contact--quick-links--link">
          Ratepunk Blog
        </a>
        <a href="#" className="footer__contact--quick-links--link">
          Privacy Policy
        </a>
      </div>

      <div className="footer__contact--social-media">
        <div className="footer__contact--social-media--container">
          <h3 className="footer__contact--header footer__contact--social-media--container-header">
            CONTACT
          </h3>

          <div className="footer__contact--social-media--container--email">
            <img src="./src/assets/email-footer.svg" alt="email" />
            <p>hi@ratepunk.com</p>
          </div>
        </div>

        <div className="footer__contact--social-media--container">
          <h3 className="footer__contact--header footer__contact--social-media--container-header">
            SOCIAL
          </h3>

          <div className="footer__contact--social-media--container--icons">
            <div className="footer__contact--social-media--icon">
              <img src="./src/assets/instagram.svg" alt="instagram" />
            </div>
            <div className="footer__contact--social-media--icon">
              <img src="./src/assets/facebook.svg" alt="facebook" />
            </div>
            <div className="footer__contact--social-media--icon">
              <img src="./src/assets/linkedin.svg" alt="linkedin" />
            </div>
            <div className="footer__contact--social-media--icon">
              <img src="./src/assets/twitter.svg" alt="twitter" />
            </div>
            <div className="footer__contact--social-media--icon">
              <img src="./src/assets/tiktok.svg" alt="tiktok" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterContact;
