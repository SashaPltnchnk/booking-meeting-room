import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class LogOutLinks extends Component {
  render() {
    return (
      <div>
        <button><Link to ='/login'>Log In</Link></button>
        <button><Link to ='/register'>Register</Link></button>
      </div>
    )
  }
}

export default LogOutLinks