import React, { Component } from 'react';


class Authorization extends Component {
    // state = {  }
    render() { 
        return ( 
            <form >
                <h3>{this.props.buttonName}</h3>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                </div>
                <div className="input-field">
                    <button>{this.props.buttonName}</button>
                </div>
            </form>         
         );
    }
}
 
export default Authorization;