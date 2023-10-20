import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useGetJoinContentQuery } from '../../../../features/auth/authApi'
import HandleUpdate from './JoinUpdate'

function JoinDashboard() {
    const [handelBanner, setHandelBanner] = useState(true)
    const [languesBanner, setLanguesBanner] = useState("eng")
    const [bannerData, setBannerData] = useState()

    const [handel2ndCon, setHandel2ndCon] = useState(true)
    const [langues2ndCon, setLangues2ndCon] = useState("eng")
    const [h2ndConData, set2ndConData] = useState()

    // const [handel3rdCon, setHandel3rdCon] = useState(true)
    // const [langues3rdCon, setLangues3rdCon] = useState("eng")
    // const [h3rdConData, set3rdConData] = useState()

 


    useGetJoinContentQuery();
    const { join_content } = useSelector((state) => state.auth);

    useEffect(() => {
        if (languesBanner === "eng") {
            setBannerData(join_content?.r1Content?.eng)
        } else {
            setBannerData(join_content?.r1Content?.arb)
        }
    }, [languesBanner, handelBanner, join_content])
    const handleOnSelectBanner = (data) => {
        setLanguesBanner(data)
    }
    // ----
    useEffect(() => {
        if (langues2ndCon === "eng") {
            set2ndConData(join_content?.r2Content?.eng)
        } else {
            set2ndConData(join_content?.r2Content?.arb)
        }
    }, [langues2ndCon, handel2ndCon, join_content])

    const handleOnSelect2ndCon = (data) => {
        setLangues2ndCon(data)
    }
    // ---
    // useEffect(() => {
    //     if (langues3rdCon === "eng") {
    //         set3rdConData(join_content?.r3Content?.eng)
    //     } else {
    //         set3rdConData(join_content?.r3Content?.arb)
    //     }
    // }, [langues3rdCon, handel3rdCon, join_content])

    // const handleOnSelect3rdCon = (data) => {
    //     setLangues3rdCon(data)
    // }
 
 


    return (
        <div className="w-100">
            <Box sx={{ boxShadow: 1 }}  >
                <Typography variant='h6' className='pt-1 pb-1'>Join Manage Content</Typography>
            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>1st Content settings</p>
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
                                    !handelBanner && <HandleUpdate langues={languesBanner} content={bannerData} name="1st" status={handelBanner} setStatus={setHandelBanner} />
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
                                    !handel2ndCon && <HandleUpdate langues={langues2ndCon} content={h2ndConData} name="2nd" status={handel2ndCon} setStatus={setHandel2ndCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            {/* <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
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
                                    !handel3rdCon && <HandleUpdate langues={langues3rdCon} content={h3rdConData} name="3rd" status={handel3rdCon} setStatus={setHandel3rdCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box> */}

             
 



        </div>
    )
}

export default JoinDashboard
