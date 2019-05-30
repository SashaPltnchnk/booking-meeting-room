import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../../store/actions/auth'

class LogInLinks extends Component {

  handleLogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    this.props.logOut();
  }

  render() {
  
    return (
      <div>
        <button onClick={this.handleLogOut}>Log Out</button>
      </div>
    )
  }
}

const mapDispatchToProps = { logOut };

export default connect(null, mapDispatchToProps)(LogInLinks)