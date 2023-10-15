import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useGetConsultationContentQuery } from '../../../../features/auth/authApi'
import AddObjects from './AddObjects'
import TextUpdate from './TextUpdate'
import UpdateObject from './UpdateObject'

function Consultation_Services() {
    const [openR2, setOpenR2] = useState(false);

    const [handelBanner, setHandelBanner] = useState(true)
    const [languesBanner, setLanguesBanner] = useState("eng")
    const [bannerData, setBannerData] = useState()

    const [handel3rdCon, setHandel3rdCon] = useState(true)
    const [langues3rdCon, setLangues3rdCon] = useState("eng")
    const [h3rdConData, set3rdConData] = useState()

    const [handel4thCon, setHandel4thCon] = useState(true)
    const [langues4thCon, setLangues4thCon] = useState("eng")
    const [h4thConData, set4thConData] = useState()

    const [languesR2, setLanguesR2] = useState("eng")
    const [r2Idx, setR2Idx] = useState()
    const [r2IdxEdit, setR2IdxEdit] = useState()
    const [objectData, setObjectData] = useState()
    const [languesR5, setLanguesR5] = useState("eng")
    const [r5Idx, setR5Idx] = useState()
    const [r5IdxEdit, setR5IdxEdit] = useState()




    useGetConsultationContentQuery();
    const { consul_content } = useSelector((state) => state.auth);


    useEffect(() => {
        if (languesBanner === "eng") {
            setBannerData(consul_content?.r1Content?.eng)
        } else {
            setBannerData(consul_content?.r1Content?.arb)
        }
    }, [languesBanner, handelBanner, consul_content])
    const handleOnSelectBanner = (data) => {
        setLanguesBanner(data)
    }
    // ----

    // ---
    useEffect(() => {
        if (langues3rdCon === "eng") {
            set3rdConData(consul_content?.r3Content?.eng)
        } else {
            set3rdConData(consul_content?.r3Content?.arb)
        }
    }, [langues3rdCon, handel3rdCon, consul_content])

    const handleOnSelect3rdCon = (data) => {
        setLangues3rdCon(data)
    }

    // ---
    useEffect(() => {
        if (langues4thCon === "eng") {
            set4thConData(consul_content?.r4Content?.eng)
        } else {
            set4thConData(consul_content?.r4Content?.arb)
        }
    }, [langues4thCon, handel4thCon, consul_content])

    const handleOnSelect4thCon = (data) => {
        setLangues4thCon(data)
    }

    const handleOnSelectObjetR2 = (data, idx) => {
        setLanguesR2(data)
        setR2Idx(idx)
    }
    const handleEditObject = (data, idx) => {

        setObjectData(data)
        setR2IdxEdit(idx)
    }

    const handleOnSelectObjetR5 = (data, idx) => {
        setLanguesR5(data)
        setR5Idx(idx)
    }
    const handleEditObject5 = (data, idx) => {

        setObjectData(data)
        setR5IdxEdit(idx)
    }

 










    return (
        <div className="w-100">
            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>Consult.. R-1 settings Text(H2, Normal) </p>
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
                                    !handelBanner && <TextUpdate langues={languesBanner} content={bannerData} name="consultation" row="r1" status={handelBanner} state={r2IdxEdit} setStatus={setHandelBanner} />
                                }
                            </>
                        </div>
                    </div>
                </Container> 
            </Box> 

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <p className='pt-2'>Consult.. R-2 settings Text(H3, Normal)</p>

                    <div className=' text-center mb-2 border-settings'>
                        <button className='button-handle-add' onClick={e => setOpenR2(true)}> Create New </button>
                        <AddObjects openR2={openR2} setOpenR2={setOpenR2} name="consultation" row="r2" />
                    </div>

                    <div className='row '>
                        {
                            consul_content?.r2Content?.map((data, idx) => (
                                <div key={idx} className='col-sm-12 col-md-6 col-lg-6 pb-1 pt-1'>
                                    <div className='row object-settings'>
                                        <div className='col-sm-12 col-md-6 col-lg-6 pb-1 pt-1 d-flex-c'>
                                            {
                                                r2IdxEdit !== idx && <button className='button-handle' onClick={(e) => handleEditObject(data, idx)}> Edit </button>
                                            }
                                            {
                                                r2IdxEdit === idx && <button className='button-handle' onClick={(e) => handleEditObject(null)} > Cancel </button>
                                            }
                                        </div>
                                        <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                            {r2IdxEdit === idx ? <></> :
                                                <div>
                                                    <label>Langues</label>
                                                    <select id="langues" name="langues" onClick={e => (handleOnSelectObjetR2(e.target.value, idx))}>
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

                                                r2IdxEdit === idx ? <> </> : <div
                                                    className='text-left'
                                                    dangerouslySetInnerHTML={{
                                                        __html: r2Idx === idx && languesR2 === "arb" ? data?.arb : data?.eng,
                                                    }}>
                                                </div>

                                            }
                                        </>
                                        <>
                                            {
                                                r2IdxEdit === idx && <UpdateObject langues={languesR2} objectData={objectData} name="consultation" row="r2"  setStatus={setR2IdxEdit} />
                                            }
                                        </>
                                    </div>
                                </div>
                            ))
                        }

                    </div> 

                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>Consult.. R-3 settings Text(H2, Normal)</p>
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
                                    !handel3rdCon && <TextUpdate langues={langues3rdCon} content={h3rdConData} name="consultation" row="r3" status={handel3rdCon} setStatus={setHandel3rdCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className='banner-content '>
                        <p className='pt-2'>Consult.. R-4 settings Text(H2, Normal)</p>
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
                                    !handel4thCon && <TextUpdate langues={langues4thCon} content={h4thConData} name="consultation" row="r4" status={handel4thCon} setStatus={setHandel4thCon} />
                                }
                            </>
                        </div>
                    </div>
                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <p className='pt-2'>Consult.. R-5 settings Text(H3, Normal)</p>

                    <div className=' text-center mb-2 border-settings'>
                        <button className='button-handle-add' onClick={e => setOpenR2(true)}> Create New </button>
                        <AddObjects openR2={openR2} setOpenR2={setOpenR2} name="consultation" row="r5" />
                    </div>

                    <div className='row '>
                        {
                            consul_content?.r5Content?.map((data, idx) => (
                                <div key={idx} className='col-sm-12 col-md-6 col-lg-6 pb-1 pt-1'>
                                    <div className='row object-settings'>
                                        <div className='col-sm-12 col-md-6 col-lg-6 pb-1 pt-1 d-flex-c'>
                                            {
                                                r5IdxEdit !== idx && <button className='button-handle' onClick={(e) => handleEditObject5(data, idx)}> Edit </button>
                                            }
                                            {
                                                r5IdxEdit === idx && <button className='button-handle' onClick={(e) => handleEditObject5(null)} > Cancel </button>
                                            }
                                        </div>
                                        <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                            {r5IdxEdit === idx ? <></> :
                                                <div>
                                                    <label>Langues</label>
                                                    <select id="langues" name="langues" onClick={e => (handleOnSelectObjetR5(e.target.value, idx))}>
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

                                                r5IdxEdit === idx ? <> </> : <div
                                                    className='text-left'
                                                    dangerouslySetInnerHTML={{
                                                        __html: r5Idx === idx && languesR5 === "arb" ? data?.arb : data?.eng,
                                                    }}>
                                                </div>

                                            }
                                        </>
                                        <>
                                            {
                                                r5IdxEdit === idx && <UpdateObject langues={languesR5} objectData={objectData} name="consultation" row="r5"  setStatus={setR5IdxEdit} />
                                            }
                                        </>
                                    </div>
                                </div>
                            ))
                        }

                    </div> 

                </Container>

            </Box>

        </div>
    )
}

export default Consultation_Services
