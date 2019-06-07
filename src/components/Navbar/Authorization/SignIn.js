import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/auth'
import Form from './FormAuth'
import { Message } from 'semantic-ui-react'
import schema from './form-schema';


class SignIn extends Component {
    state = { 
        form: {
            username: '',
            email: '',
            password: ''
        },
        errors: ''
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
        const {signIn,} = this.props
        e.preventDefault();
        schema.validate(this.state.form, {abortEarly: false})
            .then(() => {
                signIn({username, password, email})
                this.setState({errors: ''})
            })
            .catch(err => {
                this.setState({errors: err.errors})
            })
    }

    render() { 
        const { error } = this.props
        const {errors, form} = this.state

        let showError  = this.props.error 
        ? <Message warning>
            <Message.Header>{error}</Message.Header>
          </Message> 
        : null
        return ( 
            <>  
                {errors && <Message warning>{errors}</Message>}
                {showError}
                <Form 
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler}
                    buttonName={'Sign In'}
                    form={form}
                />
                
            </>     
         );
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.err,
    }
}


const mapDispatchToProps = { signIn };
 
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);