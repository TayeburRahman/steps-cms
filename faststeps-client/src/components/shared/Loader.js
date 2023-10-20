 import React from 'react';
import loader from '../../assets/loader.gif';

function Loader() {
    return (
        <div className='loading_box'>  
             <img className='loading_gif' src={loader} alt="loading..." loading="lazy" /> 
        </div>
    )
}

export default Loader
