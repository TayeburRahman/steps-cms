import axios from "axios";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';


const modules = {
    toolbar: [
      [{ header: [1, 2,3,4,5, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
      ['link', 'image'],
    ],
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'size',
    'video',
    'align',
    'background',
    'direction',
    'code-block',
    'code',
    ];
    

function ContactUpdate({langues, content, name, state, setStatus}) {
    const [value, setValue] = useState(''); 
 

    const handleUpdateButton = async (data) => {      
        axios.put(`http://localhost:5000/api/v1/contact/${name}/${langues}/update`,  
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
             modules={modules} formats={formats}
             defaultValue={content}
             onChange={setValue} 
             />

            </div>
            <div className="mt-5 pt-2 pb-4"><button className='button-handle' onClick={handleUpdateButton}> Updates </button></div>
            
        </div>
    )
}

export default ContactUpdate
