import React from 'react'


const inputs = [
    {
        name: 'username',
        placeholder: 'username',
        type: 'text'
    },
    {
        name: 'email',
        placeholder: 'email',
        type: 'email'
    },
    {
        name: 'password',
        placeholder: 'password',
        type: 'password'
    }
]


const formAuth = props => {
    return ( 
        <form onSubmit={props.submitHandler}>

            {inputs.map(input => {
                // debugger
                return (
                    <input 
                        key={input.name}
                        placeholder={input.placeholder} 
                        name={input.name} 
                        value={props.form[input.name]} 
                        onChange={props.changeHandler} 
                        type={input.type}
                    />
                    )
                })}

            <div>
                <button>{props.buttonName}</button>
            </div>
        </form>      
     );
  };
  
  export default formAuth;