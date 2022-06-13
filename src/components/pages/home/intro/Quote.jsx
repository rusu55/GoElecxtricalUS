import React,{useState, useRef} from 'react';
import ClipLoader from "react-spinners/ClipLoader";

import {FaHospitalAlt} from 'react-icons/fa';
import { quoteSchema } from '../../../utils/Quotevalidation';
import {sendEmail} from '../../../utils/SendData';



const Quote = () => {

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }
 
  const [formValues, setFormValues ] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
 
  const form = useRef()
  const errors ={}

  const handleSubmit = async (event) =>{
    event.preventDefault()
     
    const isValid =  await quoteSchema.validate(formValues, {abortEarly: false}).then(function(){
      setLoading(true)
      sendEmail(form.current)            
      setFormErrors({})           
      setFormValues(initialValues)   
      setLoading(false)
    }).catch(function(err){
      
      err.inner.forEach(
        e => {
          const {message, path} = e
          errors[path] = message            
        }
      )
      setFormErrors(errors)           
      return
    })       
  }

  const handleChange = (event) =>{
    const {name, value} = event.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }


  return (
    <>
    <div className='quote'>
        <div className='quote__header flex'> 
          <div className="icon">
            <FaHospitalAlt size={30} className='icon'/> 
          </div>
          <div className="devider"></div> 
          <div className="desc ml-3">
              <p>Don't Hesitate To Ask</p>      
              <h4>Request a Quote</h4> 
          </div>              
        </div>
        <div className='quote__body'>
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
    {loading ? 
    <div className='loader'>
        <div className='spiner'>
            <ClipLoader color={'#ffffff'} loading={loading}  size={40} />
        </div>      
      </div>
      : ''}
    </>
  )
}

export default Quote