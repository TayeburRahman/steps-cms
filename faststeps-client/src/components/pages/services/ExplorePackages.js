import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useEffect, useState } from 'react';
import close from '../../../assets/close.svg';
import okaygr from '../../../assets/okay-gr.svg';
import okay from '../../../assets/okay.svg';

export default function ExplorePackages({setValueOpenE,openValueE}) {

  const [state, setState] = useState({
    left: false
  });

 
  console.log('openValueE', openValueE)

  useEffect(() => {
   
    if(openValueE === true){
        setState({"left": true})
    }
  },[openValueE])
  const handleClose = () => {
    setState({"left": false})
    setValueOpenE(false)
  }

  const Header = (anchor) => (
    <Box className="d-flex-e">
       <button className='close-button' onClick={handleClose}> 
         <img src={close}/>
       </button>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}> 
          <Drawer
          className='package-drawer'
            anchor={anchor}
            open={state[anchor]} >
              <Header/>
              <Container className=''>
                <div className='text-center text-white d-grid-c mb-5'> 
                  <p className='w-70'>Entrepreneurs & Startups Consultation Services</p>
                </div>
                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>60 Min.</p>
                      <h2 className='Crafting-lg-text'>350 SAR</h2>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Prototype
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Feasibility Study
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Business Plan
                    </div> 
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Marketing
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Human Resources
                    </div> 
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Organizational Structures
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Finance
                    </div> 
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Accounting
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Technical Advice
                    </div> 
                  </div>

                </div>
                </div>
                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center' >
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>Advisory Report</p>
                      <h2 className='Crafting-lg-text'>1,200 SAR</h2> 
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Prototype
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Feasibility Study
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Business Plan
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Marketing
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Organizational Structures
                    </div> 
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Finance
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Accounting
                    </div> 
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Technical Advice
                    </div> 
                  </div>

                </div>
                </div>
              <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>Full Report</p>
                      <h2 className='Crafting-lg-text'>5000 SAR</h2> 
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Prototype
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Feasibility Study
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Business Plan
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Marketing
                    </div> 
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Human Resources
                    </div> 
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Organizational Structures
                    </div> 
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Finance
                    </div> 
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Accounting
                    </div> 
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Technical Advice
                    </div> 
                  </div> 
                </div>
                </div> 
              </Container>
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
