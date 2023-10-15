import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import food from '../../assets/Food-white.svg'
import icon from '../../assets/Icon-search.png'
import consultation from '../../assets/consulitation.png'
import contact_home from '../../assets/contact-home.svg'
import line from '../../assets/line-white.png'
import mony from '../../assets/mony-white.svg'
import office_black from '../../assets/office-black.svg'
import people from '../../assets/pepple-white.svg'
import { useGetConsultationContentQuery, useGetHomeContentQuery } from '../../features/auth/authApi'
import { useLanguesContext } from '../../hooks/LanguesContext'
import Footer from '../shared/Footer'
import { NavBar } from '../shared/NavBar'
import ExplorePackages from './services/ExplorePackages'

function ConsultationServices() {
    const [openValueE, setValueOpenE] = useState(false)
    useGetConsultationContentQuery();
    useGetHomeContentQuery();

    const { consul_content, home_content } = useSelector((state) => state.auth);
    const { languesState } = useLanguesContext(); 

    const r1Content = consul_content?.r1Content;
    const r2Content = consul_content?.r2Content;
    const r3Content = consul_content?.r3Content;
    const r4Content = consul_content?.r4Content;
    const r5Content = consul_content?.r5Content; 
    const r10Content = home_content?.r10Content; 
 

 
    return (
        <div>
            <div className='con-banner'>
                <NavBar />
                <div className='background-overlay-office'></div>
                <div className='d-flex banner-about'>
                    <h2>Services</h2>
                </div>
            </div>
            <div className='d-flex content-center mtop-50'>
                <div className='mx-w1300 d-flex-b row'>
                    <div className='col-md-3 col-xs-6 col-sm-6 col-lg-2 padding0-se margin-3 sm-custom'>
                        <Link to="/services" className='service-link-product service-product-off'>

                            <div className='d-flex font-18 color-white'>
                                <img src={office_black} className='pe-3 image-link-service' />
                                {languesState=== "arb"? "المكاتب ومساحات العمل المشتركة":"Offices and Shared Working Spaces"}
                                 
                            </div>
                        </Link>

                    </div> 
                    <div className='col-md-3 col-xs-6 col-sm-6 col-lg-2 padding0-se margin-3 sm-custom'>
                        <Link to="/services/consultation" className='service-link-product service-product-on'>
                            <div className='d-flex font-18 color-black'>
                                <img src={consultation} className='pe-3 image-link-service' /> 
                                {languesState=== "arb"? "الخدمات الاستشارية":" Consultation Services"}
                            </div>

                        </Link>

                    </div>
                    <div className='col-md-3 col-xs-6 col-sm-6 col-lg-2 padding0-se margin-3 sm-custom'>
                        <Link to="/services/food_beverage" className='service-link-product service-product-off'>

                            <div className='d-flex font-18 color-white'>
                                <img src={food} className='pe-3 image-link-service' /> 

                                {languesState=== "arb"? "طعام وشراب":"Food & Beverage"}
                            </div>


                        </Link>

                    </div>
                    <div className='col-md-3 col-xs-6 col-sm-6 col-lg-2 padding0-se margin-3 sm-custom'>
                        <Link to="/services/consultation_services" className='service-link-product service-product-off'>

                            <div className='d-flex font-18 color-white'>
                                <img src={people} className='pe-3 image-link-service' />
                                {languesState=== "arb"? "الناس والمنظمة":"People & Organization"}
                            </div>


                        </Link>

                    </div>
                    <div className='col-md-3 col-xs-6 col-sm-6 col-lg-2 padding0-se margin-3 sm-custom'>
                        <Link to="/services/financial_managment" className='service-link-product service-product-off'>
                            <div className='d-flex font-18 color-white'>
                                <img src={mony} className='pe-3 image-link-service' />
                                 
                                {languesState=== "arb"? "ادارة مالية":"Financial Management"}
                            </div>

                        </Link>

                    </div> 
                </div>
            </div>
            <Container className='d-grid-c'>  
               <div className='text-center text-black-html mx-w7 mt-3 mb-2 pt-5 pb-5'
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r1Content?.arb : r1Content?.eng,
                            }}>
                        </div> 
             </Container>
             <div className='background-home'>
             <Container className='pt-5 pb-5 d-grid item-center'> 
                         <div className='row w-80'>
                         <p className='text-left text-white pb-2'>
                         {languesState=== "arb"?  "تحسين العمليات التجارية الخاصة بك مع :" :"Optimize your business operations with:"}
                           </p>
                            
                            {
                              r2Content && r2Content?.map((data, idx )=>(
                                <div className='col-sm-12 col-md-6 col-lg-6 mt-3 mb-2'>
                                <div className='d-flex-s'>
                                    <div className=''>
                                    <img src={line} className='' />
                                    </div>
                                    <div className='object-div'
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? data?.arb : data?.eng,
                            }}>
                        </div>
                                </div> 
                            </div>
                              ))
                            }
                            
                           
                         </div> 
            </Container> 
             </div>
              <div>
              <div className="row background-craping pt-5"> 
                <div className='col-sm-12 col-md-7 col-lg-7 d-grid-c items-center mt-5 mb-5' >
                    <div className="p-3 text-left from-join padding-sm-about jr-w5 text-home-html jr-p-n"> 
                     
                    <div className='text-left text-white-html mx-w7 mt-3 mb-2 pt-5 '
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r3Content?.arb : r3Content?.eng,
                            }}>
                        </div>
                       

                        <div className='mt-5'> <Link className='more-link text-sm-button' to="/contact">
                             {languesState === "arb" ? "قم بزيادة تأثير عملك إلى الحد الأقصى الآن" : "  Maximize Your Business Impact Now"}   </Link></div>
                       
                    </div>  
                </div> 

                <div className='col-sm-12 col-md-5 col-lg-5 pb-5 mt-5'><img className='background-craping-img' src={contact_home} /></div>
                </div> 
              </div>

             <Container className='d-grid-c'>  
               <div className='text-center text-black-html mx-w7 mt-3 mb-2 pt-5 '
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r4Content?.arb : r4Content?.eng,
                            }}>
                        </div> 
               <button className='services-button mb-5' >  {languesState === "arb" ?"أطلق رؤيتك الآن":"Launch Your Vision Now"}</button>
             </Container>

             <div className='background-home'>
             <Container className='pt-5 pb-5 d-grid item-center'> 
                         <div className='row w-80'>
                        
                         <p className='text-left text-white pb-2'>
                         {languesState=== "arb"?  "تعامل مع تحديات العمل من خلال :" :"Approach business challenges with:"}
                           </p>
                            
                            {
                              r5Content && r5Content?.map((data, idx )=>(
                                <div className='col-sm-12 col-md-6 col-lg-6 mt-3 mb-2'>
                                <div className='d-flex-s'>
                                    <div className=''>
                                    <img src={line} className='' />
                                    </div>
                                    <div className='object-div'
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? data?.arb : data?.eng,
                            }}>
                        </div>
                                </div> 
                            </div>
                              ))
                            }
                           
                         </div> 
            </Container> 
             </div>

             <Container className='pt-5 pb-5'>
                <div className='row content-center'> 
                        <button className='modal-package w-custom-button ' onClick={e=> setValueOpenE(true)}>
                              <div className=''>
                                <img src={icon} className='w-40px' />
                                <h6 className='mt-2'>  {languesState === "arb" ?"استكشف باقاتنا الاستشارية":"Explore Our Advisory Packages"}</h6>
                              </div>
                        </button>
                       <ExplorePackages setValueOpenE={setValueOpenE} openValueE={openValueE}/> 
                </div>
             </Container>

             <Container className='pb-5 '>
             <div className='row align-center'>
                    <div className='col-md-5 col-sm-12 col-lg-5 mt-5'>
                    <div className='text-left text-black-html mx-w7 mt-3 mb-2 '
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r10Content?.arb : r10Content?.eng,
                            }}>
                        </div> 
                    </div>

                    <div className='col-md-7 col-sm-12 col-lg-7 text-left p-5  padding-cus'>
                        <input
                            className="form-control pt-2 pb-2 background-none"
                            type="text"
                            id="displayName"
                            placeholder="Email"
                            required

                        />
                        <button className='contact-link mt-3' >Subscribe</button>
                    </div>
                </div> 
             </Container>
             <Footer/>
        </div>
    )
}

export default ConsultationServices
