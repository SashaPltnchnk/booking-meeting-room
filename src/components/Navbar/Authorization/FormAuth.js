import React from 'react'
import { Button,  Form, Header } from 'semantic-ui-react'


const inputs = [
    {
        name: 'username',
        placeholder: 'Username',
        type: 'text'
    },
    {
        name: 'email',
        placeholder: 'Email',
        type: 'email'
    },
    {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
    }
]


const formAuth = ({ buttonName, submitHandler, form, changeHandler }) => {
    return ( 
        <>
            <Header size='large' color='green'>{buttonName}</Header>
            <Form onSubmit={submitHandler}>
                {inputs.map(input => {
                    // debugger
                    return (
                        <Form.Field key={input.name}>
                            <label>{input.placeholder}</label>
                                <input 
                                placeholder={input.placeholder} 
                                name={input.name} 
                                value={form[input.name]} 
                                onChange={changeHandler} 
                                type={input.type}
                            />
                        </Form.Field>
                        
                        )
                    })}

                <div>
                    <Button inverted color='green'>{buttonName}</Button>
                </div>
            </Form>      
        </>
     );
  };
  
  export default formAuth;