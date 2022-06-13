import * as yup from 'yup'; 

export const quoteSchema = yup.object().shape({
    name: yup.string().required().min(4).max(20),
    email: yup.string().email().required(),
    phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone is not Valid'),
    message: yup.string().required()
})