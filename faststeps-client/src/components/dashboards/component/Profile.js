import { Typography } from "@mui/material";
import React from "react";
import email from "../../../assets/email.svg";
import logo from "../../../assets/profile.avif";
import "../../../components/css/profile.css";


const Profile = () => {   
  const localAuth = localStorage?.getItem("auth");

  const {user}  = JSON.parse(localAuth); 
   
  return (
  
       <div className="w-100" > 
        <div className="profile_bg_top">
           <div row className="details_box ">
             <div className=" p-3 row">
             <div className="d-flex property_end col-sm-12 col-md-6 col-lg-6">
               <img src={logo} alt="logo" className="profile_image" />
               <div className="d-grid ml-1 " >
                <Typography className="profile_title"  >
                       {user && user?.displayName}
                </Typography>
                <div className="d-flex mt-1">
                <img src={email} alt="logo" className="noto_rocket" />
                <Typography className="email_text mt-1"  >
                       {user && user?.email}
                </Typography>
                </div>
                
             </div>
             </div> 
          
             </div> 
           </div>
        </div>

        <div className="mt-5">
            <div className=" p-3 row mt-5">
                <div className=" col-sm-12 col-md-6 col-lg-6 mt-3">
                  <Typography className="phone_text">User Role</Typography> 
                  <Typography className="show_p_number">{user && user?.role} </Typography> 
                </div>

                <div className=" col-sm-12 col-md-6 col-lg-6 mt-3">
                  <Typography className="phone_text">Email Address</Typography> 
                  <Typography className="show_p_number">{user && user?.email}</Typography> 
                </div>
             </div> 
        </div> 

       </div> 
  );
};

export default Profile;