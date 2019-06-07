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

    const kindaLogo = {
      textShadow: '1px 2px 6px rgb(169, 152, 152)'
    }
    
    return (
      <Header as='h3' dividing>
          <div style={navStyle}>
            <Link to='/'><Header size='medium' color='grey' style={kindaLogo}>Booking negotiation rooms</Header></Link>
                {
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