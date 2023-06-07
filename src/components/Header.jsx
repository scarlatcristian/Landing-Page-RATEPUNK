const Header = () => {
  return (
    <header className="header">
      <div className="header__icon">
        <img src="./src/assets/logo.svg" alt="logo" />
      </div>

      <div className="header__links">
        <a href="#" className="header__links--link">
          Chrome Extension
        </a>
        <a href="#" className="header__links--link">
          Price Comparison
        </a>
        <a href="#" className="header__links--link">
          Blog
        </a>
      </div>
    </header>
  );
};

export default Header;
