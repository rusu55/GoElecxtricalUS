import React from 'react';
import {FaRegMap, FaRegEnvelope, FaPhoneAlt, FaFacebookSquare, FaGooglePlusSquare, FaTwitterSquare, FaInstagramSquare, FaRssSquare} from "react-icons/fa";

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
          <div className="row">
              <div className="col-6 flex footer__items">
                <h3>Go Electrical US</h3>
                <p>Yellow Hats is a leading of A-grade commercial, industrial and residential projects in USA. Since its foundation the company has doubled its turnover year on year, with its staff numbers swelling accordingly.</p>
              </div>
              <div className="col-3 flex footer__links">
                  <h3>Navigaiton</h3>
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About US</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Contact Us</a></li>
                  </ul>
              </div>
              <div className="col-3 flex footer__services">
                  <h3>Services</h3>
                  <ul>
                    <li><a href="#">Electrical Repair</a></li>
                    <li><a href="#">Generators</a></li>
                    <li><a href="#">Lighting</a></li>
                    <li><a href="#">Electrical Panels</a></li>
                    <li><a href="#">New Constructions</a></li>
                    <li><a href="#">Data and Communications</a></li>
                    <li><a href="#">Fire Alarms</a></li>
                    <li><a href="#">EV Charging Station</a></li>
                  </ul>
               </div>
          </div>
      </div>          
              <div className="footer__contact mt-5">
                  <div className="container">
                      <div className="row">
                          <div className="item flex">
                              <FaRegMap size={40} className='icon' />
                              <p className='ml-1'>Schaumburg, Il</p>
                          </div>
                          <div className="item flex">
                            <FaRegEnvelope size={40} className='icon' />
                            <p className='ml-1'>office@GoElectricalUS.com</p>
                          </div>
                          <div className="item flex">
                            <FaPhoneAlt size={30} className='icon' />
                            <p className='ml-1'>(347) 935-7504</p>
                          </div>
                      </div>
                  </div>
              </div>          
          <div className="row">
              <div className="col-12 footer__bottom">
                 <p>Copyright GoElectrical US</p>
              </div>
          </div>
      
    </footer>
  )
}

export default Footer