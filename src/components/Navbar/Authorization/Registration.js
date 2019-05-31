import React, { Component } from 'react';
import { connect } from 'react-redux'
import { register } from '../../../store/actions/auth'
import Form from './Auth'


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
            .then((res) => localStorage.setItem('token', res.data.token))
            .then(() => this.props.history.push('/room/:roomId'))
    }

    render() { 
        // console.log('WArb',this.props.response)
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

const mapDispatchToProps = { register };
 
export default connect(null, mapDispatchToProps)(Authorization);