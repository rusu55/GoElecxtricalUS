import React, {useRef, useState} from 'react';

const ContactForm = () => {
    const initialValues ={
        name: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const form = useRef();
    const errors = {};

    const handleChange = (e) =>{
        const {name, value} =e.target;

        setFormValues({
            ...formValues,
            [name] : value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

  return (
    
        <>
            <div className='form'>
                <div className='form__header flex'> 
                   <h2>Email Us</h2>
                   <p>Have a question? Want a free quote? Fill out the form below and  will get back to you as soon as possible.</p>
                </div>
                <div className='form__body'>
                    <form  ref={form} id='send-Email' onSubmit={handleSubmit}>
                    <div className='group'>
                    <p>{formErrors.name}</p>
                        <input type="text"
                        name="name"
                        className='group__control'
                        value= {formValues.name}
                        placeholder='Your name eg. smith'   
                        onChange={handleChange}          
                        />             
                    </div>
                    <div className='group'>
                    <p>{formErrors.email}</p>
                        <input type="text"
                        name="email"
                        className='group__control'
                        value= {formValues.email}
                        placeholder='Your email eg. smith@email.com'  
                        onChange={handleChange}           
                        />             
                    </div>
                    <div className='group'>
                    <p>{formErrors.phone}</p>
                        <input type="text"
                        name="phone"
                        className='group__control'
                        value={formValues.phone}
                        placeholder='Your phone eg. 000-000-0000' 
                        onChange={handleChange}            
                        />             
                    </div>
                    <div className='group'>
                    <p>{formErrors.message}</p>
                        <textarea 
                        cols='12' 
                        row='8' 
                        name='message'
                        className='group__textarea' 
                        placeholder='write your message here...'           
                        value={formValues.message}  
                        onChange={handleChange}         
                        ></textarea>
                    </div>
                    <div className='group'>
                        <input type='submit' value='send email &rarr;' className='button-default' />
                        
                    </div>
                </form>
                </div>
            </div>
         </>

  )
}

export default ContactForm
