import React, { Component } from 'react'
import SignedInLinks from './Links/SignednLinks'
import SignedOutLinks from './Links/SignedOutLinks'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'



class Navbar extends Component {

  render() {
    const { isAuth } = this.props;

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between'
    }
    return (
      <Header as='h3' dividing>
          <div style={navStyle}>
            <Link to='/'><Header size='medium' color='grey'>Booking negotiation rooms</Header></Link>
                {
                  // !!localStorage.getItem('token')
                  isAuth
                  ? <SignedInLinks />
                  : <SignedOutLinks />
                }
          </div>
      </Header>
    )
  }
}

const mapStateToProps = state => {
  return {
      isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps)(Navbar)