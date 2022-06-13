import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { Parallax } from 'react-parallax';
import { contactSEO, introData } from '../../../data/contactData';
import ContactForm from './ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
   <>
    <Helmet>
            <title>{contactSEO.title}</title>
            <meta
              name='description'
              content={contactSEO.content}
            />
            <meta name='keywords' content={contactSEO.keywords} />
			</Helmet>  
      <div className="parallax">
          <Parallax bgImage='assets/images/electrician4.jpg' strength={150} >  
                <div className="parallax__inner">
                    <div className="parallax__inner__title">
                        <span>Contact Us</span>
                    </div>              
                </div> 
                <div className="overlay"></div>          
          </Parallax>
      </div>  
       <section className='contact'>
          <div className="container">
              <div className="row">
                  <div className="col-6">
                      <div className="contact__info">
                        <h2 className='heading'>{introData.heading}</h2>
                        <h1 className='contact__info__heading'>{introData.pageHeading}</h1>
                        <p className='contact__info__msg  animation'>Since its foundation the company has doubled its turnover year on year, with its staff numbers swelling accordingly. Today Yellow Hats has over 4,000 professionals on its payroll. The company is active in Middle East, CIS and Europe. Yellow Hats has a team of specialists capable of maximizing the result and delivering projects of any complexity and scope. Our employees are acclaimed experts in such areas as project.</p>
                      </div>  
                  </div>
                  <div className="col-6 animation">
                        <ContactForm />
                  </div>
              </div>
          </div>
       </section>
   </>
  )
}

export default Contact