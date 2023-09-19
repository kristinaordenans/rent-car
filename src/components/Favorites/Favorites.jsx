import { useEffect, useState } from "react";
import css from '../Favorites/Favorites.module.css';


const Favorites =({ carData, handleToggleFavorite }) => {
    const [isFavorite, setIsFavorite] = useState([]);
    
    useEffect(() => {
        const favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || [];
        const isCarFavorite = favoriteCars.some((favoriteCar) => favoriteCar.id === carData.id);
        setIsFavorite(isCarFavorite);
      }, [carData.id]);
    
      const toggleFavorite = () => {
        handleToggleFavorite(carData.id);
        setIsFavorite(!isFavorite);
      };

  return (
    <div>
    {/* <ul>
         <li className={css.carItem} key={carData.id}>
         <div className={css.likeContainer}>
           <img className={css.carImg} src={`${carData.img}`} alt={`${carData.model}`} width="274" />
           <button className={css.btnLike}onClick={toggleFavorite}>
           {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
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
           {carData.make} <span className={css.carItemTitleSpan}>{carData.model}</span>, {carData.year}
         </h2>
         <h2 className={css.carItemTitle}>{carData.rentalPrice}</h2>
         </div>
         <p className={css.carItemText}>
           {carData.address.split(",").slice(1, 2)} | {carData.address.split(",").slice(2, 3)} | {carData.rcarDataentalCompany}
         </p>
         <p className={css.carItemText}>
           {carData.type} | {carData.mileage} | {carData.functionalities.slice(0, 1)}
         </p>
         <button className={css.btn} type="button">
           Learn more
         </button>
       </li>
      
    </ul> */}
  </div>
  );
};

// const Favorites = ({ carData, handleToggleFavorite }) => {
//     const { id, img, make, model, type, mileage, year, rentalPrice, rentalCompany, functionalities, address } = carData;
//     const favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || [];
//     const isFavorite = favoriteCars.some((favoriteCar) => favoriteCar.id === id);
  
//     return (
//         <div className={css.favoriteItem}>
//           <img src={img} alt={model} width="100" />
//           <h3>{make} {model}, {year}</h3>
//           <p>{address.split(",").slice(1, 2)} | {address.split(",").slice(2, 3)} | {rentalCompany}</p>
//           <p>{type} | {mileage} | {functionalities.slice(0, 1)}</p>
//           <p>Rental Price: {rentalPrice}</p>
//           <button onClick={() => handleToggleFavorite(carData)}>
//             {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//           </button>
//         </div>
//       );
//   };

export default Favorites;
