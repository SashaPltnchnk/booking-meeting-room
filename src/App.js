import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'


function App() {
  return (
    <BrowserRouter >
        <Navbar />
        <Layout />
    </BrowserRouter>  
  );
}

export default App;