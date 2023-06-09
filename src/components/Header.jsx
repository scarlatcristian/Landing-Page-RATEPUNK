import { useState } from "react";

import Modal from "./Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    document
      .querySelector(".footer__contact--rate-punk--copyright")
      .classList.add("footer__contact--hidden");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
    document
      .querySelector(".footer__contact--rate-punk--copyright")
      .classList.remove("footer__contact--hidden");
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

        {isOpen && <Modal closeModal={closeModal} />}
      </div>
    </header>
  );
};

export default Header;
