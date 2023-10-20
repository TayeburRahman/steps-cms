import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UpdateOffer({langues, editId, packages, setStatus}) {
    const [valueEng, setValueEng] = useState(''); 
    const [valueArb, setValueArb] = useState(''); 
    

    useEffect(()=>{
        setValueEng( packages?.eng)
        setValueArb(packages?.arb)
    },[packages])

    console.log(valueEng, valueArb)
 

    const handleUpdateButton = async (data) => {    

        const updated ={
            eng: valueEng,
            arb: valueArb
        }
        
        axios.put(`http://localhost:5000/api/v1/service/offer/update/${editId}`,  
        {
            eng: packages?.eng,
            arb: packages?.arb,
            updated
        })
          .then(res =>{ 
            if(res){ 
                setStatus(true)
               alert('Update successfully')  
            }
         });

    };


    return (
        <div>
            <div>
            {
                langues === "eng" && ( 
                    <input type="text"  
                    className='input_offer'
                    defaultValue={packages?.eng}
                    onChange={e=> setValueEng(e.target.value)} 
                     />  
                )
             }

             {
                langues === "arb" && (
                    <input type="text"  
                    className='input_offer'
                    defaultValue={packages?.arb}
                    onChange={e=> setValueArb(e.target.value)}
                     />  
                    
                )
             }

            </div>
            <div className="pt-4 pb-4"><button className='button-handle' onClick={handleUpdateButton}> Updates </button></div>
            
        </div>
    )
}

export default UpdateOffer
