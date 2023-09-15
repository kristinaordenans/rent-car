// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.default.baseURL="https://65016dd9736d26322f5bab4d.mockapi.io/cars/"

// export const fetchCars = createAsyncThunk(
//    "cars/fetchAll",
//    async(_,thunkAPI) => {
//     try {
//         const{data} = await axios.get('/cars');
//         return data;
//     } catch (err) {
//         return thunkAPI.rejectWithValue(err.message);
//     }
//    }
// );

const fetchCars = () => {
    return fetch('https://65016dd9736d26322f5bab4d.mockapi.io/cars/Advert',{
        method: 'GET',
        headers: {
            accept: 'application/json'
        },
    }).then(res => {
        if(res.ok){
            return res.json();
        }
    }).catch(error => console.log("error"))
}

export default fetchCars;

// console.log(fetchCars());
