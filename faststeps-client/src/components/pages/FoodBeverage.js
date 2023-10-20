import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import consultation from '../../assets/Consultation-white.svg'
import food from '../../assets/food.png'
import line from '../../assets/line-white.png'
import mony from '../../assets/mony-white.svg'
import office_black from '../../assets/office-white.png'
import people from '../../assets/pepple-white.svg'
import { useGetFoodContentQuery, useGetHomeContentQuery } from '../../features/auth/authApi'
import { useLanguesContext } from '../../hooks/LanguesContext'
import Footer from '../shared/Footer'
import Loader from '../shared/Loader'
import { NavBar } from '../shared/NavBar'

function FoodBeverage() {
    const [openValue, setValueOpen] = useState(false)
    useGetHomeContentQuery(); 
    useGetFoodContentQuery(); 
    const { languesState } = useLanguesContext(); 
    const [isLoading, setLoader] = useState(false);

    const { food_content, home_content } = useSelector((state) => state.auth);
    const r1Content = food_content?.r1Content;
    const r2Content = food_content?.r2Content;
    const r10Content = home_content?.r10Content; 

    useEffect(() => {
        !food_content && setLoader(true)
        food_content && setLoader(false)
    }, [food_content])


    return (
       <>
         {
            isLoading ? (<Loader/>) :(
                <div>
                <div className='food-banner'>
                    <NavBar />
                    <div className='background-overlay-office'></div>
                    <div className='d-flex banner-about'>
                        <h2>{languesState==="arb"?"صفحة الخدمات":"Services"}</h2>
                    </div>
                </div>
                <div className='d-flex content-center mtop-50'>
                    <div className='mx-w1300 d-flex-b row'>
                        <div className='col-md-3 col-xs-6 col-sm-6 col-lg-2 padding0-se margin-3 sm-custom'>
                            <Link to="/services" className='service-link-product service-product-off'>
    
                                <div className='d-flex font-18 color-white'>
                                    <img src={office_black} className='pe-3 image-link-service image-white-office' />
                                    {languesState=== "arb"? "المكاتب ومساحات العمل المشتركة":"Offices and Shared Working Spaces"}
                                </div>
                            </Link>
    
                        </div>
    
                        <div className='col-md-3 col-xs-6 col-sm-6 col-lg-2 padding0-se margin-3 sm-custom'>
                            <Link to="/services/consultation" className='service-link-product service-product-off'>
                                <div className='d-flex font-18 color-white'>
                                    <img src={consultation} className='pe-3 image-link-service' />
                                    {languesState=== "arb"? "الخدمات الاستشارية":" Consultation Services"}
                                </div>
    
                            </Link>
    
                        </div>
                        <div className='col-md-3 col-xs-6 col-sm-6 col-lg-2 padding0-se margin-3 sm-custom'>
                            <Link to="/services/food_beverage" className='service-link-product service-product-on'>
    
                                <div className='d-flex font-18 color-black'>
                                    <img src={food} className='pe-3 image-link-service' style={{width:"40px"}} />
                                    {languesState=== "arb"? "قطاع الأغذية والمشروبات":"Food & Beverage"}
                                </div>
    
    
                            </Link>
    
                        </div>
                        <div className='col-md-3 col-xs-6 col-sm-6 col-lg-2 padding0-se margin-3 sm-custom'>
                            <Link to="/services/consultation_services" className='service-link-product service-product-off'>
    
                                <div className='d-flex font-18 color-white'>
                                    <img src={people} className='pe-3 image-link-service' />
                                    {languesState=== "arb"? "ادارة الموظفين وتنظيمهم":"People & Organization"}
                                </div>
    
    
                            </Link>
    
                        </div>
                        <div className='col-md-3 col-xs-6 col-sm-6 col-lg-2 padding0-se margin-3 sm-custom'>
                            <Link to="/services/financial_managment" className='service-link-product service-product-off'>
                                <div className='d-flex font-18 color-white'>
                                    <img src={mony} className='pe-3 image-link-service' />
                                    {languesState=== "arb"? "الإدارة المالية":"Financial Management"}
                                </div>
    
                            </Link>
    
                        </div> 
                    </div>
                </div>
                <Container className='d-grid-c'> 
                <div className='text-center text-black-html mx-w7 mt-3 mb-2 pt-5'
                                dangerouslySetInnerHTML={{
                                    __html: languesState === "arb" ? r1Content?.arb : r1Content?.eng,
                                }}>
                            </div> 
                   <button className='services-button mb-5' >{languesState === "arb" ? "لنحتفل بإنجازاتك من الآن!":"Feast on Achievement Now"}</button>
                 </Container>
                 <div className='background-home'>
                 <Container className='pt-5 pb-5 d-grid item-center'> 
                 <div className='row w-80'>
                             <p className='text-left text-white pb-2' id={`${languesState === "arb"&& "text-right"}`}>
                             {languesState=== "arb"?  "عزز مشروعك في هذا المجال من خلال" :"Enhance your culinary venture through:"}
                               </p>
                                
                                {
                                  r2Content && r2Content?.map((data, idx )=>(
                                    <div className='col-sm-12 col-md-6 col-lg-6 mt-3 mb-2'>
                                    <div  className={`${languesState === "arb" ?'d-flex-b':'d-flex-s'}`}>
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
        </>
    )
}

export default FoodBeverage
