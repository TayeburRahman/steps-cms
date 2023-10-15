import axios from "axios";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { useGetHomeContentQuery } from "../../../../features/auth/authApi";

function JoinUpdate({langues, content, name, state, setStatus}) {
    const [value, setValue] = useState(''); 

  
    useGetHomeContentQuery();
 

    const handleUpdateButton = async (data) => {     
        
        axios.put(`http://localhost:5000/api/v1/join/${name}/${langues}/update`,  
        {
            content: value
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
            <ReactQuill theme="snow" style={{height:"220px"}}  
             defaultValue={content}
             onChange={setValue} 
             />

            </div>
            <div className="mt-5 pt-2 pb-4"><button className='button-handle' onClick={handleUpdateButton}> Updates </button></div>
            
        </div>
    )
}

export default JoinUpdate
