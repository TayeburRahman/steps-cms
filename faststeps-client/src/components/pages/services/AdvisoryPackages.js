import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import close from '../../../assets/close.svg';
import okaygr from '../../../assets/okay-gr.svg';
import okay from '../../../assets/okay.svg';
import { useGetFinancialPackageQuery } from '../../../features/auth/authApi';
import { useLanguesContext } from '../../../hooks/LanguesContext';

export default function AdvisoryPackages({setValueOpenS,openValueS}) {

  const [state, setState] = useState({
    left: false
  });

  const { languesState } = useLanguesContext(); 
  useGetFinancialPackageQuery()
  const { see_financial } = useSelector((state) => state.auth);

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
             
              <div className='text-center text-white d-grid-c mb-5' id={`${languesState ==="arb"?"almarai":"comfortaa"}`}>
                  <p className='w-70'>
                  {languesState === "arb" ? "الإدارة المالية":"Financial Managment"}
                  </p> 
                </div>
              <Container id={`${languesState ==="arb"?"almarai":"comfortaa"}`}> 
                     {
                  see_financial && see_financial?.map((data, idx)=>(
                    <div className='mb-4'> 
                    <div className='row align-center'>
                      <div className='col-sm-12 col-md-4 col-lg-4 content-center'>
                      <div
                            className='box-model-pkg p-4 text-center pt-5 lg-text-color'
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb"? data?.packageArb : data?.packageEng
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
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
