import React from 'react'

const TestimonialsControls = ({slides, currentIndex, switchIndex}) => {
  return (
    <ul className="dots">
     {slides.map((slide, index) => (
            <li key={index} className={index === currentIndex ? 'dot active' : 'dot' } onClick={()=> switchIndex(index)}></li>
        ))}    
    </ul>
  )
}

export default TestimonialsControls