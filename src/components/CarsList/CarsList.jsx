import React, { useEffect } from "react";
import { useState } from "react";
import fetchCars from "../../services/api";
import { nanoid } from "nanoid";
import css from "../CarsList/CatalogList.module.css";
import Modal from '../Modal/Modal.jsx';

export const CarsList = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const limit = 8;


    const openModal = (car) => {
        setSelectedCar(car);
        setIsModalOpen(true);
      };
    
    const closeModal = () => {
        setSelectedCar(null);
        setIsModalOpen(false);
      };
  
    const loadMore = () => {
      const nextPage = page + 1;
      fetchCars(nextPage, limit)
        .then((responseData) => {
          setPage(nextPage);
          setData((prevData) => [...prevData, ...responseData]);
        })
        .catch((err) => console.log(err.message));
    };

    const handleToggleFavorite = (car) => {
        const storedFavoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || [];
        const isAlreadyFavorite = storedFavoriteCars.some((favoriteCar) => favoriteCar.id === car.id);
      
        if (isAlreadyFavorite) {
          const updatedFavoriteCars = storedFavoriteCars.filter((favoriteCar) => favoriteCar.id !== car.id);
          localStorage.setItem('favoriteCars', JSON.stringify(updatedFavoriteCars));
        } else {
          const carToAdd = { ...car, id: nanoid() };
          localStorage.setItem('favoriteCars', JSON.stringify([...storedFavoriteCars, carToAdd]));
        }
      };


  
    useEffect(() => {
      fetchCars(1, limit)
        .then((responseData) => {
          const totalItems = responseData.length;
          const totalPages = Math.ceil(totalItems / limit);
          setTotalPages(totalPages);
          setData(responseData);
        })
        .catch((err) => console.log(err.message));
    }, []);

    return (
      <div>
        <ul className={css.container}>
          {data.map(({img, make, model, type, mileage, year, rentalPrice, rentalCompany, functionalities, address }) => (
            <li className={css.carItem} key={nanoid()}>
              <div className={css.likeContainer}>
                <img className={css.carImg} src={`${img}`} alt={`${model}`} width="274" />
                <button className={css.btnLike} onClick={() => handleToggleFavorite({ img, make, model, type, mileage, year, rentalPrice, rentalCompany, functionalities, address })}>
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
              <div className={css.carItemTitleContainer}>
              <h2 className={css.carItemTitle}>
                {make} <span className={css.carItemTitleSpan}>{model}</span>, {year}
              </h2>
              <h2 className={css.carItemTitle}>{rentalPrice}</h2>
              </div>
              <p className={css.carItemText}>
                {address.split(",").slice(1, 2)} | {address.split(",").slice(2, 3)} | {rentalCompany}
              </p>
              <p className={css.carItemText}>
                {type} | {mileage} | {functionalities.slice(0, 1)}
              </p>
              <button className={css.btn} type="button" onClick={() => openModal({ img, make, model, type, mileage, year, rentalPrice, rentalCompany, functionalities, address })}>
                Learn more
              </button>
            </li>
          ))}
        </ul>
      <Modal isOpen={isModalOpen} closeModal={closeModal} carDetails={selectedCar} />
        {page < totalPages && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    
      </div>
    );
  };

export default CarsList;