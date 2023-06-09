const Modal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { closeModal } = props;

  return (
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
  );
};
export default Modal;
