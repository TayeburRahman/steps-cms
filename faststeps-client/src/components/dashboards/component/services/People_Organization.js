import { Box } from '@mui/material'
import { default as React, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useGetPeopleContentQuery } from '../../../../features/auth/authApi'
import AddObjects from './AddObjects'
import TextUpdate from './TextUpdate'
import UpdateObject from './UpdateObject'

function People_Organization() {
    const [openR2, setOpenR2] = useState(false);
    const [handelBanner, setHandelBanner] = useState(true)
    const [languesBanner, setLanguesBanner] = useState("eng")
    const [bannerData, setBannerData] = useState()

    const [languesR2, setLanguesR2] = useState("eng")
    const [r2Idx, setR2Idx] = useState()
    const [r2IdxEdit, setR2IdxEdit] = useState()
    const [objectData, setObjectData] = useState()
 

    useGetPeopleContentQuery();
    const { people_content } = useSelector((state) => state.auth);
 

    useEffect(() => {
        if (languesBanner === "eng") {
            setBannerData(people_content?.r1Content?.eng)
        } else {
            setBannerData(people_content?.r1Content?.arb)
        }
    }, [languesBanner, handelBanner, people_content])
    const handleOnSelectBanner = (data) => {
        setLanguesBanner(data)
    }

    const handleOnSelectObjetR2 = (data, idx) => {
        setLanguesR2(data)
        setR2Idx(idx)
    }
    const handleEditObject = (data, idx) => {

        setObjectData(data)
        setR2IdxEdit(idx)
    }
 
    return (
        <div className="w-100"> 

       <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
           <Container className=''>
               <div className='banner-content '>
                   <p className='pt-2'>People.. R-1 settings Text(H2, Normal)</p>
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
                               !handelBanner && <TextUpdate langues={languesBanner} content={bannerData} name="people" row="r1" status={handelBanner} setStatus={setHandelBanner} />
                           }
                       </>
                   </div>
               </div>
           </Container> 
       </Box> 

       <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <p className='pt-2'>People.. R-2 settings Text(H3, Normal)</p>

                    <div className=' text-center mb-2 border-settings'>
                        <button className='button-handle-add' onClick={e => setOpenR2(true)}> Create New </button>
                        <AddObjects openR2={openR2} setOpenR2={setOpenR2} name="people" row="r2" />
                    </div>

                    <div className='row'>
                        {
                            people_content?.r2Content?.map((data, idx) => (
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
                                                r2IdxEdit === idx && <UpdateObject langues={languesR2} objectData={objectData} name="people" row="r2"  setStatus={setR2IdxEdit} />
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

export default People_Organization
