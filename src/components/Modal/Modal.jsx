import React from 'react';
import css from '../Modal/Modal.module.css';


const Modal = ({ isOpen, closeModal, carDetails }) => {

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
          closeModal(); // Закриваємо модалку
        }
      };
    

  if (!isOpen) {
    return null; // Не відображаємо модалку, якщо isOpen дорівнює false
  }

  const {  year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage} = carDetails;
console.log(description);
  return (
    <div className={css.modal} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
      <div className={css.likeContainer}>
                <img className={css.carImg} src={`${img}`} alt={`${model}`} width="510" />
                <button className={css.btnLike} >
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.6301 2.45753C15.247 2.07428 14.7922 1.77026 14.2916 1.56284C13.791 1.35542 13.2545 1.24866 12.7126 1.24866C12.1707 1.24866 11.6342 1.35542 11.1336 1.56284C10.633 1.77026 10.1782 2.07428 9.79509 2.45753L9.00009 3.25253L8.20509 2.45753C7.43132 1.68376 6.38186 1.24906 5.28759 1.24906C4.19331 1.24906 3.14386 1.68376 2.37009 2.45753C1.59632 3.2313 1.16162 4.28075 1.16162 5.37503C1.16162 6.4693 1.59632 7.51876 2.37009 8.29253L3.16509 9.08753L9.00009 14.9225L14.8351 9.08753L15.6301 8.29253C16.0133 7.90946 16.3174 7.45464 16.5248 6.95404C16.7322 6.45345 16.839 5.91689 16.839 5.37503C16.839 4.83316 16.7322 4.2966 16.5248 3.79601C16.3174 3.29542 16.0133 2.84059 15.6301 2.45753Z"
                      stroke="white"
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <h2 className={css.carItemTitle}>
                {make} <span className={css.carItemTitleSpan}>{model}</span>, {year}
              </h2>
              <p className={css.carItemText}>
                {address.split(",").slice(1, 2)} | {address.split(",").slice(2, 3)} | Year: {year} | Type: {type}
              </p>
              <p className={css.carItemText}>
              Fuel Consumption: {fuelConsumption} | Engine Size:{engineSize} | {functionalities.slice(0, 1)}
              </p>
              <p>
                {description}
              </p>
              <h3>Accessories and functionalities:</h3>
              <p>{functionalities.slice(0, 1)} | {functionalities.slice(1, 2)} | {functionalities.slice(2, 3)}</p>
              <h3>Rental Conditions: </h3>
              <p>Minimum age : <span>25</span> </p>
              <p>Valid driver’s license</p>
              <p>Security deposite required </p>
              <p>Mileage: {mileage}</p>
              <p>Price: {rentalPrice}</p>
        <button onClick={closeModal}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 6L18 18" stroke="#121417" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;