import React from 'react'
import { Button,  Form } from 'semantic-ui-react'


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


const formAuth = props => {
    return ( 
        <Form onSubmit={props.submitHandler}>
            {inputs.map(input => {
                // debugger
                return (
                    <Form.Field key={input.name}>
                        <label>{input.placeholder}</label>
                            <input 
                            placeholder={input.placeholder} 
                            name={input.name} 
                            value={props.form[input.name]} 
                            onChange={props.changeHandler} 
                            type={input.type}
                        />
                    </Form.Field>
                    
                    )
                })}

            <div>
                <Button inverted color='green'>{props.buttonName}</Button>
            </div>
        </Form>      
     );
  };
  
  export default formAuth;