import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../../store/actions/auth'
import { fetchRooms } from '../../../store/actions/room'
import { withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class LogInLinks extends Component {

  handleLogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    this.props.logOut()
    this.props.history.push('/')
  }

  render() {
    // console.warn('sokisdfojifsokjidfspokdfspokds', this.props)
    // debugger
  
    return (
      <div>
        <Button color='black' onClick={this.handleLogOut}>Log Out</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      user: state.auth.username
  }
}

const mapDispatchToProps = { logOut, fetchRooms };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LogInLinks))