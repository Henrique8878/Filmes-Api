import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<App/>}>
          <Route path='/' element = {<Home/>}>Home</Route>
          <Route path='/movie/:id'element = {<Movie/>}>Movie</Route>
          <Route path='/search' element={<Search/>}>Search</Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
