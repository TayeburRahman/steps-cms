import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useEffect, useState } from 'react';
import close from '../../../assets/close.svg';
import okaygr from '../../../assets/okay-gr.svg';
import okay from '../../../assets/okay.svg';

export default function PrivateOffice({setValueOpenP,openValueP}) {

  const [state, setState] = useState({
    left: false
  });
  const [valueClick, setStateValue] = useState(1);

   

 
  console.log('openValueP', openValueP)

  useEffect(() => {
   
    if(openValueP === true){
        setState({"left": true})
    }
  },[openValueP])
  const handleClose = () => {
    setState({"left": false})
    setValueOpenP(false)
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
              <Container className='mt-3 mb-5'>
              <div className='text-center text-white d-grid-c mb-4'>
                  <p className='w-70'>A group of offices with different areas, ready for private use by one or more people depending on their needs. These offices are equipped with all the necessities to easily start working once occupied. These offices are managed by 1st Steps and supported by a dedicated IT and secretarial team to help you accomplish your tasks.</p> 
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4 text-center pb-2'>
                        <button className={valueClick=== 1? "button-bg-pck":"button-rg-pck"} onClick={e=> setStateValue(1)}> 12 sqm office with a view</button>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 text-center pb-2'>
                        <button className={valueClick=== 2? "button-bg-pck":"button-rg-pck"} onClick={e=> setStateValue(2)}> 12 sqm office No View</button>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 text-center pb-2'>
                        <button className={valueClick=== 3? "button-bg-pck":"button-rg-pck"} onClick={e=> setStateValue(3)}> 18 sqm office with a view</button>
                    </div>
                </div> 
              </Container>
               {
                valueClick === 1 &&(
                    <Container className=''>
               
                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>1 Month (Monthly OR Immediate Payment)</p>
                      <h2 className='Crafting-lg-text'>5299</h2> 
                      <p className='color-home2'>SAR/Month</p>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    High-Speed Internet - Wifi
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Copy-Machine And Printer
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Hospitality
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    24 Hour Access
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
                    Large Meeting Room 2 Hours/Month
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Reception And Secretarial Service
                    </div> 
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    4 Free Counseling Sessions
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
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center' >
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>3 Months (Immediate Payment, Or Two Installments)</p>
                      <h2 className='Crafting-lg-text'>5099</h2>
                      <p className='color-home2'>SAR/Month</p>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    High-Speed Internet - Wifi
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Copy-Machine And Printer
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Hospitality
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
                    Small Meeting Room 6 Hours/Month
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Large Meeting Room 4 Hours/Month
                    </div> 
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Small Meeting Room 6 Hours/Month
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Reception And Secretarial Service
                    </div> 
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    6 Free Counseling Sessions
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
                      <p className='text-white'>6 Months (Immediate Payment, Or Two Installments)</p>
                      <h2 className='Crafting-lg-text'>4999</h2>
                      <p className='color-home2'>SAR/Month</p>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    High-Speed Internet - Wifi
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Copy-Machine And Printer
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Hospitality
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
                    Large Meeting Room 4 Hours/Month
                    </div> 
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Reception And Secretarial Service
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    8 Free Counseling Sessions
                    </div> 
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Private Parking - Discounted Fees
                    </div>
                  </div>

                </div>
                </div>
                <div className='mb-4'> 
                <div className='row align-center'>
                  <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                    <div className='box-model-pkg p-4 text-center pt-5'>
                      <p className='text-white'>1 Year (Immediate Payment, Or Two Installments)</p>
                      <h2 className='Crafting-lg-text'>4888</h2>
                      <p className='color-home2'>SAR/Month</p>
                    </div>
                  </div>
                  <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    High-Speed Internet - Wifi
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Copy-Machine And Printer
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Hospitality
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
                    Small Meeting Room 12 Hours/Month
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    Large Meeting Room 6 Hours/Month
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Reception And Secretarial Service
                    </div>
                    <div className='service-pkg bg-home'>
                    <img src={okay} className='me-2'/>
                    12 Free Counseling Sessions
                    </div>
                    <div className='service-pkg bg-white'>
                    <img src={okaygr} className='me-2'/>
                    Private Parking - Discounted Fees
                    </div> 
                  </div> 
                </div>
                </div> 
              </Container>
                )
               }
              
              {
                valueClick === 2 &&(
                    <Container className=''> 
                    <div className='mb-4'> 
                    <div className='row align-center'>
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                        <div className='box-model-pkg p-4 text-center pt-5'>
                          <p className='text-white'>1 Month (Monthly OR Immediate Payment)</p>
                          <h2 className='Crafting-lg-text'>5099</h2> 
                          <p className='color-home2'>SAR/Month</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        High-Speed Internet - Wifi
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Copy-Machine And Printer
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Hospitality
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        24 Hour Access
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
                        Large Meeting Room 2 Hours/Month
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Reception And Secretarial Service
                        </div> 
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        4 Free Counseling Sessions
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
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center' >
                        <div className='box-model-pkg p-4 text-center pt-5'>
                          <p className='text-white'>3 Months (Immediate Payment, Or Two Installments)</p>
                          <h2 className='Crafting-lg-text'>499</h2>
                          <p className='color-home2'>SAR/Month</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        High-Speed Internet - Wifi
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Copy-Machine And Printer
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Hospitality
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
                        Small Meeting Room 6 Hours/Month
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Large Meeting Room 4 Hours/Month
                        </div> 
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Private Parking - Discounted Fees
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Reception And Secretarial Service
                        </div> 
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        6 Free Counseling Sessions
                        </div> 
                      </div>
     
                    </div>
                    </div>
                  <div className='mb-4'> 
                    <div className='row align-center'>
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                        <div className='box-model-pkg p-4 text-center pt-5'>
                          <p className='text-white'>6 Months (Immediate Payment, Or Two Installments)</p>
                          <h2 className='Crafting-lg-text'>4899</h2>
                          <p className='color-home2'>SAR/Month</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        High-Speed Internet - Wifi
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Copy-Machine And Printer
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Hospitality
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
                        Large Meeting Room 4 Hours/Month
                        </div> 
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Reception And Secretarial Service
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        8 Free Counseling Sessions
                        </div> 
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Private Parking - Discounted Fees
                        </div>
                      </div>
     
                    </div>
                    </div>
                    <div className='mb-4'> 
                    <div className='row align-center'>
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                        <div className='box-model-pkg p-4 text-center pt-5'>
                          <p className='text-white'>1 Year (Immediate Payment, Or Two Installments)</p>
                          <h2 className='Crafting-lg-text'>4699</h2>
                          <p className='color-home2'>SAR/Month</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        High-Speed Internet - Wifi
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Copy-Machine And Printer
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Hospitality
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
                        Small Meeting Room 12 Hours/Month
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Large Meeting Room 6 Hours/Month
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Reception And Secretarial Service
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        12 Free Counseling Sessions
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Private Parking - Discounted Fees
                        </div> 
                      </div> 
                    </div>
                    </div> 
                  </Container>
                )
              }

{
                valueClick === 3 &&(
                    <Container className=''> 
                    <div className='mb-4'> 
                    <div className='row align-center'>
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                        <div className='box-model-pkg p-4 text-center pt-5'>
                          <p className='text-white'>1 Month (Monthly OR Immediate Payment)</p>
                          <h2 className='Crafting-lg-text'>80222</h2> 
                          <p className='color-home2'>SAR/Month</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        High-Speed Internet - Wifi
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Copy-Machine And Printer
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Hospitality
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        24 Hour Access
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
                        Large Meeting Room 2 Hours/Month
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Reception And Secretarial Service
                        </div> 
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        4 Free Counseling Sessions
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
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center' >
                        <div className='box-model-pkg p-4 text-center pt-5'>
                          <p className='text-white'>3 Months (Immediate Payment, Or Two Installments)</p>
                          <h2 className='Crafting-lg-text'>7999</h2>
                          <p className='color-home2'>SAR/Month</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        High-Speed Internet - Wifi
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Copy-Machine And Printer
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Hospitality
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
                        Small Meeting Room 6 Hours/Month
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Large Meeting Room 4 Hours/Month
                        </div> 
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Private Parking - Discounted Fees
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Reception And Secretarial Service
                        </div> 
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        9 Free Counseling Sessions
                        </div>
                          
                      </div>
     
                    </div>
                    </div>
                  <div className='mb-4'> 
                    <div className='row align-center'>
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                        <div className='box-model-pkg p-4 text-center pt-5'>
                          <p className='text-white'>6 Months (Immediate Payment, Or Two Installments)</p>
                          <h2 className='Crafting-lg-text'>7799</h2>
                          <p className='color-home2'>SAR/Month</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        High-Speed Internet - Wifi
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Copy-Machine And Printer
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Hospitality
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
                        Large Meeting Room 4 Hours/Month
                        </div> 
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Reception And Secretarial Service
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        12 Free Counseling Sessions
                        </div> 
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Private Parking - Discounted Fees
                        </div>
                      </div>
     
                    </div>
                    </div>
                    <div className='mb-4'> 
                    <div className='row align-center'>
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                        <div className='box-model-pkg p-4 text-center pt-5'>
                          <p className='text-white'>1 Year (Immediate Payment, Or Two Installments)</p>
                          <h2 className='Crafting-lg-text'>7499</h2>
                          <p className='color-home2'>SAR/Month</p>
                        </div>
                      </div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        High-Speed Internet - Wifi
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Copy-Machine And Printer
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Hospitality
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
                        Small Meeting Room 12 Hours/Month
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        Large Meeting Room 6 Hours/Month
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Reception And Secretarial Service
                        </div>
                        <div className='service-pkg bg-home'>
                        <img src={okay} className='me-2'/>
                        18 Free Counseling Sessions
                        </div>
                        <div className='service-pkg bg-white'>
                        <img src={okaygr} className='me-2'/>
                        Private Parking  
                        </div> 
                      </div> 
                    </div>
                    </div> 
                  </Container>
                )
              }
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
