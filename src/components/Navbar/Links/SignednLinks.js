import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../../store/actions/auth'
import { fetchRooms } from '../../../store/actions/room'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'

class LogInLinks extends Component {

  handleLogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    this.props.logOut()
    this.props.history.push('/room/:roomId')
  }

  render() {
    console.warn('sokisdfojifsokjidfspokdfspokds', this.props)
    // debugger
  
    return (
      <div>
        <Typography variant="h4">{this.props.user}</Typography>
        <Button variant="outlined" color="secondary" onClick={this.handleLogOut}>Log Out</Button>
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