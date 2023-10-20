import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import close from '../../../assets/close.svg';
import okaygr from '../../../assets/okay-gr.svg';
import okay from '../../../assets/okay.svg';
import { useGetSharedPackageQuery } from '../../../features/auth/authApi';
import { useLanguesContext } from '../../../hooks/LanguesContext';

export default function WorkSpace({setValueOpenW,openValueW}) {

  const [state, setState] = useState({
    left: false
  });

 
  const { languesState } = useLanguesContext(); 
  useGetSharedPackageQuery()
  const {  shared_office } = useSelector((state) => state.auth);

  useEffect(() => {
   
    if(openValueW === true){
        setState({"left": true})
    }
  },[openValueW])
  const handleClose = () => {
    setState({"left": false})
    setValueOpenW(false)
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
                <p className='w-70'>{languesState === "arb" ? "عبارة عن مساحة واسعة تتيح لرواد الأعمال وممارسي الأعمال الحرة فرصة اختيار مساحة شاغرة والعمل في بيئة واحدة تجمع عدة مكاتب معاً":"A spacious area that gives entrepreneurs and freelancers the opportunity to choose a vacant space and work together in one environment that brings together several offices."}</p>
                  <p className='w-70'>{languesState === "arb" ? "توفر المساحة المشتركة خدمات مختلفة ومتميزة وتقدم الوسائل التي تساعد مجموعات العمل على تحقيق مشروعاتهم": "The common space provides the means and different special services to help working groups achieve their tasks."}</p>
                </div>
                {
                  shared_office && shared_office?.map((data, idx)=>(
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
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
