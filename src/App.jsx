import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import FavoritesPage from './pages/FavoritesPage';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path='/catalog' element={<CatalogPage/>}/>
          <Route path='/favorites' element={<FavoritesPage/>} />
          <Route path='*' element={<HomePage/>} />
        </Route>
      </Routes>
  );
}

export default App;
