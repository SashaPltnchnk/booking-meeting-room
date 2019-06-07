import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../../store/actions/auth'
import { fetchRooms } from '../../../store/actions/room'
import { withRouter } from 'react-router-dom'
import { Button, Popup } from 'semantic-ui-react'

class LogInLinks extends Component {

  handleLogOut = () => {
    this.props.logOut()
    this.props.history.push('/')
  }

  render() {

    return (
      <div> 
          <Popup
            trigger={ <Button 
                        color='black'
                        icon='user secret'
                        content={this.props.user} /> }
            content='You'
            position='left center'
            size='mini'
            inverted
          />
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