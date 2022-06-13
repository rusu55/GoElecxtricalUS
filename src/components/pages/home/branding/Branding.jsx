import React from 'react';
import BrandingLeft from './BrandingLeft';
import SkillsBar from './SkillsBar';

const Branding = ({ data: {heading, subHeading}}) => {
  return (
    <div className='branding'>
        <div className='branding__contents'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 p-15'><BrandingLeft heading={heading} subHeading={subHeading}/></div>
                    <div className='col-6 p-15  animation'><SkillsBar /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Branding