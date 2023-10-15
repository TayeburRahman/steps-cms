import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useGetHomeContentQuery } from '../../../../features/auth/authApi'
import HandleUpdate from './HandleUpdate'

function HomeDashboard() {
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

    const [handel6thCon, setHandel6thCon] = useState(true)
    const [langues6thCon, setLangues6thCon] = useState("eng")
    const [h6thConData, set6thConData] = useState()

    const [handel7thCon, setHandel7thCon] = useState(true)
    const [langues7thCon, setLangues7thCon] = useState("eng")
    const [h7thConData, set7thConData] = useState()

    const [handel8thCon, setHandel8thCon] = useState(true)
    const [langues8thCon, setLangues8thCon] = useState("eng")
    const [h8thConData, set8thConData] = useState()

    const [handel9thCon, setHandel9thCon] = useState(true)
    const [langues9thCon, setLangues9thCon] = useState("eng")
    const [h9thConData, set9thConData] = useState()

    const [handel10thCon, setHandel10thCon] = useState(true)
    const [langues10thCon, setLangues10thCon] = useState("eng")
    const [h10thConData, set10thConData] = useState()


    useGetHomeContentQuery();
    const { home_content } = useSelector((state) => state.auth);

    useEffect(() => {
        if (languesBanner === "eng") {
            setBannerData(home_content?.banner?.eng)
        } else {
            setBannerData(home_content?.banner?.arb)
        }
    }, [languesBanner, handelBanner, home_content])
    const handleOnSelectBanner = (data) => {
        setLanguesBanner(data)
    }
    // ----
    useEffect(() => {
        if (langues2ndCon === "eng") {
            set2ndConData(home_content?.r2Content?.eng)
        } else {
            set2ndConData(home_content?.r2Content?.arb)
        }
    }, [langues2ndCon, handel2ndCon, home_content])

    const handleOnSelect2ndCon = (data) => {
        setLangues2ndCon(data)
    }
    // ---
    useEffect(() => {
        if (langues3rdCon === "eng") {
            set3rdConData(home_content?.r3Content?.eng)
        } else {
            set3rdConData(home_content?.r3Content?.arb)
        }
    }, [langues3rdCon, handel3rdCon, home_content])

    const handleOnSelect3rdCon = (data) => {
        setLangues3rdCon(data)
    }

    // ---
    useEffect(() => {
        if (langues4thCon === "eng") {
            set4thConData(home_content?.r4Content?.eng)
        } else {
            set4thConData(home_content?.r4Content?.arb)
        }
    }, [langues4thCon, handel4thCon, home_content])

    const handleOnSelect4thCon = (data) => {
        setLangues4thCon(data)
    }
    // ---
    useEffect(() => {
        if (langues5thCon === "eng") {
            set5thConData(home_content?.r5Content?.eng)
        } else {
            set5thConData(home_content?.r5Content?.arb)
        }
    }, [langues5thCon, handel5thCon, home_content])

    const handleOnSelect5thCon = (data) => {
        setLangues5thCon(data)
    }

    // ---
    useEffect(() => {
        if (langues6thCon === "eng") {
            set6thConData(home_content?.r6Content?.eng)
        } else {
            set6thConData(home_content?.r6Content?.arb)
        }
    }, [langues6thCon, handel6thCon, home_content])

    const handleOnSelect6thCon = (data) => {
        setLangues6thCon(data)
    }


    // ---
    useEffect(() => {
        if (langues7thCon === "eng") {
            set7thConData(home_content?.r7Content?.eng)
        } else {
            set7thConData(home_content?.r7Content?.arb)
        }
    }, [langues7thCon, handel7thCon, home_content])

    const handleOnSelect7thCon = (data) => {
        setLangues7thCon(data)
    }


    // ---
    useEffect(() => {
        if (langues8thCon === "eng") {
            set8thConData(home_content?.r8Content?.eng)
        } else {
            set8thConData(home_content?.r8Content?.arb)
        }
    }, [langues8thCon, handel8thCon, home_content])

    const handleOnSelect8thCon = (data) => {
        setLangues8thCon(data)
    }

    // ---
    useEffect(() => {
        if (langues9thCon === "eng") {
            set9thConData(home_content?.r9Content?.eng)
        } else {
            set9thConData(home_content?.r9Content?.arb)
        }
    }, [langues9thCon, handel9thCon, home_content])

    const handleOnSelect9thCon = (data) => {
        setLangues9thCon(data)
    }

        // ---
        useEffect(() => {
            if (langues10thCon === "eng") {
                set10thConData(home_content?.r10Content?.eng)
            } else {
                set10thConData(home_content?.r10Content?.arb)
            }
        }, [langues10thCon, handel10thCon, home_content])
    
        const handleOnSelect10thCon = (data) => {
            setLangues10thCon(data)
        }


    //   const [getScanHistory] = useLazyGetScanHistoryQuery();

    console.log(languesBanner)


    return (
        <div className="w-100">
            <Box sx={{ boxShadow: 1 }}  >
                <Typography variant='h6' className='pt-1 pb-1'>Home Manage Content</Typography>
            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>Banner Content settings</p>
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
                                    !handelBanner && <HandleUpdate langues={languesBanner} content={bannerData} name="banner" status={handelBanner} setStatus={setHandelBanner} />
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
                                    !handel2ndCon && <HandleUpdate langues={langues2ndCon} content={h2ndConData} name="second" status={handel2ndCon} setStatus={setHandel2ndCon} />
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
                                    !handel3rdCon && <HandleUpdate langues={langues3rdCon} content={h3rdConData} name="3rd" status={handel3rdCon} setStatus={setHandel3rdCon} />
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
                                    !handel4thCon && <HandleUpdate langues={langues4thCon} content={h4thConData} name="4th" status={handel4thCon} setStatus={setHandel4thCon} />
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
                                    !handel5thCon && <HandleUpdate langues={langues5thCon} content={h5thConData} name="5th" status={handel5thCon} setStatus={setHandel5thCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
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
                                    !handel6thCon && <HandleUpdate langues={langues6thCon} content={h6thConData} name="6th" status={handel6thCon} setStatus={setHandel6thCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>
            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>7th Content settings</p>
                        <div className='row border-settings'>
                            <div className='col-sm-12 col-md-6 col-lg-6 pb-2 pt-2 d-flex-c'>
                                {
                                    handel7thCon && <button className='button-handle' onClick={(e) => setHandel7thCon(false)}> Edit </button>
                                }
                                {
                                    !handel7thCon && <button className='button-handle' onClick={(e) => setHandel7thCon(true)} > Cancel </button>
                                }
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                {handel7thCon &&
                                    <div>
                                        <label>Langues</label>
                                        <select id="langues" name="langues" onClick={e => (handleOnSelect7thCon(e.target.value))}>
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

                                    handel7thCon && <div
                                        className='text-left'
                                        dangerouslySetInnerHTML={{
                                            __html: h7thConData,
                                        }}>
                                    </div>

                                }
                            </>
                            <>
                                {
                                    !handel7thCon && <HandleUpdate langues={langues7thCon} content={h7thConData} name="7th" status={handel7thCon} setStatus={setHandel7thCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>8th Content settings</p>
                        <div className='row border-settings'>
                            <div className='col-sm-12 col-md-6 col-lg-6 pb-2 pt-2 d-flex-c'>
                                {
                                    handel8thCon && <button className='button-handle' onClick={(e) => setHandel8thCon(false)}> Edit </button>
                                }
                                {
                                    !handel8thCon && <button className='button-handle' onClick={(e) => setHandel8thCon(true)} > Cancel </button>
                                }
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                {handel8thCon &&
                                    <div>
                                        <label>Langues</label>
                                        <select id="langues" name="langues" onClick={e => (handleOnSelect8thCon(e.target.value))}>
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

                                    handel8thCon && <div
                                        className='text-left'
                                        dangerouslySetInnerHTML={{
                                            __html: h8thConData,
                                        }}>
                                    </div>

                                }
                            </>
                            <>
                                {
                                    !handel8thCon && <HandleUpdate langues={langues8thCon} content={h8thConData} name="8th" status={handel8thCon} setStatus={setHandel8thCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>9h Content settings</p>
                        <div className='row border-settings'>
                            <div className='col-sm-12 col-md-6 col-lg-6 pb-2 pt-2 d-flex-c'>
                                {
                                    handel9thCon && <button className='button-handle' onClick={(e) => setHandel9thCon(false)}> Edit </button>
                                }
                                {
                                    !handel9thCon && <button className='button-handle' onClick={(e) => setHandel9thCon(true)} > Cancel </button>
                                }
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                {handel9thCon &&
                                    <div>
                                        <label>Langues</label>
                                        <select id="langues" name="langues" onClick={e => (handleOnSelect9thCon(e.target.value))}>
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

                                    handel9thCon && <div
                                        className='text-left'
                                        dangerouslySetInnerHTML={{
                                            __html: h9thConData,
                                        }}>
                                    </div>

                                }
                            </>
                            <>
                                {
                                    !handel9thCon && <HandleUpdate langues={langues9thCon} content={h9thConData} name="9th" status={handel9thCon} setStatus={setHandel9thCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>10h Content settings</p>
                        <div className='row border-settings'>
                            <div className='col-sm-12 col-md-6 col-lg-6 pb-2 pt-2 d-flex-c'>
                                {
                                    handel10thCon && <button className='button-handle' onClick={(e) => setHandel10thCon(false)}> Edit </button>
                                }
                                {
                                    !handel10thCon && <button className='button-handle' onClick={(e) => setHandel10thCon(true)} > Cancel </button>
                                }
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                {handel10thCon &&
                                    <div>
                                        <label>Langues</label>
                                        <select id="langues" name="langues" onClick={e => (handleOnSelect10thCon(e.target.value))}>
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

                                    handel10thCon && <div
                                        className='text-left'
                                        dangerouslySetInnerHTML={{
                                            __html: h10thConData,
                                        }}>
                                    </div>

                                }
                            </>
                            <>
                                {
                                    !handel10thCon && <HandleUpdate langues={langues10thCon} content={h10thConData} name="10th" status={handel10thCon} setStatus={setHandel10thCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>



        </div>
    )
}

export default HomeDashboard
