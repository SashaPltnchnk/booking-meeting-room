import React, { Component } from 'react'
import SignedInLinks from './Links/SignednLinks'
import SignedOutLinks from './Links/SignedOutLinks'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';


class Navbar extends Component {

  render() {
    const { isAuth } = this.props;

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around'
    }
    return (
      <AppBar color="inherit" position="static" >
          <div style={navStyle}>
            <Link to='/'><Typography variant="h6">Бронирование переговорных залов</Typography></Link>
                {
                    isAuth
                    ? <SignedInLinks />
                    : <SignedOutLinks />
                }
          </div>
      </AppBar>
    )
  }
}

const mapStateToProps = state => {
  return {
      isAuth: !!localStorage.getItem("token")
  }
}

export default connect(mapStateToProps)(Navbar)