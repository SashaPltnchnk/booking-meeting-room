import React, { Component } from 'react'
import LogInLinks from './Links/LogInLinks'
import LogOutLinks from './Links/LogOutLinks'
import { Link } from 'react-router-dom'


class Navbar extends Component {

  render() {
      const navStyle = {
          display: 'flex',
          justifyContent: 'space-around'
      }
    return (
      <nav style={navStyle}>
            <Link to='/'>Бронирование переговорных залов</Link>
            <LogOutLinks />
            <LogInLinks />
      </nav>
    )
  }
}

export default Navbar