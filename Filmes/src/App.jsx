import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'

/*
VITE_API_KEY=api_key=8ed200f50a6942ca5bc8b5cdec27ff22
VITE_API=https://api.themoviedb.org/3/movie/
VITE_SEARCH=https://api.themoviedb.org/3/search/movie
VITE_IMG=https://image.tmdb.org/t/p/w500/
*/ 

const App = () => {
  return (
   <div className='app'>
  
  <Outlet/>

   </div>
  )
}

export default App