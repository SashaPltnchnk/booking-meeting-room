import React, { Component } from 'react';
import { connect } from 'react-redux'
import { register } from '../../../store/actions/auth'
import Form from './FormAuth'
import { Message } from 'semantic-ui-react'


class Authorization extends Component {
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
        this.props.register({username, password, email})
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user_id', res.data._id)
            })
            // .then(() => this.props.history.push('/room/:roomId'))
    }

    render() { 
        // console.log('WArb',this.props.response)
        const { buttonName, error} = this.props

        let showError  = this.props.error 
            ? <Message warning>
                <Message.Header>{error}</Message.Header>
                </Message> 
            : null
        return ( 

            <>
                {showError}
                <Form 
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler}
                    buttonName={buttonName}
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


const mapDispatchToProps = { register };
 
export default connect(mapStateToProps, mapDispatchToProps)(Authorization);