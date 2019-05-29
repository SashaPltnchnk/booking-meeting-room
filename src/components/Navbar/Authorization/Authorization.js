import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn, register } from '../../../store/actions/auth'
import { Redirect } from "react-router-dom";


class Authorization extends Component {
    // state = {  }
    render() { 
        const { isAuthenticated, err } = this.props;

        if (isAuthenticated) {
        return (
            <Redirect exact to='/' />
        )
        }
        return ( 
            <form onSubmit={this.submitHandler}>
                <h3>{this.props.buttonName}</h3>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={this.changeHandler}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.changeHandler}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.changeHandler}/>
                </div>
                <div>
                    <button>{this.props.buttonName}</button>
                </div>
            </form>         
         );
    }
}

const mapStateToProps = state => {
    return {
        isSignedUp: state.auth.userId !== null,
        sAuthenticated: !!localStorage.getItem("token"),
        // err: state.auth.err
    }
}

const mapDispatchToProps = { signIn, register };
 
export default connect(mapStateToProps, mapDispatchToProps)(Authorization);