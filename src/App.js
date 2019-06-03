import React from 'react'
import Navbar from './components/Navbar/Navbar'
import RouteComponent from './RouteComponent'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'


function App() {
  const containerStyle = {
    marginTop: '15px'
  }
  return (
    <BrowserRouter >
        <Container style={containerStyle}>
          <Navbar />
          <RouteComponent />
        </Container>
    </BrowserRouter>  
  );
}

export default App;