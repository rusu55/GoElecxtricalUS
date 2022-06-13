import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter} from 'react-router-dom';

import AnimationProvider from './context/providers/AnimationProvider';
import NavBar from './components/page-parts/nav/NavBar';
import Routers from './components/common/Routers';
import Footer from './components/page-parts/footer/Footer';
function App() {
  return (
      <BrowserRouter>    
        <AnimationProvider>   
          <NavBar/>
          <HelmetProvider>
                <Routers />      
          </HelmetProvider>
          <Footer />   
        </AnimationProvider>        
      </BrowserRouter>
  );
}

export default App;
