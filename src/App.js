import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
// import './App.scss'
// import './App.css'


function App() {
  const containerStyle = {
    marginTop: '15px'
  }
  return (
    <BrowserRouter >
        <Container style={containerStyle}>
          <Navbar />
          <Layout />
        </Container>
    </BrowserRouter>  
  );
}

export default App;