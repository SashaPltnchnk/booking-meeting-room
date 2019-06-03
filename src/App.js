import React from 'react'
import Navbar from './components/Navbar/Navbar'
import RouteComponent from './RouteComponent'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
// import RoomsContainer from './components/Layout/Rooms/RoomsContainer'
// import Scheduler from './components/Scheduler/Scheduler'
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
          <RouteComponent />
          {/* <RoomsContainer /> */}
          {/* <Scheduler /> */}
        </Container>
    </BrowserRouter>  
  );
}

export default App;