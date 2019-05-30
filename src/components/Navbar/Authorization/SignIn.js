import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/auth'
import { Redirect } from "react-router-dom";


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
        e.preventDefault();
        this.props.signIn({username, password, email})
            .then((res) => localStorage.setItem('token', res.data.token))
            .then(() => this.props.history.goBack())
    }

    render() { 
        // const { isAuth } = this.props;
        console.log(this.props.history)

        // if (isAuth) {
        //     return (
        //         <Redirect exact to='/' />
        //     )
        // }
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

const mapStateToProps = state => {
    return {
        isAuth: !!localStorage.getItem("token"),
        // err: state.auth.err
    }
}

const mapDispatchToProps = { signIn };
 
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);