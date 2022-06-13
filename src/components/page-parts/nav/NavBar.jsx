import React, {useEffect, useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar =() => {
  const [toggle, setToogle] = useState(false);

  const location = useLocation();
  let oldValue = 0;
  let newValue =0;
  

  useEffect(()=>{
    setToogle()
  }, [location]);
 
  useEffect(()=>{
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const handleScroll = () =>{
      

    const element = document.querySelector('.nav');
    newValue = window.pageYOffset;
    
    if (oldValue < newValue && window.scrollY > 400 && window.innerWidth > 992 ) {      
      element.classList.add('fixedNav'); 

    }
    if (oldValue < newValue && window.scrollY > 560 && window.innerWidth > 992 ) {      
      element.classList.add('floatNav'); 

    } else if (oldValue > newValue &&  window.scrollY < 450 && window.innerWidth > 992) {
      element.classList.remove('floatNav');
      element.classList.remove('fixedNav');
    }
    oldValue = newValue     

  };

  const handleToggle = () =>{
    setToogle(!toggle)
  };

  return (
    <>
    <nav className='nav'>
      <div className="container">
        <div className='navbar'>
            <img  src='assets/logo-go-png.png' className='logo' /> 
            <ul className={toggle ? 'flex nav-open' : 'flex nav-close'}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
        </div>
      </div>    
    </nav>
    <div className={toggle ? 'toggle-close' : 'toggle-open' } onClick={()=>handleToggle()}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="toggle__background"></div>   
   
    </>
  )
}

export default NavBar
