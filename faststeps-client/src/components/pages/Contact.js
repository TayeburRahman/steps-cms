import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import contact_home from '../../assets/contact-home.svg';
import ins from '../../assets/contact-ins.svg';
import link from '../../assets/contact-link.svg';
import tow from '../../assets/contact-tow.svg';
import done from '../../assets/done.svg';
import maps from '../../assets/maps.png';
import { useGetContactContentQuery, usePostContactFormMutation } from '../../features/auth/authApi';
import { useLanguesContext } from '../../hooks/LanguesContext';
import Footer from '../shared/Footer';
import Loader from '../shared/Loader';
import { NavBar } from '../shared/NavBar';

function Contact() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [messageShown, setMessageShown] = useState(false);
    const { contact_content } = useSelector((state) => state.auth);
    const { languesState } = useLanguesContext();
    const [isLoading, setLoader] = useState(false);

    useGetContactContentQuery()
    const [postContactForm, { data: resData, error: responseError }] =
        usePostContactFormMutation();

    const r1Content = contact_content?.r1Content;

    useEffect(() => {
        !contact_content && setLoader(true)
        contact_content && setLoader(false)
    }, [contact_content])

    console.log(resData?.status)

    useEffect(() => {
        if (resData?.status === 'success') {
            setFormSubmitted(true);
            setTimeout(() => setMessageShown(true), 500);
            reset();
        }

    }, [resData])

    const onSubmit = async (data) => {
        await postContactForm(data);

    }

    const handleSuccessClick = () => {
        setMessageShown(false);
        setFormSubmitted(false)
    };
    return (
        <>
            {
                isLoading ? (<Loader />) : (
                    <div>
                        <div className='contact-banner'>
                            <NavBar />
                            <div className='background-overlay-contact '></div>
                            <div className='d-flex banner-about'>
                                <h2>{languesState === "arb" ? "اتصل بنا" : "Contact Us"}</h2>
                            </div>
                        </div>
                        <Container className='d-grid-c'>
                            <div
                                className='text-center text-black-html mx-w7 padding-sm-none mt-3 mb-2 pt-5 pb-5'
                                dangerouslySetInnerHTML={{
                                    __html: languesState === "arb" ? r1Content?.arb : r1Content?.eng,
                                }}>
                            </div>
                        </Container> 

                        <div className="row background-craping ">
                            <div className='col-sm-12 col-md-7 col-lg-7 d-grid-e  mt-5 mb-5' >
                                <div className={`p-3 text-left from-join padding-sm-about jr-w5 ${formSubmitted ? 'hide-lefts' : ''}`}   >
                                    <h2 className='Crafting-lg-text mx-w5'>{languesState === "arb" ? "أرسل لنا رسالة" : "Send us a message"}</h2>
                                    <p className='Crafting-p mx-w5 mt-1'>{languesState === "arb" ? "أرسل رسالة وسنرد عليك في أقرب وقت" : "Send us your resume or portfolio and we’ll respond within hrs."}</p>
                                    <form onSubmit={handleSubmit(onSubmit)} className='jr-w5'>
                                        <input
                                            className="form-control custom-hight mt-4"
                                            type="text"
                                            id="name"
                                            placeholder={languesState === "arb" ? "الاسم الكامل" : "Full Name"}
                                            {...register("name", {
                                                required: "Name is required",
                                            })}
                                        />

                                        <input
                                            className="form-control custom-hight mt-3-md"
                                            type="email"
                                            id="email"
                                            placeholder={languesState === "arb" ? "البريد الإلكتروني" : "Email"}
                                            {...register("email", {
                                                required: "Email is required",
                                            })}
                                        />

                                        <input
                                            className="form-control custom-hight mt-3-md"
                                            type="text"
                                            id="telephone"
                                            placeholder={languesState === "arb" ? "هاتف" : "Telephone"}
                                            {...register("telephone", {
                                                required: "Telephone number is required",
                                            })}
                                        />

                                        <textarea
                                            className="form-control custom-hight-textarea mt-3-md"
                                            type="text"
                                            id="inquiry"
                                            placeholder={languesState === "arb" ? "الاستفسار" : "Inquiry"}
                                            {...register("inquiry", {
                                                required: "Inquiry is required",
                                            })}
                                        />
                                        <div className="mb-22 text-left mt-3-md">
                                            <button
                                                className="submit-button"
                                                type="submit"  >
                                                {languesState === "arb" ? "ارسال" : "Submit"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    id={languesState === "arb" && "contact-form-arb"}
                                    className={`success-message-c w-70 ${messageShown ? 'show' : ''}`}
                                    onClick={handleSuccessClick}>
                                    <img src={done} className='done_img' />
                                    <h2 className='thanks-submit'
                                    >{languesState === "arb" ? "شكرًا على تواصلك معنا سيقوم فريقنا بالرد على استفسارك في أقرب وقت." : "Thank you for reaching out!, Our team will be responding to your inquiry within XX hours."} </h2>
                                </div>
                            </div>

                            <div className='col-sm-12 col-md-5 col-lg-5 pb-5'><img className='background-craping-img' src={contact_home} /></div>
                        </div>

                        <div className="">
                            <div className="row">
                                <div className='col-sm-12 col-md-5 col-lg-5 d-grid-c align_content content-end mt-5'>
                                    <div className='mx-w395'>
                                        <div className='contact-add text-left mt-3 margin-top-fix mb-3 d-flex-contact-add'>
                                            <PlaceIcon className='contact-left-m svg-contact' style={{ color: "#0b3d41", fontSize: "41px" }} />  2413 imam Saud Bin Abdulaziz Bin Mohamed Rd 7997 Al Muraslat Dist. 12463 Riyadh, KSA
                                        </div>
                                        <div className='contact-add text-left mt-3'>
                                            <DraftsIcon className='svg-contact' style={{ color: "#0b3d41", fontSize: "41px" }} />   info@1ststeps.com.sa
                                        </div>

                                        <div className='contact-add text-left mt-3'>
                                            <PhoneIcon className='svg-contact' style={{ color: "#0b3d41", fontSize: "41px" }} /> +966 11244 4505
                                        </div>
                                        <div className='contact-add text-left mt-3'>
                                            <WhatsAppIcon className='svg-contact' style={{ color: "#0b3d41", fontSize: "41px" }} />  +966 54 400 4203
                                        </div>
                                        <div className='contact-add text-left mt-3'>
                                            <PhoneAndroidIcon className='svg-contact' style={{ color: "#0b3d41", fontSize: "41px" }} />  +966 54 400 4203
                                        </div>
                                    </div>

                                    <div className='d-flex text-left w-100  mb-5 icon-contact-img'>
                                        <a href="http:" > <img src={tow} /> </a>
                                        <a href="http:" > <img src={link} /> </a>
                                        <a href="http:" > <img src={ins} /> </a>
                                        <div className='icon-youtub-div'> <YouTubeIcon className='icon-youtub' /></div>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-7 col-lg-7 padding-0'>
                                    <img className='background-craping-img' src={maps} /></div>
                            </div> 
                        </div> 
                        <Footer />
                    </div>
                )
            }
        </>
    )
}

export default Contact
