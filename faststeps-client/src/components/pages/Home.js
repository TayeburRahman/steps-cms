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
import Loader from '../shared/Loader'
import { NavBar } from '../shared/NavBar'

function Home() {
    const [name, setName] = useState('')
    const [isLoading, setLoader] = useState(false);
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

    useEffect(() => {
       !home_content && setLoader(true)
       home_content && setLoader(false)
    }, [home_content])
  

    return (
          <>
          {
            isLoading ? (<Loader/>):(
                <div>
            <div className='banner-home banner-top'>
                <NavBar />
                <div className='banner-container' > 
                    <Container className='banner-text' id={`${languesState === "arb" && "d-grid-r"}`} >
                        <div
                            className='text-left text-anime dfl-lefts padding-p mx-w6 text-cus-banner-home'
                            id={`${name === 'home' ? "dfl-leftShow" : ""}`}
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r1Content?.arb : r1Content?.eng,
                            }}>
                        </div> 
                        <p className='more-icon mt-3' id={`${languesState === "arb" && "text-right"}`}> <img src={right} className='move-icon me-2' />
                            {languesState === "arb" ? "يتعلم أكثر" : "Learn More"}  </p> 
                    </Container>

                    <div className='scroll '>
                        <Link to="/home#solutions" as={HashLink}>
                            <h6 className='text-scroll'>{languesState === "arb" ? "اسحب للأسفل" : "Scroll Down"}</h6>
                            <img className='image-scroll' src={scroll} />
                        </Link>
                    </div>
                </div>
            </div>
            <Container className='excellence text-left mt-3 mb-4 text-ani-div mx-w'> 
                <div
                    className='text-left mx-w5 text-black-html'
                    dangerouslySetInnerHTML={{
                        __html: languesState === "arb" ? r2Content?.arb : r2Content?.eng,
                    }}>
                </div>
            </Container>

            <div className="row background-craping" >
                <div className='col-sm-12 col-md-5 col-lg-5 padding-0' id="solutions"><img className='background-craping-img' src={man_img} /></div>
                <div className='col-sm-12 col-md-7 col-lg-7 d-flex-c p_lg_md_100'>
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
                        className='text-left mx-w5 text-black-html'
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
                                className='text-left mx-w5 text-white-html-org mb-4 pb-1'
                                dangerouslySetInnerHTML={{
                                    __html: languesState === "arb" ? r5Content?.arb : r5Content?.eng,
                                }}>
                            </div> 
                            <div className={`${languesState === "arb" &&"text-right"}`}>
                            <Link className='more-link mt-5' as={HashLink} to="/contact"> {languesState === "arb" ? "يتعلم أكثر" : "Learn More"} </Link>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-7 col-lg-7 ps-5 mb-4 padding-sm-none' id={languesState ==="arb"&&"d-flex-e"} >
                            <div className='d-flex business_right' id={languesState ==="arb"&&"d-flex-e"} > {languesState !=="arb"&&  <img className='image-business ' src={one} />} <p className='ms-2 p-text '> {languesState === "arb" ?"تسهيل العمليات التجارية لتحسين النتائج":"Streamlining Business Processes For Optimized Operations"}</p>
                            {languesState ==="arb"&&  <img className='image-business ms-2' src={one} />} 
                            </div>

                            <div className='d-flex business_right' id={languesState ==="arb"&&"d-flex-e"} >
                            {languesState !=="arb"&&   <img className='image-business ' src={tow} /> }<p className='ms-2 p-text '>{languesState === "arb" ? "إيجاد فرص متفردة صممت خصيصًا لتحقيق النمو":"Unlocking Unparalleled Opportunities Tailored For Growth"}</p>
                            {languesState ==="arb"&&   <img className='image-business ms-2' src={tow} /> }
                            </div>

                            <div className='d-flex business_right' id={languesState ==="arb"&&"d-flex-e"} >
                            {languesState !=="arb"&&   <img className='image-business ' src={three} />} <p className='ms-2 p-text '>{languesState === "arb" ? "تحفيز الإمكانات وتحويلها إلى مسارات نمو ملموسة":"Catalyzing Potential Into Tangible Growth Trajectories"}</p>
                            {languesState ==="arb"&&   <img className='image-business ms-2' src={three} />} 
                            </div>
                            <div className='d-flex business_right' id={languesState ==="arb"&&"d-flex-e"} > 
                            {languesState !=="arb"&&  <img className='image-business ' src={fore} /> }
                            <p className='ms-2 p-text '>{languesState === "arb" ? "دعم المهارات و تقوية الكفاءات الأساسية":"Cultivating Skills While Fortifying Core Competencies"}</p>
                            {languesState ==="arb"&&  <img className='image-business ms-2' src={fore} /> }
                            </div>

                            <div className='d-flex business_right' id={languesState ==="arb"&&"d-flex-e"} >
                            {languesState !=="arb"&&   <img className='image-business ' src={five} />} <p className='ms-2 p-text '>{languesState === "arb" ?"تعزيز ثقافة الابتكار ونشاط ريادة الأعمال":"Fostering A Culture Of Innovation And Entrepreneurial Vigor"}</p>
                            {languesState ==="arb"&&   <img className='image-business ms-2' src={five} />}  
                            </div>

                            <div className='d-flex business_right' id={languesState ==="arb"&&"d-flex-e"} > 
                            {languesState !=="arb"&&  <img className='image-business ' src={six} />}<p className='ms-2 p-text'>{languesState === "arb" ?"تقديم خبرة متمرسة وخدمات استشارية ذات رؤية واضحة":"Offering Seasoned Expertise And Insightful Consultancy Services"}</p>
                            {languesState ==="arb"&&  <img className='image-business ms-2' src={six} />}
                            
                            </div>
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
                        <div className={`${languesState === "arb" &&"text-right"}`}>
                        <Link className='contact-link' as={HashLink} to="/contact"> {languesState === "arb" ? "اتصل بنا " : "Contact Us"}   </Link>
                        </div>
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
          </>
    )
}

export default Home


