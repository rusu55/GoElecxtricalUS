import React, {useEffect, useState, useRef} from 'react';

import TestimonialsArrows from './TestimonialsArrows';
import TestimonialsControls from './TestimonialsControls';
import TestimonialsItem from './TestimonialsItem'


const Testimonials = ({reviews}) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef();

    useEffect(() => {
            startSlideTimer()
            return () => stopSlideTimer()
    }, []);

    const startSlideTimer = () =>{
        stopSlideTimer()
        slideInterval.current = setInterval(() => {
            setCurrentSlide((currentSlide) => currentSlide < reviews.length -1 ? currentSlide +1 : 0)
        }, 7000)
    };

    const stopSlideTimer = () =>{
        if(slideInterval.current){
            clearInterval(slideInterval.current)
        }
    }

        /* Carousel Control */
    /* ---- arrows ---- */

    const prev = ()=>{
       
        startSlideTimer()
        const index =  currentSlide > 0 ? currentSlide -1 : reviews.length - 1        
        setCurrentSlide(index)
    };

    const next = () =>{
        
        startSlideTimer()
        const index = currentSlide < reviews.length - 1 ? currentSlide + 1 : 0       
        
        setCurrentSlide(index)
    };

    const switchIndex = (index) =>{
        startSlideTimer()
        setCurrentSlide(index)
    }

  return (
    <section className="testimonials">
        <div className="container">
            <div className="wrapper">
                <div className="inner">
                    {reviews.map((review, index)=>(
                            <TestimonialsItem reviews={review}  key={index} index={index} currentIndex={currentSlide}/>
                    ))}
                    
                </div>
                <TestimonialsControls slides={reviews} currentIndex={currentSlide} switchIndex={switchIndex}/>
                <TestimonialsArrows prev={prev} next={next}/>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
