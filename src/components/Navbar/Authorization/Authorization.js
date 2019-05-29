import React, { Component } from 'react';


class Authorization extends Component {
    // state = {  }
    render() { 
        return ( 
            <form >
                <h3>{this.props.buttonName}</h3>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                </div>
                <div>
                    <button>{this.props.buttonName}</button>
                </div>
            </form>         
         );
    }
}
 
export default Authorization;