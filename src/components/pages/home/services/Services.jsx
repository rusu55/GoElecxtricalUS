import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';

function Services({data : {residential, comercial, emergency}}) {

  return (
            <section className="services animation">                
                <div className="container">
                        <div className="services__heading">
                            <h1>Services</h1>
                        </div>
                        <div className="row">
                            <div className='col-4'>
                                <div className="box">
                                    <div className="inner">
                                        <div className="icon"><AiOutlineHome size={50} color={'#ffc527'}/></div>
                                        <h3>{residential.heading}</h3>
                                        <p>{residential.details}</p>
                                    </div>
                                </div>                    
                            </div>
                            <div className='col-4'>
                                <div className="box">
                                    <div className="inner">
                                        <div className="icon"><AiOutlineHome size={50} color={'#ffc527'}/></div>
                                        <h3>{comercial.heading}</h3>
                                        <p>{comercial.details}</p>
                                    </div>
                                </div>                    
                            </div> 
                            <div className='col-4'>
                                <div className="box">
                                    <div className="inner">
                                        <div className="icon"><AiOutlineHome size={50} color={'#ffc527'}/></div>
                                        <h3>{emergency.heading}</h3>
                                        <p>{emergency.details}</p>
                                    </div>
                                </div>                    
                            </div>                      
                        </div>
                </div>               
        </section>
  )
}

export default Services
