import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/auth'
import Form from './Auth'


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
        // debugger
        this.props.signIn({username, password, email})
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user_id', res.data._id)
            })
            .then(() => this.props.history.push('/room/:roomId'))
    }

    render() { 
        // console.log('WArb',this.props.res)
        return ( 
            <>
                <h3>{this.props.buttonName}</h3>
                <Form 
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler}
                    buttonName={this.props.buttonName}
                    form={this.state.form}
                />
            </>     
         );
    }
}


const mapDispatchToProps = { signIn };
 
export default connect(null, mapDispatchToProps)(SignIn);