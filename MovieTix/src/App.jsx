import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import "./Navbar-style.css"
import "./MovieList-style.css"

const App = () => {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <MovieList></MovieList>
    </div>
  )
}


export default App
