import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'



class LogOutLinks extends Component {
    // state = {
    //     showModal: false
    // }

    // showModal = () => {
    //     this.setState({ showModal: true })
    // }
  render() {
    return (
      <div>
        <Link to ='/signIn'>
            <Button 
                color='black'>Sign In</Button>
        </Link>
        <Link to ='/signUp'>
            <Button color='black'>Register</Button>
        </Link>
      </div>
    )
  }
}

export default LogOutLinks