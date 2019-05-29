import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../../store/actions/auth'

class LogInLinks extends Component {

  render() {
    // const token = localStorage.getItem("token");
    // const email = localStorage.getItem("email");
    return (
      <div>
        <button onClick={this.props.logOut}>Log Out</button>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//       token: state.auth.token
//   }
// }

const mapDispatchToProps = { logOut};

export default connect(null, mapDispatchToProps)(LogInLinks)