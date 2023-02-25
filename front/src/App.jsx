import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/login" element={ <LoginPage /> } /> */ }
          <Route path="/" element={ <MainPage /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}


export default App
