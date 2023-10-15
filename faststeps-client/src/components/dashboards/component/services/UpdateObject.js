import axios from "axios";
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

function UpdateObject({langues, objectData, name, row, state, setStatus}) {
    const [valueEng, setValueEng] = useState(''); 
    const [valueArb, setValueArb] = useState(''); 
    

    useEffect(()=>{
        setValueEng( objectData?.eng)
        setValueArb(objectData?.arb)
    },[state])
 

    const handleUpdateButton = async (data) => {    

        const updated ={
            eng: valueEng,
            arb: valueArb
        }
        
        axios.put(`http://localhost:5000/api/v1/${name}/${row}/update`,  
        {
            eng: objectData?.eng,
            arb: objectData?.arb,
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
                    <ReactQuill theme="snow" style={{height:"120px"}}  
                    defaultValue={objectData?.eng}
                    onChange={setValueEng} 
                    />
                )
             }

             {
                langues === "arb" && (
                    <ReactQuill theme="snow" style={{height:"100px"}}  
                    defaultValue={objectData?.arb}
                    onChange={setValueArb} 
                    />
                )
             }

            </div>
            <div className="mt-5 pt-4 pb-4"><button className='button-handle' onClick={handleUpdateButton}> Updates </button></div>
            
        </div>
    )
}

export default UpdateObject
