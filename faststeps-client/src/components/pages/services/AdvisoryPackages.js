import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useEffect, useState } from 'react';
import close from '../../../assets/close.svg';
import okaygr from '../../../assets/okay-gr.svg';
import okay from '../../../assets/okay.svg';

export default function AdvisoryPackages({setValueOpenS,openValueS}) {

  const [state, setState] = useState({
    left: false
  });

 
  console.log('openValueS', openValueS)

  useEffect(() => {
   
    if(openValueS === true){
        setState({"left": true})
    }
  },[openValueS])
  const handleClose = () => {
    setState({"left": false})
    setValueOpenS(false)
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
                      <p className='text-white'>Daily - On Spot Payment</p>
                      <h2 className='Crafting-lg-text'>151 SAR</h2>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Shared Working Space - Fully Equipped
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    High-Speed Internet - Wifi
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Copy-Machine And Printer
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Hospitality
                    </div> 
                  </div>

                </div>
                </div>
                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center' >
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>1 Month - Monthly Payment</p>
                      <h2 className='Crafting-lg-text'>1099 SAR</h2>
                      <p className='color-home2'>SAR/Month</p>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Shared Working Space - Fully Equipped
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    High-Speed Internet - Wifi
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Copy-Machine And Printer
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Hospitality
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    24 Hour Access
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    24/7 Service
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    1St Step Lounge - Discount Rate
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Small Meeting Room 2 Hours/Month
                    </div> 
                  </div>

                </div>
                </div>
              <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>3 Months (Immediate Payment, Or Two Installments)</p>
                      <h2 className='Crafting-lg-text'>999 SAR</h2>
                      <p className='color-home2'>SAR/Month</p>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Private Parking - Discounted Fees
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    High-Speed Internet - Wifi
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Copy-Machine And Printer
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Hospitality
                    </div> 
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    24 Hour Access
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    24/7 Service
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    1St Step Lounge - Discount Rate
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Small Meeting Room 4 Hours/Month
                    </div> 
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    7 Free Counseling Sessions
                    </div>
                  </div>

                </div>
                </div>
                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>6 Months (Immediate Payment, Or Two Installments)</p>
                      <h2 className='Crafting-lg-text'>959 SAR</h2>
                      <p className='color-home2'>SAR/Month</p>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Specialized Shared Working Space - Fully Equipped
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    High-Speed Internet - Wifi
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Copy-Machine And Printer
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Hospitality
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    24 Hour Access
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    24/7 Service
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    1St Step Lounge - Discount Rate
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Small Meeting Room 4 Hours/Month
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    5 Free Counseling Sessions
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Private Parking - Discounted Fees
                    </div>
                     

                  </div>

                </div>
                </div>

                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>1 Year (Immediate Payment Or Two Installments)</p>
                      <h2 className='Crafting-lg-text'>899 SAR</h2>
                      <p className='color-home2'>SAR/Month</p>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Specialized Shared Working Space - Fully Equipped
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    High-Speed Internet - Wifi
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Copy-Machine And Printer
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Hospitality
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Copy-Machine And Printer
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    24 Hour Access
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    24/7 Service
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    1St Step Lounge - Discount Rate
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Small Meeting Room 8 Hours/Month
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    7 Free Counseling Sessions
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Private Parking - Discounted Fees
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
