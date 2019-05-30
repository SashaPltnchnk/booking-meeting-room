import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class LogOutLinks extends Component {
  render() {
    return (
      <div>
        <button><Link to ='/signIn'>Sign In</Link></button>
        <button><Link to ='/signUp'>Register</Link></button>
      </div>
    )
  }
}

export default LogOutLinks