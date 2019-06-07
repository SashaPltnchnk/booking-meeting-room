// import { string, object } from 'yup';
import * as yup from 'yup';

// let yup = require('yup');

export default yup.object().shape({

    username:      yup.string().required("Username is required"),

    email:      yup.string().email().required("Email is required"),

    password:   yup.string()
    .required("Password is required")
    .min(3, "Password is too short")
    .max(25, "Password is too long")

})


