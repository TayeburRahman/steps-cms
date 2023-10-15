import { Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'
import one from '../../assets/1.png'
import tow from '../../assets/2.png'
import three from '../../assets/3.png'
import fore from '../../assets/4.png'
import five from '../../assets/5.png'
import six from '../../assets/6.png'
import Group36920 from '../../assets/Group36920.svg'
import man_img from '../../assets/Mask-Man.png'
import Path4843 from '../../assets/Path4843.svg'
import Path4843o from '../../assets/Path4843o.svg'
import right from '../../assets/arrow-r.png'
import scroll from '../../assets/scroll-down.svg'
import { useGetHomeContentQuery } from '../../features/auth/authApi'
import { useLanguesContext } from '../../hooks/LanguesContext'
import Footer from '../shared/Footer'
import { NavBar } from '../shared/NavBar'

function Home() {
    const [name, setName] = useState('')
    const { home_content } = useSelector((state) => state.auth);
    const { languesState } = useLanguesContext();

    const r1Content = home_content?.banner;
    const r2Content = home_content?.r2Content;
    const r3Content = home_content?.r3Content;
    const r4Content = home_content?.r4Content;
    const r5Content = home_content?.r5Content;
    const r6Content = home_content?.r6Content;
    const r7Content = home_content?.r7Content;
    const r8Content = home_content?.r8Content;
    const r9Content = home_content?.r9Content;
    const r10Content = home_content?.r10Content;




    useGetHomeContentQuery();
    useEffect(() => {
        setName('home')
    }, [])

    return (
        <div >
            <div className='banner-home banner-top'>
                <NavBar />
                <div className='banner-container' >

                    <Container className='banner-text' >
                        <div
                            className='text-left text-anime dfl-lefts padding-p mx-w6'
                            id={`${name === 'home' ? "dfl-leftShow" : ""}`}
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r1Content?.arb : r1Content?.eng,
                            }}>
                        </div>

                        <p className='more-icon mt-3'> <img src={right} className='move-icon me-2' />
                            {languesState === "arb" ? "يتعلم أكثر" : "Learn More"}  </p>


                    </Container>

                    <div className='scroll '>
                        <Link to="/home#all" as={HashLink}>
                            <h6 className='text-scroll'>{languesState === "arb" ? "حرك الفأرة لأسفل" : "Scroll Down"}</h6>
                            <img className='image-scroll' src={scroll} />
                        </Link>
                    </div>
                </div>
            </div>
            <Container className='excellence text-left mt-3 mb-4 text-ani-div mx-w'>

                <div
                    className='text-left mx-w5'
                    dangerouslySetInnerHTML={{
                        __html: languesState === "arb" ? r2Content?.arb : r2Content?.eng,
                    }}>
                </div>
            </Container>

            <div className="row background-craping" >
                <div className='col-sm-12 col-md-5 col-lg-5 padding-0' id="all"><img className='background-craping-img' src={man_img} /></div>
                <div className='col-sm-12 col-md-7 col-lg-7 d-flex-c '>
                    <div className='Path'>
                        <img className='Path4843' src={Path4843} />
                        <img className='Path4843o' src={Path4843o} />
                        <div className='p-3 text-left'>
                            <div
                                className='text-left mx-w5 rContent'
                                dangerouslySetInnerHTML={{
                                    __html: languesState === "arb" ? r3Content?.arb : r3Content?.eng,
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='comprehensive text-animation-container-z'>
                <Container className='text-left animation-content-z'>
                    <div
                        className='text-left mx-w5'
                        dangerouslySetInnerHTML={{
                            __html: languesState === "arb" ? r4Content?.arb : r4Content?.eng,
                        }}>
                    </div>

                </Container>
            </div>

            <div className='business pt-5 pb-5 padding-top-0'>
                <div className='business-bg'></div>
                <Container className='ext-left mt-3 mb-4 text-left pt-5 '>
                    <div className='row'>
                        <div className='col-sm-12 col-md-5 col-lg-5 pb-5'>
                            <div
                                className='text-left mx-w5 text-white-html mb-4 pb-1'
                                dangerouslySetInnerHTML={{
                                    __html: languesState === "arb" ? r5Content?.arb : r5Content?.eng,
                                }}>
                            </div>



                            <Link className='more-link mt-5' as={HashLink} to="/contact"> {languesState === "arb" ? "يتعلم أكثر" : "Learn More"} </Link>
                        </div>
                        <div className='col-sm-12 col-md-7 col-lg-7 ps-5 mb-4 padding-sm-none'>
                            <div className='d-flex business_right'> <img className='image-business ' src={one} /> <p>Streamlining Business Processes For Optimized Operations</p></div>
                            <div className='d-flex business_right'> <img className='image-business ' src={tow} /> <p>Unlocking Unparalleled Opportunities Tailored For Growth</p></div>
                            <div className='d-flex business_right'> <img className='image-business ' src={three} /> <p>Catalyzing Potential Into Tangible Growth Trajectories</p></div>
                            <div className='d-flex business_right'> <img className='image-business ' src={fore} /> <p>Cultivating Skills While Fortifying Core Competencies</p></div>
                            <div className='d-flex business_right'> <img className='image-business ' src={five} /> <p>Fostering A Culture Of Innovation And Entrepreneurial Vigor</p></div>
                            <div className='d-flex business_right'> <img className='image-business ' src={six} /> <p>Offering Seasoned Expertise And Insightful Consultancy Services</p></div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12 col-md-5 col-lg-5 pb-4 mt-5'>
                            <img className='Group36920w' src={Group36920} />
                        </div>
                        <div className='col-sm-12 col-md-7 col-lg-7 ps-5 mt-5 padding-sm-none'>
                            <div
                                className='text-left mx-w5 text-black-html mb-4 pb-1'
                                dangerouslySetInnerHTML={{
                                    __html: languesState === "arb" ? r6Content?.arb : r6Content?.eng,
                                }}>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className='d-flex-c background-TOGETHER'>
                <Container className='d-grid-c '> 
                    <div
                        className='text-center text-white-html mx-w6 mt-5'
                        dangerouslySetInnerHTML={{
                            __html: languesState === "arb" ? r7Content?.arb : r7Content?.eng,
                        }}>
                    </div>
                </Container>
            </div>
            <Container className=' mt-5 mb-5'>
                <div className='row align-center'>
                    <div className='col-md-7 col-sm-12 col-lg-7'>

                        <div
                            className='text-center text-100 text-left p-2'
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r8Content?.arb : r8Content?.eng,
                            }}>
                        </div>
                    </div>

                    <div className='col-md-5 col-sm-12 col-lg-5 text-left'> 
                        <div
                            className='text-left mx-w6 text-black-html mb-4 pb-1'
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r9Content?.arb : r9Content?.eng,
                            }}>
                        </div>

                        <Link className='contact-link' as={HashLink} to="/contact"> {languesState === "arb" ? "اتصل بنا " : "Contact Us"}   </Link>
                    </div>
                </div>
                <div className='d-flex-c mt-5'><div className='border-dv'></div> </div>

                <div className='row align-center'>
                    <div className='col-md-5 col-sm-12 col-lg-5 mt-5'>


                        <div
                            className='text-left mx-w6 text-black-html mb-4 pb-1'
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r10Content?.arb : r10Content?.eng,
                            }}>
                        </div>
                    </div>

                    <div className='col-md-7 col-sm-12 col-lg-7 text-left p-5 padding-cus'>
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

            <Footer />
        </div>
    )
}

export default Home
