import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useGetAboutContentQuery } from '../../../../features/auth/authApi'
import AboutUpdate from './AboutUpdate'

function AboutDashboard() {
    const [handelBanner, setHandelBanner] = useState(true)
    const [languesBanner, setLanguesBanner] = useState("eng")
    const [bannerData, setBannerData] = useState()

    const [handel2ndCon, setHandel2ndCon] = useState(true)
    const [langues2ndCon, setLangues2ndCon] = useState("eng")
    const [h2ndConData, set2ndConData] = useState()

    const [handel3rdCon, setHandel3rdCon] = useState(true)
    const [langues3rdCon, setLangues3rdCon] = useState("eng")
    const [h3rdConData, set3rdConData] = useState()

    const [handel4thCon, setHandel4thCon] = useState(true)
    const [langues4thCon, setLangues4thCon] = useState("eng")
    const [h4thConData, set4thConData] = useState()

    const [handel5thCon, setHandel5thCon] = useState(true)
    const [langues5thCon, setLangues5thCon] = useState("eng")
    const [h5thConData, set5thConData] = useState()

    // const [handel6thCon, setHandel6thCon] = useState(true)
    // const [langues6thCon, setLangues6thCon] = useState("eng")
    // const [h6thConData, set6thConData] = useState()
 


    useGetAboutContentQuery();
    const { about_content } = useSelector((state) => state.auth);

    useEffect(() => {
        if (languesBanner === "eng") {
            setBannerData(about_content?.r1Content?.eng)
        } else {
            setBannerData(about_content?.r1Content?.arb)
        }
    }, [languesBanner, handelBanner, about_content])
    const handleOnSelectBanner = (data) => {
        setLanguesBanner(data)
    }
    // ----
    useEffect(() => {
        if (langues2ndCon === "eng") {
            set2ndConData(about_content?.r2Content?.eng)
        } else {
            set2ndConData(about_content?.r2Content?.arb)
        }
    }, [langues2ndCon, handel2ndCon, about_content])

    const handleOnSelect2ndCon = (data) => {
        setLangues2ndCon(data)
    }
    // ---
    useEffect(() => {
        if (langues3rdCon === "eng") {
            set3rdConData(about_content?.r3Content?.eng)
        } else {
            set3rdConData(about_content?.r3Content?.arb)
        }
    }, [langues3rdCon, handel3rdCon, about_content])

    const handleOnSelect3rdCon = (data) => {
        setLangues3rdCon(data)
    }

    // ---
    useEffect(() => {
        if (langues4thCon === "eng") {
            set4thConData(about_content?.r4Content?.eng)
        } else {
            set4thConData(about_content?.r4Content?.arb)
        }
    }, [langues4thCon, handel4thCon, about_content])

    const handleOnSelect4thCon = (data) => {
        setLangues4thCon(data)
    }
    // ---
    useEffect(() => {
        if (langues5thCon === "eng") {
            set5thConData(about_content?.r5Content?.eng)
        } else {
            set5thConData(about_content?.r5Content?.arb)
        }
    }, [langues5thCon, handel5thCon, about_content])

    const handleOnSelect5thCon = (data) => {
        setLangues5thCon(data)
    }

    // ---
    // useEffect(() => {
    //     if (langues6thCon === "eng") {
    //         set6thConData(about_content?.r6Content?.eng)
    //     } else {
    //         set6thConData(about_content?.r6Content?.arb)
    //     }
    // }, [langues6thCon, handel6thCon, about_content])

    // const handleOnSelect6thCon = (data) => {
    //     setLangues6thCon(data)
    // }

 


    //   const [getScanHistory] = useLazyGetScanHistoryQuery();

    console.log(languesBanner)


    return (
        <div className="w-100">
            <Box sx={{ boxShadow: 1 }}  >
                <Typography variant='h6' className='pt-1 pb-1'>About Manage Content</Typography>
            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>1ST Content settings</p>
                        <div className='row border-settings'>
                            <div className='col-sm-12 col-md-6 col-lg-6 pb-2 pt-2 d-flex-c'>
                                {
                                    handelBanner && <button className='button-handle' onClick={(e) => setHandelBanner(false)}> Edit </button>
                                }
                                {
                                    !handelBanner && <button className='button-handle' onClick={(e) => setHandelBanner(true)} > Cancel </button>
                                }
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                {handelBanner &&
                                    <div>
                                        <label>Langues</label>
                                        <select id="langues" name="langues" onClick={e => (handleOnSelectBanner(e.target.value))}>
                                            <option value="eng" >English</option>
                                            <option value="arb">Arbi</option>

                                        </select>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='pb-3 pt-3'>
                            <>
                                {

                                    handelBanner && <div
                                        className='text-left'
                                        dangerouslySetInnerHTML={{
                                            __html: bannerData,
                                        }}>
                                    </div>

                                }
                            </>
                            <>
                                {
                                    !handelBanner && <AboutUpdate langues={languesBanner} content={bannerData} name="1st" status={handelBanner} setStatus={setHandelBanner} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>Second Content settings</p>
                        <div className='row border-settings'>
                            <div className='col-sm-12 col-md-6 col-lg-6 pb-2 pt-2 d-flex-c'>
                                {
                                    handel2ndCon && <button className='button-handle' onClick={(e) => setHandel2ndCon(false)}> Edit </button>
                                }
                                {
                                    !handel2ndCon && <button className='button-handle' onClick={(e) => setHandel2ndCon(true)} > Cancel </button>
                                }
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                {handel2ndCon &&
                                    <div>
                                        <label>Langues</label>
                                        <select id="langues" name="langues" onClick={e => (handleOnSelect2ndCon(e.target.value))}>
                                            <option value="eng" >English</option>
                                            <option value="arb">Arbi</option>

                                        </select>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='pb-3 pt-3'>
                            <>
                                {

                                    handel2ndCon && <div
                                        className='text-left'
                                        dangerouslySetInnerHTML={{
                                            __html: h2ndConData,
                                        }}>
                                    </div>

                                }
                            </>
                            <>
                                {
                                    !handel2ndCon && <AboutUpdate langues={langues2ndCon} content={h2ndConData} name="2nd" status={handel2ndCon} setStatus={setHandel2ndCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>Thead Content settings</p>
                        <div className='row border-settings'>
                            <div className='col-sm-12 col-md-6 col-lg-6 pb-2 pt-2 d-flex-c'>
                                {
                                    handel3rdCon && <button className='button-handle' onClick={(e) => setHandel3rdCon(false)}> Edit </button>
                                }
                                {
                                    !handel3rdCon && <button className='button-handle' onClick={(e) => setHandel3rdCon(true)} > Cancel </button>
                                }
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                {handel3rdCon &&
                                    <div>
                                        <label>Langues</label>
                                        <select id="langues" name="langues" onClick={e => (handleOnSelect3rdCon(e.target.value))}>
                                            <option value="eng" >English</option>
                                            <option value="arb">Arbi</option>

                                        </select>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='pb-3 pt-3'>
                            <>
                                {

                                    handel3rdCon && <div
                                        className='text-left'
                                        dangerouslySetInnerHTML={{
                                            __html: h3rdConData,
                                        }}>
                                    </div>

                                }
                            </>
                            <>
                                {
                                    !handel3rdCon && <AboutUpdate langues={langues3rdCon} content={h3rdConData} name="3rd" status={handel3rdCon} setStatus={setHandel3rdCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>4th Content settings</p>
                        <div className='row border-settings'>
                            <div className='col-sm-12 col-md-6 col-lg-6 pb-2 pt-2 d-flex-c'>
                                {
                                    handel4thCon && <button className='button-handle' onClick={(e) => setHandel4thCon(false)}> Edit </button>
                                }
                                {
                                    !handel4thCon && <button className='button-handle' onClick={(e) => setHandel4thCon(true)} > Cancel </button>
                                }
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                {handel4thCon &&
                                    <div>
                                        <label>Langues</label>
                                        <select id="langues" name="langues" onClick={e => (handleOnSelect4thCon(e.target.value))}>
                                            <option value="eng" >English</option>
                                            <option value="arb">Arbi</option>
                                        </select>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='pb-3 pt-3'>
                            <>
                                {

                                    handel4thCon && <div
                                        className='text-left'
                                        dangerouslySetInnerHTML={{
                                            __html: h4thConData,
                                        }}>
                                    </div>

                                }
                            </>
                            <>
                                {
                                    !handel4thCon && <AboutUpdate langues={langues4thCon} content={h4thConData} name="4th" status={handel4thCon} setStatus={setHandel4thCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>5th Content settings</p>
                        <div className='row border-settings'>
                            <div className='col-sm-12 col-md-6 col-lg-6 pb-2 pt-2 d-flex-c'>
                                {
                                    handel5thCon && <button className='button-handle' onClick={(e) => setHandel5thCon(false)}> Edit </button>
                                }
                                {
                                    !handel5thCon && <button className='button-handle' onClick={(e) => setHandel5thCon(true)} > Cancel </button>
                                }
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                {handel5thCon &&
                                    <div>
                                        <label>Langues</label>
                                        <select id="langues" name="langues" onClick={e => (handleOnSelect5thCon(e.target.value))}>
                                            <option value="eng" >English</option>
                                            <option value="arb">Arbi</option>
                                        </select>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='pb-3 pt-3'>
                            <>
                                {

                                    handel5thCon && <div
                                        className='text-left'
                                        dangerouslySetInnerHTML={{
                                            __html: h5thConData,
                                        }}>
                                    </div>

                                }
                            </>
                            <>
                                {
                                    !handel5thCon && <AboutUpdate langues={langues5thCon} content={h5thConData} name="5th" status={handel5thCon} setStatus={setHandel5thCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            {/* <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>6th Content settings</p>
                        <div className='row border-settings'>
                            <div className='col-sm-12 col-md-6 col-lg-6 pb-2 pt-2 d-flex-c'>
                                {
                                    handel6thCon && <button className='button-handle' onClick={(e) => setHandel6thCon(false)}> Edit </button>
                                }
                                {
                                    !handel6thCon && <button className='button-handle' onClick={(e) => setHandel6thCon(true)} > Cancel </button>
                                }
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                {handel6thCon &&
                                    <div>
                                        <label>Langues</label>
                                        <select id="langues" name="langues" onClick={e => (handleOnSelect6thCon(e.target.value))}>
                                            <option value="eng" >English</option>
                                            <option value="arb">Arbi</option>
                                        </select>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='pb-3 pt-3'>
                            <>
                                {

                                    handel6thCon && <div
                                        className='text-left'
                                        dangerouslySetInnerHTML={{
                                            __html: h6thConData,
                                        }}>
                                    </div>

                                }
                            </>
                            <>
                                {
                                    !handel6thCon && <AboutUpdate langues={langues6thCon} content={h6thConData} name="6th" status={handel6thCon} setStatus={setHandel6thCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>
            </Box> */}

       
 
 



        </div>
    )
}

export default AboutDashboard
