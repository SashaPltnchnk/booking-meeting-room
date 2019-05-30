import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/auth'
// import { Redirect } from "react-router-dom";


class SignIn extends Component {
    state = { 
        form: {
            username: '',
            email: '',
            password: ''
        }
     }

     changeHandler = (e) => {
        const {name, value } = e.target
        this.setState((state) => {
            return {
                ...state,
                form: {
                    ...state.form,
                    [name]: value
                }
            }
        })
    }


    submitHandler = (e) => {
        const {username, email, password} = this.state.form
        // const userId = this.props.
        e.preventDefault();
        // debugger
        this.props.signIn({username, password, email})
            .then((res) => {
                // debugger
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user_id', res.data._id)
            })
            .then(() => this.props.history.push('/red'))
            // console.log('WArb',this.props.data.res)

    }

    render() { 
        // console.log('WArb',this.props.res)
        return ( 
            <form onSubmit={this.submitHandler}>
                <h3>{this.props.buttonName}</h3>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        onChange={this.changeHandler} 
                        value={this.state.form.username}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        onChange={this.changeHandler} 
                        value={this.state.form.email}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={this.changeHandler} 
                        value={this.state.form.password}/>
                </div>
                <div>
                    <button>{this.props.buttonName}</button>
                </div>
            </form>         
         );
    }
}

// const mapStateToProps = state => {
//     return {
//         isAuth: state.auth.isAuth,
//     }
// }

const mapDispatchToProps = { signIn };
 
export default connect(null, mapDispatchToProps)(SignIn);