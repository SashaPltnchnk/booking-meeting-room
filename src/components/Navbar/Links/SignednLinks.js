import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../../store/actions/auth'
import Button from '@material-ui/core/Button';

class LogInLinks extends Component {

  handleLogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    this.props.logOut();
  }

  render() {
  
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={this.handleLogOut}>Log Out</Button>
      </div>
    )
  }
}

const mapDispatchToProps = { logOut };

export default connect(null, mapDispatchToProps)(LogInLinks)