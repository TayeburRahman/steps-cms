import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import close from '../../../assets/close.svg';
import okaygr from '../../../assets/okay-gr.svg';
import okay from '../../../assets/okay.svg';
import { useGetNoView12PackageQuery, useGetView12PackageQuery, useGetView18PackageQuery } from '../../../features/auth/authApi';
import { useLanguesContext } from '../../../hooks/LanguesContext';

export default function PrivateOffice({setValueOpenP,openValueP}) {

  const [state, setState] = useState({
    left: false
  });
  const [valueClick, setStateValue] = useState(1);

   

 
  const { languesState } = useLanguesContext(); 
  useGetView12PackageQuery()
  useGetNoView12PackageQuery()
  useGetView18PackageQuery()
  const {  view12_office, noView12_office, view18_office } = useSelector((state) => state.auth);

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
                  <p className='w-70'>{languesState === "arb" ?"مكاتب بمساحات مختلفة تبدأ مجهزة بالكامل تتم ادارتها من قبلنا و مزودة بفريق دعم متخصص في مجال لتكنولوجيا المعلومات ومجال السكرتارية تمكنك من مباشرة العمل على الفور":"A group of offices with different areas, ready for private use by one or more people depending on their needs. These offices are equipped with all the necessities to easily start working once occupied. These offices are managed by 1st Steps and supported by a dedicated IT and secretarial team to help you accomplish your tasks."}</p> 
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
               
               {
                  view12_office && view12_office?.map((data, idx)=>(
                    <div className='mb-4'> 
                    <div className='row align-center'>
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                      <div
                            className='box-model-pkg p-4 text-center pt-5 lg-text-color'
                            dangerouslySetInnerHTML={{
                                __html: data?.package
                            }}>
                        </div> 
                      </div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                         {
                          data?.offer&& data?.offer.map((pkg, idx)=>(
                            <>
                            <div className={`${idx % 2 === 0 ?"service-pkg bg-home":"service-pkg bg-white" }`}>
                             <img src={`${idx % 2 === 0 ?okay: okaygr }` } className='me-2'/> 
                                {languesState === "arb" ? pkg?.arb : pkg?.eng}
                            </div>
                      
                            </>
                          ))
                         }
                      </div>
    
                    </div>
                    </div>
                  ))
                }
              </Container>
                )
               }
              
              {
                valueClick === 2 &&(
                    <Container className=''> 
                     {
                  noView12_office && noView12_office?.map((data, idx)=>(
                    <div className='mb-4'> 
                    <div className='row align-center'>
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                      <div
                            className='box-model-pkg p-4 text-center pt-5 lg-text-color'
                            dangerouslySetInnerHTML={{
                                __html: data?.package
                            }}>
                        </div> 
                      </div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                         {
                          data?.offer&& data?.offer.map((pkg, idx)=>(
                            <>
                            <div className={`${idx % 2 === 0 ?"service-pkg bg-home":"service-pkg bg-white" }`}>
                             <img src={`${idx % 2 === 0 ?okay: okaygr }` } className='me-2'/> 
                                {languesState === "arb" ? pkg?.arb : pkg?.eng}
                            </div>
                      
                            </>
                          ))
                         }
                      </div>
    
                    </div>
                    </div>
                  ))
                }
                  </Container>
                )
              }

{
                valueClick === 3 &&(
                    <Container className=''> 
                    {
                  view18_office && view18_office?.map((data, idx)=>(
                    <div className='mb-4'> 
                    <div className='row align-center'>
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                      <div
                            className='box-model-pkg p-4 text-center pt-5 lg-text-color'
                            dangerouslySetInnerHTML={{
                                __html: data?.package
                            }}>
                        </div> 
                      </div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                         {
                          data?.offer&& data?.offer.map((pkg, idx)=>(
                            <>
                            <div className={`${idx % 2 === 0 ?"service-pkg bg-home":"service-pkg bg-white" }`}>
                             <img src={`${idx % 2 === 0 ?okay: okaygr }` } className='me-2'/> 
                                {languesState === "arb" ? pkg?.arb : pkg?.eng}
                            </div>
                      
                            </>
                          ))
                         }
                      </div>
    
                    </div>
                    </div>
                  ))
                }
                  </Container>
                )
              }
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
