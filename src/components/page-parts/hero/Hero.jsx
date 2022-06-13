import React, {useState, useEffect} from 'react';

const Hero = ({data}) =>{
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = data.length;
  const autoScroll = true;
	let slideInterval
	let intervalTime = 6000;

  useEffect(()=> {setCurrentSlide(0)}, []);
  useEffect(()=>{
        auto();
        return () => clearInterval(slideInterval)
   },[currentSlide]);

   const auto = () =>{
		slideInterval = setInterval(nextSlide, intervalTime);
	}

  const nextSlide = () =>{
		setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
	}

  return(
      <div className='carousel'>
        <div className='carousel__inner'  style={{transform: `translateX(${-currentSlide * 100}%)`}}>
          {data.map((slide, index) =>(
            <div className={index === currentSlide ? 'carousel__inner__item current' : 'carousel__inner__item' } key={index}>					
                <img src={slide.image} alt='slide'/>
                {index === currentSlide && (
                <div className='content'>							
                      <h1>{slide.title}</h1>
                      <p>{slide.text}</p>							
                </div>	)}							
          </div>
          ))}			
        </div>
    </div>
  )
}

export default Hero