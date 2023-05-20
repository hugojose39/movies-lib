import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import LikeMovies from './pages/LikeMovies';
import Movie from './pages/Movie';
import Search from './pages/Search';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path ="/" element={<Home />}/>
          <Route path ="/like/movies" element={<LikeMovies />}/>
          <Route path ="/movie/:id" element={<Movie />}/>
          <Route path ="search" element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
