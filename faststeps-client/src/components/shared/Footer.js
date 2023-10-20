import YouTubeIcon from '@mui/icons-material/YouTube'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import email from '../../assets/email.svg'
import inst from '../../assets/instragram.svg'
import bg_img from '../../assets/light.png'
import link from '../../assets/linkInd.svg'
import location from '../../assets/location.svg'
import logo from '../../assets/logo.svg'
import mobile from '../../assets/mobile.svg'
import phone from '../../assets/phone.svg'
import twi from '../../assets/towitwe.svg'
import whatsapp from '../../assets/whatsapp.svg'

function Footer() {
    return (
        <div className='footer pt-5'>
            <img src={bg_img} className="image_footer_bg" />
            <Container className='container-cus-w'>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 col-lg-3 text-right position-cus mb-5 pe-5'>
                        <img src={logo} className="footer-logo" />
                        <div className='d-flex-r text-right position-cus mt-3'>
                            <img src={twi} className=" p-1" />
                            <img src={link} className="p-1 " />
                            <img src={inst} className="p-1 " />
                            <div className='footer-youtub-div'> <YouTubeIcon className='footer-youtub' /></div>
                        </div>
                    </div> 
                    <div className='col-sm-5 col-md-2 col-lg-2 d-grid ps-5 padding-ps-cus'>
                        <h6 className='footer-link-text pb-2'>QUICK LINK</h6>
                        <Link className='footer-link' to="/about_us">About Us</Link>
                        <Link className='footer-link' to="/about_us">Our Services</Link>
                        <Link className='footer-link' to="/about_us">Contact Us</Link>
                        <Link className='footer-link' to="/about_us">Join Us</Link>
                    </div> 
                    <div className='col-sm-7 col-md-3 col-lg-2 d-grid'>
                        <h6 className='footer-link-text pb-3'>GET IN TOUCH</h6>
                        <div className='footer-link d-flex-ac'> <img src={mobile} className='me-1 mb-2' /> +966 11244 4505</div>
                        <div className='footer-link d-flex-ac'> <img src={whatsapp} className='me-1 mb-2' /> +966 54 400 4203</div>
                        <div className='footer-link d-flex-ac'> <img src={phone} className='me-1' /> +966 56 400 4203</div>
                    </div> 
                    <div className='col-sm-12 col-md-4 col-lg-3 width260'>
                        <h6 className='footer-link-text pb-4'> </h6>
                        <div className='footer-link margin-top-fix mb-3 d-flex-ac'> <img src={email} className='me-1 ' /> Info@1ststeps.com</div>
                        <div className='footer-link d-flex-ac'> <img src={location} className='me-1' /> 2413 Imam Saud Bin Abduaziz <br />Mohamed Rd 7997 AL Muraslat Dist <br /> 12463 Riyadh, KSA</div>
                    </div>
                    <div className='d-flex-c '><div className='border-dv-footer'></div> </div>

                    <div className='copyright pb-3'>Ⓒ 2023 - 1St Steps. All Right Reserved</div>
                </div>
            </Container> 
        </div>
    )
}

export default Footer
