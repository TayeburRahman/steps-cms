import { Box } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useGetHumanPeoplePackageQuery, useGetRecuitmentPeoplePackageQuery } from '../../../../../features/auth/authApi'
import AddPackageOffer from './AddPackageOffer'
import CreatePeoplePackage from './CreatePeoplePackage'
import EditPackages from './EditPackages'
import UpdateOffer from './UpdateOffer'

function People_package() {
    const [openAdd, setOpenAdd] = useState(false);
    const [openPackage, setOpenPackage] = useState(false);


    const [langues, setLangues] = useState("eng")
    const [rIdx, setIdx] = useState()
    const [idxEdit, setIdxEdit] = useState()
    const [editPackage, setEditPackage] = useState()
    const [editId, setEditId] = useState()
    const [addId, setAddId] = useState()
    const [packagesAdd, setSelectPackage] = useState()
    const [packageData, setPackageData] = useState()




    useGetHumanPeoplePackageQuery()
    useGetRecuitmentPeoplePackageQuery()

    const { human_people, recruitment_people} = useSelector((state) => state.auth);



    const handleOnSelectObjet = (data, idx) => {
        setLangues(data)
        setIdx(idx)
    }
    const handleEditOffer = (id, pkg, idx) => {
        setEditId(id)
        setEditPackage(pkg)
        setIdxEdit(idx)
    }

    const handleOnAddOffer = (id, data) => {
        setAddId(id)
        setSelectPackage(data)
        setOpenAdd(true)
    }
    const handleEditPackage = (id, data) => {
        setEditId(id)
        setPackageData(data)
    }


    const deleteOnAddOffer = (id, data) => {

        axios.put(`http://localhost:5000/api/v1/service/offer/delete/${id}`,
            {
                eng: data?.eng,
                arb: data?.arb
            })
            .then(res => {
                if (res) {
                    alert('Delete successfully')
                }
            });
    }




    return (
        <div className="w-100">

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <div className=' text-center mb-2 border-settings'>
                        <button className='services-button-cu mt-2 mb-2' onClick={e => setOpenPackage(true)}> Create A New Package </button>
                        <CreatePeoplePackage openPackage={openPackage} setOpenPackage={setOpenPackage} name="consul" row="r2" />
                    </div>

                </Container>
            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <h5 className='pt-2 p-bg-100'>Human Resource Management </h5>
                    {
                        human_people && human_people?.map((data, idx) => (
                            <div>

                                <div className=' text-center mb-2 border-settings'>
                                    <button className='button-handle-add' onClick={e => handleOnAddOffer(data?._id, data.package)}> Create New </button>
                                    {data?._id === addId && <AddPackageOffer packages={packagesAdd} openAdd={openAdd} setOpenAdd={setOpenAdd} id={addId} />}
                                </div>
                                <div className='row object-settings'>
                                    <div className='col-sm-12 col-md-6 col-lg-6 pb-1 pt-1 d-flex-c'>
                                        {
                                            data !== packageData && <button className='button-handle' onClick={(e) => handleEditPackage(data?._id, data)}> Edit </button>
                                        }
                                        {
                                            data === packageData && <button className='button-handle' onClick={(e) => handleEditPackage(null)} > Cancel </button>
                                        }
                                    </div>
                                    <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                        {/* {data === packageData ?
                                            <button className='button-handle bg-red' onClick={(e) => deleteOnAddOffer(data?._id)} > delete </button>
                                            : */}
                                            <div>
                                                <label>Langues</label>
                                                <select id="langues" name="langues" onClick={e => (handleOnSelectObjet(e.target.value, data?._id))}>
                                                    <option value="eng" >English</option>
                                                    <option value="arb">Arbi</option>
                                                </select>
                                            </div>
                                        {/* } */}
                                    </div>
                                </div>
                                {
                                    data !== packageData &&
                                    <div
                                        className='text-center package-text pb-4'
                                        dangerouslySetInnerHTML={{
                                            __html: rIdx === data?._id  && langues === "arb" ? data?.packageArb : data?.packageEng
                                        }}>
                                    </div>
                                }

                                <>
                                    {
                                        data === packageData && <EditPackages langues={langues} editData={packageData} id={editId} setEditId={setEditId} setPackageData={setPackageData} />
                                    }
                                </>

                                <div className='row'>
                                    {
                                        data?.offer && data.offer?.map((pkg, idx) => (
                                            <div key={idx} className='col-sm-12 col-md-6 col-lg-6 pb-1 pt-1'>
                                                <div className='row object-settings'>
                                                    <div className='col-sm-12 col-md-6 col-lg-6 pb-1 pt-1 d-flex-c'>
                                                        {
                                                            editPackage !== pkg && <button className='button-handle' onClick={(e) => handleEditOffer(data?._id, pkg, idx)}> Edit </button>
                                                        }
                                                        {
                                                            editPackage === pkg && <button className='button-handle' onClick={(e) => handleEditOffer(null)} > Cancel </button>
                                                        }
                                                    </div>
                                                    <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                                        {editPackage === pkg ?
                                                            <button className='button-handle bg-red' onClick={(e) => deleteOnAddOffer(data?._id, pkg)} > delete </button>
                                                            :
                                                            <div>
                                                                <label>Langues</label>
                                                                <select id="langues" name="langues" onClick={e => (handleOnSelectObjet(e.target.value, idx))}>
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
                                                            editPackage !== pkg && <p className='text-left'>{rIdx === idx && langues === "arb" ? pkg?.arb : pkg?.eng}</p>

                                                        }
                                                    </>
                                                    <>
                                                        {
                                                            editPackage === pkg && <UpdateOffer langues={langues} editId={editId} packages={editPackage} setStatus={setIdxEdit} />
                                                        }
                                                    </>
                                                </div>
                                            </div>
                                        ))}
                                </div> 
                            </div> 
                        ))
                    } 
                </Container>

            </Box>

            <Box sx={{ boxShadow: 1, marginTop: "40px" }} >
                <Container className=''>
                    <h5 className='pt-2 p-bg-100'>Recruitment service</h5>
                    {
                        recruitment_people && recruitment_people?.map((data, idx) => (
                            <div>

                                <div className=' text-center mb-2 border-settings'>
                                    <button className='button-handle-add' onClick={e => handleOnAddOffer(data?._id, data.package)}> Create New </button>
                                    {data?._id === addId && <AddPackageOffer packages={packagesAdd} openAdd={openAdd} setOpenAdd={setOpenAdd} id={addId} />}
                                </div>
                                <div className='row object-settings'>
                                    <div className='col-sm-12 col-md-6 col-lg-6 pb-1 pt-1 d-flex-c'>
                                        {
                                            data !== packageData && <button className='button-handle' onClick={(e) => handleEditPackage(data?._id, data)}> Edit </button>
                                        }
                                        {
                                            data === packageData && <button className='button-handle' onClick={(e) => handleEditPackage(null)} > Cancel </button>
                                        }
                                    </div>
                                    <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                        {/* {data === packageData ?
                                            <button className='button-handle bg-red' onClick={(e) => deleteOnAddOffer(data?._id)} > delete </button>
                                            : */}
                                            <div>
                                                <label>Langues</label>
                                                <select id="langues" name="langues" onClick={e => (handleOnSelectObjet(e.target.value, data?._id))}>
                                                    <option value="eng" >English</option>
                                                    <option value="arb">Arbi</option>
                                                </select>
                                            </div>
                                        {/* } */}
                                    </div>
                                </div>
                                {
                                    data !== packageData &&
                                    <div
                                        className='text-center package-text pb-4'
                                        dangerouslySetInnerHTML={{
                                            __html: rIdx === data?._id  && langues === "arb" ? data?.packageArb : data?.packageEng
                                        }}>
                                    </div>
                                }

                                <>
                                    {
                                        data === packageData && <EditPackages langues={langues} editData={packageData} id={editId} setEditId={setEditId} setPackageData={setPackageData} />
                                    }
                                </>

                                <div className='row'>
                                    {
                                        data?.offer && data.offer?.map((pkg, idx) => (
                                            <div key={idx} className='col-sm-12 col-md-6 col-lg-6 pb-1 pt-1'>
                                                <div className='row object-settings'>
                                                    <div className='col-sm-12 col-md-6 col-lg-6 pb-1 pt-1 d-flex-c'>
                                                        {
                                                            editPackage !== pkg && <button className='button-handle' onClick={(e) => handleEditOffer(data?._id, pkg, idx)}> Edit </button>
                                                        }
                                                        {
                                                            editPackage === pkg && <button className='button-handle' onClick={(e) => handleEditOffer(null)} > Cancel </button>
                                                        }
                                                    </div>
                                                    <div className='col-sm-12 col-md-6 col-lg-6 d-flex-c'>
                                                        {editPackage === pkg ?
                                                            <button className='button-handle bg-red' onClick={(e) => deleteOnAddOffer(data?._id, pkg)} > delete </button>
                                                            :
                                                            <div>
                                                                <label>Langues</label>
                                                                <select id="langues" name="langues" onClick={e => (handleOnSelectObjet(e.target.value, idx))}>
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
                                                            editPackage !== pkg && <p className='text-left'>{rIdx === idx && langues === "arb" ? pkg?.arb : pkg?.eng}</p>

                                                        }
                                                    </>
                                                    <>
                                                        {
                                                            editPackage === pkg && <UpdateOffer langues={langues} editId={editId} packages={editPackage} setStatus={setIdxEdit} />
                                                        }
                                                    </>
                                                </div>
                                            </div>
                                        ))}
                                </div>



                            </div>

                        ))
                    }


                </Container>

            </Box> 

        </div>
    )
}

export default People_package
