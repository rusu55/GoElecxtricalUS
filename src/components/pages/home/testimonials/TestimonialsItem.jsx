import React from 'react';
import {IoPersonCircleOutline} from 'react-icons/io5'

const TestimonialsItem = ({reviews:{name, review}, currentIndex, index}) => {
  return (
    <div className={currentIndex === index ? 'active' : 'inactive'}>
        <IoPersonCircleOutline  className='img'/>
        <h2>{name}</h2>
        <p>{review}</p>
    </div>
  )
}

export default TestimonialsItem