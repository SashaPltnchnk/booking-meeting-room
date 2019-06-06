import { string, object } from 'yup';
// import yup from 'yup';

let yup = require('yup');

export default yup.object().shape({

    event: yup.string().required()

    // firstName:      yup.string().required(),

    // lastName:      yup.string().required(),

    // //yup comes with some handy validation functions, as you can see email validation for us!
    // email:      yup.string().email().required(),

    // sex: yup.string().required()
})


// let yup = require('yup');

// var contactSchema = yup.object({
//     event: yup.string()
//       .required(),
//   })