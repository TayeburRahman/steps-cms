import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/not_found.jpg';

function NotFound() {
    return (
        <div className='notFound_box'> 
            <img className='notfound_gif' src={notFound} alt="loading..." loading="lazy" />
            <Link className='button-88' to="/">Go Back Home</Link> 
        </div>
    )
}

export default NotFound
