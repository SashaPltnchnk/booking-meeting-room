import React, { Component } from 'react'
import SignedInLinks from './Links/LogInLinks'
import SignedOutLinks from './Links/LogOutLinks'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class Navbar extends Component {

  render() {
    const { isAuth } = this.props;

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around'
    }
    return (
      <nav style={navStyle}>
            <Link to='/'>Бронирование переговорных залов</Link>
            {
                isAuth
                ? <SignedInLinks />
                : <SignedOutLinks />
            }
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
      isAuth: !!localStorage.getItem("token")
  }
}

export default connect(mapStateToProps)(Navbar)