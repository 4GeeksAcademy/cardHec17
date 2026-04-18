import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

import Home from './components/Home';
import Card from './components/Card';
import NavG from './components/NavG';
import {Footer} from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <div className = 'container'>
        <div>
          <NavG/> 
        </div>
        <div style={{marginTop: '100px'}}></div>
        <div justify-content-center align-items-center>
          <Home/> 
        </div> 
        
        <div className = 'Container mt-4'>
              <div className='row justify-content-center'>
                <div className = 'col-12 col-md-3 d-flex mb-4 justify-content-center'div>
                  <Card/>
                </div>
                <div className = 'col-12 col-md-3 d-flex mb-4 justify-content-center'div>
                  <Card/>
                </div>
                  <div className = 'col-12 col-md-3 d-flex mb-4 justify-content-center'div>
                  <Card/>
                </div>
                  <div className = 'col-12 col-md-3 d-flex mb-4 justify-content-center'div>
                  <Card/>
                </div>
              </div>  
        </div>
        <div>
          <Footer/>
        </div>
  </div>
  </React.StrictMode>,
)
