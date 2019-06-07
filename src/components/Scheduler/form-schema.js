
import * as yup from 'yup';

// export default yup.object().shape({

//     event: yup.string().required("please, don't leave the event field empty")

// })


export default  yup.object().shape({
    
    title: yup.string()
        // .notOneOf([''])
        // .nullable()
        .required("don't leave event field empty")
      
  })