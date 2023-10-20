import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useGetConsultationContentQuery } from '../../../../../features/auth/authApi';

function Packages() {
    useGetConsultationContentQuery();

    const {pathname} = useLocation()

    console.log(pathname)
    return (
        <div className='w-100'>

            <Box sx={{ boxShadow: 1 }}  >
                <Typography variant='h6' className='pt-1 pb-1'>Services Manage Package</Typography>
            </Box>

            <Box sx={{ boxShadow: 1 }} className="mt-4" >
                <div className='nested-routing-db row content-center'>
                    <div className='col-sm-12 col-md-4 col-lg-2 routing-ser' id={pathname === "/dashboard/package" &&"bg-change-route"} >  <Link className='routing_n' to=""><p className='p-route'>Offices and Shared Working Spaces</p></Link> </div>
                    <div className='col-sm-12 col-md-4 col-lg-2 routing-ser' id={pathname === "/dashboard/package/consultation_services" &&"bg-change-route"}>  <Link className='routing_n' to="consultation_services"><p className='p-route'>Consultation Services</p> </Link> </div>
                    {/* <div className='col-sm-12 col-md-4 col-lg-2 routing-ser' id={pathname === "/dashboard/package/offices_services" &&"bg-change-route"}>  <Link className='routing_n' to="offices_services"><p className='p-route'>Food & Beverage</p></Link> </div> */}
                    <div className='col-sm-12 col-md-4 col-lg-2 routing-ser' id={pathname === "/dashboard/package/people_organization" &&"bg-change-route"}>  <Link className='routing_n' to="people_organization"><p className='p-route'>People & Organization</p></Link> </div>
                    <div className='col-sm-12 col-md-4 col-lg-2 routing-ser' id={pathname === "/dashboard/package/financial_Management" &&"bg-change-route"}>  <Link className='routing_n' to="financial_Management"><p className='p-route'>Financial Management</p></Link> </div>
                </div>
                <div>
                    <Outlet />
                </div>
            </Box>

        </div>
    )
}

export default Packages
