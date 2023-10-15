import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux'
import done from '../../assets/done.svg'
import join_hello from '../../assets/hllo.png'
import join_logo from '../../assets/logo_join.svg'
import { useGetJoinContentQuery } from '../../features/auth/authApi'
import { useLanguesContext } from '../../hooks/LanguesContext'
import Footer from '../shared/Footer'
import { NavBar } from '../shared/NavBar'

function JoinUs() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [messageShown, setMessageShown] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { join_content } = useSelector((state) => state.auth);
    const { languesState } = useLanguesContext();
    useGetJoinContentQuery()

    const r1Content = join_content?.r1Content; 



    const onSubmit = async (e) => {
        // const name = data?.displayName.split(" ");
        // data.set("username", name);
        // if (data?.password !== data?.confirmPassword) {
        //   setError("Password No Match");
        // } else {
        //   setError();
        //   await registration(data);
        // } 
        setFormSubmitted(true);
        setTimeout(() => setMessageShown(true), 500);

    }

    const handleSuccessClick = () => {
        setMessageShown(false);
        setFormSubmitted(false)
    };



    return (
        <div>
            <div className='join-banner'>
                <NavBar />
                <div className='background-overlay-join '></div>
                <div className='d-flex banner-about'>
                    <h2>Join Us</h2>
                </div>
            </div>
            <Container className='pb-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-5 col-lg-5 ps-5 mt-5 padding-sm-none text-left'> 
                        <div
                            className='text-left text-black-html mx-w7 padding-sm-none'
                            dangerouslySetInnerHTML={{
                                __html: languesState === "arb" ? r1Content?.arb : r1Content?.eng,
                            }}>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-7 col-lg-7 pb-4 mt-5 d-flex-c'>
                        <img className='business_img' src={join_logo} />
                    </div>
                </div>
            </Container>



            <div className="row background-craping">
                <div className='col-sm-12 col-md-5 col-lg-5 padding-0 background-position'>
                    <div className='background-overlay-2'> </div>
                    <img className='background-craping-img' src={join_hello} />
                </div>
                <div className='col-sm-12 col-md-7 col-lg-7 d-grid-s'>
                    <div className={`p-3 text-left from-join padding-sm-about mx-80 ${formSubmitted ? 'hide-right' : ''} `}   >
                        <h2 className='Crafting-lg-text mx-w5'>  {languesState === "arb" ? "اعمل معنا" : "Work With Us"} </h2>
                        <p className='Crafting-p mx-w5 mt-1'>{languesState === "arb" ? "أرسل لنا سيرتك الذاتية أو محفظتك وسنرد عليك خلال ساعات." : "Send us your resume or portfolio and we’ll respond within hrs."}</p>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="form-control custom-hight mt-4"
                                type="text"
                                id="name"
                                placeholder="Full Name"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />
                            <input
                                className="form-control custom-hight mt-3-md"
                                type="email"
                                id="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                })}
                            />

                            <input
                                className="form-control custom-hight mt-3-md"
                                type="text"
                                id="telephone"
                                placeholder="Telephone"
                                {...register("telephone", {
                                    required: "Telephone number is required",
                                })}
                            />



                            <input
                                className="form-control custom-hight mt-3-md"
                                type="text"
                                id="company"
                                placeholder="Company (If applicable)"
                                {...register("company")}
                            />



                            <input
                                className="form-control custom-hight mt-3-md"
                                type="text"
                                id="expertise"
                                placeholder="Field of Expertise"
                                {...register("expertise", {
                                    required: "Field of Expertise is required",
                                })}
                            />



                            <textarea
                                className="form-control custom-hight-textarea mt-3-md"
                                type="text"
                                id="cover_letter"
                                placeholder="Cover Letter"
                                {...register("cover_letter", {
                                    required: "Cover Letter is required",
                                })}
                            />
                            <div className="mb-22 text-left mt-3-md">
                                <button
                                    className="submit-button"
                                    type="submit"  >
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>

                    <div
                        className={`success-message w-70 ${messageShown ? 'show' : ''}`}
                        onClick={handleSuccessClick}>
                        <img src={done} className='done_img' />
                        <h2 className='thanks-submit'>  Thank you for your interest in working with us!, We’ll get back to you soon. </h2>
                    </div>
                </div>
            </div>
            <div className='none-join-bg'></div>
            <Footer />
        </div>
    )
}

export default JoinUs
