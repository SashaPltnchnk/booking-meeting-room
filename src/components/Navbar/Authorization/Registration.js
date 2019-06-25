import React, { Component } from 'react';
import { connect } from 'react-redux'
import { register } from '../../../store/actions/auth'
import { fetchEvents } from '../../../store/actions/events'
import Form from './FormAuth'
import { Message } from 'semantic-ui-react'
import schema from './form-schema';


class Authorization extends Component {
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
        console.log(this.props)
        const {username, email, password} = this.state.form
        const {register, fetchEvents} = this.props
        e.preventDefault();
        console.log(this.state.form)
        schema.validate(this.state.form, {abortEarly: false})
            .then(() => {
                register({username, password, email})
                this.setState({errors: ''})
                fetchEvents()
            })
            .catch(err => {
                this.setState({errors: err.errors})
            })
    }

    render() { 
        // console.log('WArb',this.props.response)
        const { error} = this.props
        const {errors} = this.state

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
                    buttonName={'Register'}
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


const mapDispatchToProps = { register, fetchEvents };
 
export default connect(mapStateToProps, mapDispatchToProps)(Authorization);