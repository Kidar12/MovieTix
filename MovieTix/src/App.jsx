import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import Studio from './components/Studio'
import "./Navbar-style.css"
import "./MovieList-style.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/book/:movieId" element={<Studio />} />
        </Routes>
      </div>
    </Router>
  )
}


export default App
