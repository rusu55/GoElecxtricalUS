import React, {useState} from 'react';

import { introData } from '../../../../data/home/data';
import Quote from './Quote';

const Intro = () => {
  //const[state] = useState(introData);    
  return (
    <section className='intro'>
        <div className='container'>
            <div className="row">
                <div className="col-8">
                    <h3 className='intro__heading'>{introData.heading}</h3>
                    {introData.pargraphs.map((paragraph, index) =>(
                            <p key={index} className='paragraph'>{paragraph.paragraph}</p>
                    ))}                    
                   
                </div>
                <div className="col-4">
                   <Quote />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Intro