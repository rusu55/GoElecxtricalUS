import React from 'react';
import {Link} from 'react-router-dom';

const BrandingLeft = ({heading, subHeading}) => {
    
  return (
    <div className='branding__left'>
			<h1 className='branding__left__heading'>{heading}</h1>
			<p className='branding__left__paragraph'>{subHeading}</p>
            <div className='button-container'>
                <Link className='button-default' to='/'>Click</Link>
            </div>            
		</div>
  )
}

export default BrandingLeft
