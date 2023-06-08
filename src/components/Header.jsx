import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

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

      <div className="header__menu">
        <img src="./src/assets/menu.svg" alt="menu" onClick={openModal} />

        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-content__icon-close">
                <div className="header__icon">
                  <img src="./src/assets/logo.svg" alt="logo" />
                </div>

                <div className="close__icon">
                  <img
                    src="./src/assets/close.svg"
                    alt="close"
                    onClick={closeModal}
                  />
                </div>
              </div>

              <div className="modal-content__links">
                <a href="#" className="modal-content__links--link">
                  Chrome Extension
                </a>
                <a href="#" className="modal-content__links--link">
                  Price Comparison
                </a>
                <a href="#" className="modal-content__links--link">
                  Blog
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
