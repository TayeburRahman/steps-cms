import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useEffect, useState } from 'react';
import close from '../../../assets/close.svg';
import okaygr from '../../../assets/okay-gr.svg';
import okay from '../../../assets/okay.svg';

export default function MeetingRoom({setValueOpen,openValue}) {

  const [state, setState] = useState({
    left: false
  });

 
  console.log('openValue', openValue)

  useEffect(() => {
   
    if(openValue === true){
        setState({"left": true})
    }
  },[openValue])
  const handleClose = () => {
    setState({"left": false})
    setValueOpen(false)
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
                  <p className='w-70'>"A spacious area that gives entrepreneurs and freelancers the opportunity to choose a vacant space and work together in one environment that brings together several offices.</p>
                  <p className='w-70'>The common space provides the means and different special services to help working groups achieve their tasks."</p>
                </div>
                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>1 Hour Meeting</p>
                      <h2 className='Crafting-lg-text'>119 SAR</h2>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    High-Speed Internet-WIFI
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Projector-Dissplay Screen
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    White Board
                    </div> 
                  </div>

                </div>
                </div>
                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center' >
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>4 Hour Meeting</p>
                      <h2 className='Crafting-lg-text'>149 SAR</h2> 
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    High-Speed Internet-WIFI
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Projector-Dissplay Screen
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    White Board
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Hospitality
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    1St Step Lounge-Discount Rate
                    </div> 
                  </div>

                </div>
                </div>
              <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>8 Hour Meeting (Full Day)</p>
                      <h2 className='Crafting-lg-text'>600 SAR</h2> 
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    High-Speed Internet-WIFI
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Projector-Dissplay Screen
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    White Board
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Hospitality
                    </div> 
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    1St Step Lounge-Discount Rate
                    </div> 
                  </div>

                </div>
                </div>
                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>1 Hour Meeting</p>
                      <h2 className='Crafting-lg-text'>189 SAR</h2> 
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    High-Speed Internet-WIFI
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Projector-Dissplay Screen
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    White Board
                    </div>   
                  </div>

                </div>
                </div>

                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>4 Hour Meeting</p>
                      <h2 className='Crafting-lg-text'>209 SAR</h2> 
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    High-Speed Internet-WIFI
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Projector-Dissplay Screen
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    White Board
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Hospitality
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    1St Step Lounge-Discount Rate
                    </div> 
                  </div>

                </div>
                </div>

                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>8 Hour Meeting (Full Day)</p>
                      <h2 className='Crafting-lg-text'>988 SAR</h2> 
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    High-Speed Internet-WIFI
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Projector-Dissplay Screen
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    White Board
                    </div>   
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Hospitality
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    1St Step Lounge-Discount Rate
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
