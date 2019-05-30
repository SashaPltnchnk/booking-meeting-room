import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';


class LogOutLinks extends Component {
  render() {
    return (
      <div>
        <Link to ='/signIn'><Button variant="outlined" color="secondary">Sign In</Button></Link>
        <Link to ='/signUp'><Button variant="outlined" color="secondary">Register</Button></Link>
      </div>
    )
  }
}

export default LogOutLinks