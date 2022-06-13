import { Route, Routes} from 'react-router-dom';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Services from '../pages/services/Services';

const Routers = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/services" element={<Services /> } />
            <Route path="/contact" element={<Contact /> } />
        </Routes>
    )
}

export default Routers