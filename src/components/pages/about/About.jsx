import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Parallax } from 'react-parallax';
import { aboutSEO, introData } from '../../../data/about/data';

const About = () => {
  return (
      <>
      <Helmet>
            <title>{aboutSEO.title}</title>
            <meta
              name='description'
              content={aboutSEO.content}
            />
            <meta name='keywords' content={aboutSEO.keywords} />
			</Helmet> 
      <div className="parallax">
          <Parallax bgImage='assets/images/electrician3.jpg' strength={150} >  
                <div className="parallax__inner">
                    <div className="parallax__inner__title">
                        <span>About Us</span>
                    </div>              
                </div> 
                <div className="overlay"></div>          
          </Parallax>
      </div>   
         
       <section className='about'>
         <div className="container">
            <div className="row">
                <div className="col-6">
                  <div className="about__info">
                    <h2 className='heading'>{introData.heading}</h2>
                    <h1 className='about__info__heading'>{introData.pageHeading}</h1>
                    <p className='about__info__msg'>Since its foundation the company has doubled its turnover year on year, with its staff numbers swelling accordingly. Today Yellow Hats has over 4,000 professionals on its payroll. The company is active in Middle East, CIS and Europe. Yellow Hats has a team of specialists capable of maximizing the result and delivering projects of any complexity and scope. Our employees are acclaimed experts in such areas as project.</p>
                  </div>                  
                </div>
                <div className="col-6">

                </div>
            </div>
         </div>
       </section>
       </>
  )
}

export default About