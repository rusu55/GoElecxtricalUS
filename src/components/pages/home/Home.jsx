import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';

import {homeSEO, services, branding, carousel, reviews} from '../../../data/home/data';
import Hero from '../../page-parts/hero/Hero';
import Intro from './intro/Intro';
import Branding from './branding/Branding';
import Services from './services/Services';
import Gallery from './gallery/Gallery';
import Testimonials from './testimonials/Testimonials';

const Home = () => {
  useEffect(() =>{
    window.scrollTo(0,0)
  }, []);

  return (
    <>
        <Helmet>
            <title>{homeSEO.title}</title>
            <meta
              name='description'
              content={homeSEO.content}
            />
            <meta name='keywords' content={homeSEO.keywords} />
			</Helmet>      
      <Hero data={carousel} />      
      <Intro />
      <Branding data={branding} />     
      <Services data={services} />
      <Gallery />
      <Testimonials reviews={reviews}/>
    </>
   )
}

export default Home
