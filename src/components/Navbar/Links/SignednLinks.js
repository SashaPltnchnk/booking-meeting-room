import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../../store/actions/auth'
import { fetchRooms } from '../../../store/actions/room'
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

class LogInLinks extends Component {

  handleLogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    this.props.logOut()
    this.props.history.push('/red')
    // .then(this.props.fetchRooms())
  }

  render() {
    // console.log('sokisdfojifsokjidfspokdfspokds',this.props.history.push)
    // debugger
  
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={this.handleLogOut}>Log Out</Button>
      </div>
    )
  }
}

const mapDispatchToProps = { logOut, fetchRooms };

export default connect(null, mapDispatchToProps)(withRouter(LogInLinks))