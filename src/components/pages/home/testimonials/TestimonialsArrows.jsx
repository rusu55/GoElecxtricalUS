import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

const TestimonialsArrows = ({prev, next}) => {
  return (
   <>
    <span className='left arrow'><FaAngleLeft className='arrow' onClick={prev}/></span>
    <span className='right arrow'><FaAngleRight className='arrow' onClick={next}/></span>
   </>
  )
}

export default TestimonialsArrows