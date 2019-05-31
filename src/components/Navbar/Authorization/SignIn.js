import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/auth'
import Form from './FormAuth'
import { Header, Message } from 'semantic-ui-react'


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

        let showError  = this.props.error 
        ? <Message warning>
            <Message.Header>{this.props.error}</Message.Header>
            </Message> 
        : null
        return ( 
            <>  
                {showError}
                <Header size='large' color='green'>{this.props.buttonName}</Header>
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

const mapStateToProps = state => {
    return {
        error: state.auth.err
    }
}


const mapDispatchToProps = { signIn };
 
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);