import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Path4843 from '../../assets/Path4843.svg'
import Path4843o from '../../assets/Path4843o.svg'
import bottom_cover from '../../assets/abou_cover.svg'
import about_logo30 from '../../assets/about_logo30.png'
import business from '../../assets/busness.svg'
import { useGetAboutContentQuery } from '../../features/auth/authApi'
import { useLanguesContext } from '../../hooks/LanguesContext'
import Footer from '../shared/Footer'
import Loader from '../shared/Loader'
import { NavBar } from '../shared/NavBar'

function AboutUs() {
 
    const { about_content } = useSelector((state) => state.auth); 
    const { languesState } = useLanguesContext();
    const [isLoading, setLoader] = useState(false);
    useGetAboutContentQuery()

    const r1Content = about_content?.r1Content;
    const r2Content = about_content?.r2Content;
    const r3Content = about_content?.r3Content;
    const r4Content = about_content?.r4Content;
    const r5Content = about_content?.r5Content; 


    useEffect(() => {
        !about_content && setLoader(true)
        about_content && setLoader(false)
     }, [about_content])

    return (
         <div>{
            isLoading?(<Loader/>):(
                <>
            <div className='about-bg'>
                <NavBar />
                <div className='background-overlay '></div>
                <div className='d-flex banner-about'>
                    <h2>{languesState==="arb"? "من نحن": "About Us"}</h2>
                </div>
            </div>
            <Container className='pb-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-5 col-lg-5 ps-5 mt-5 padding-sm-none text-left'> 
                        <div
                            className='text-left mx-w6 text-black-html pb-1'
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r1Content?.arb : r1Content?.eng,
                            }}>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-7 col-lg-7 pb-4 mt-5 d-flex-c'>
                        <img className='business_img' src={business} />
                    </div>
                </div>
            </Container>

            <div className='story-bg pb-5'>
                <img className='about-cover' src={bottom_cover} />
                <Container className='d-grid item-center pt-5 pb-5'>
                    <div className='Path-about d-grid-c'>
                        <img className='Path4843-about' src={Path4843} />
                        <img className='Path4843o-about' src={Path4843o} />
                        <div className='p-3'>
                            <div
                                className='text-center  text-white-html pb-1'
                                dangerouslySetInnerHTML={{
                                    __html: languesState === "arb" ? r2Content?.arb : r2Content?.eng,
                                }}>
                            </div>
                        </div>
                    </div>
                    <div className='Path-about2 mt-5 mb-2'> 
                        <div
                            className='text-center text-white-html pb-1'
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r3Content?.arb : r3Content?.eng,
                            }}>
                        </div>
                    </div>
                </Container>
            </div>
            <Container className='d-grid-c'>
                <div
                    className='text-center text-black-html pb-1 text-center mt-4 mb-5  Path-about3 pt-5 '
                    dangerouslySetInnerHTML={{
                        __html: languesState === "arb" ? r4Content?.arb : r4Content?.eng,
                    }}>
                </div> 
            </Container>

            <div className='about-last-bg'> 
                <Container className='d-grid-c '>
                    <img className='about_logo30 mt-5 pt-4' src={about_logo30} /> 
                    <div
                        className='text-black-html text-center mt-3 mb-5 pb-3 Path-about3 mt-5'
                        dangerouslySetInnerHTML={{
                            __html: languesState === "arb" ? r5Content?.arb : r5Content?.eng,
                        }}>
                    </div>
                </Container>
            </div>
            <div className='none-about-bg'></div>
            <Footer />
        </>
            )
         }</div>
    )
}

export default AboutUs
