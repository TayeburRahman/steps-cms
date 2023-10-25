import axios from "axios";
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

const modules = {
    toolbar: [
      [{ header: [ 2,3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
   
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

function EditPackages({langues, editData, id, setEditId, setPackageData}) {
    const [valueEng, setValueEng] = useState(''); 
    const [valueArb, setValueArb] = useState(''); 
    

    useEffect(()=>{
        setValueEng( editData?.packageEng)
        setValueArb(editData?.packageArb)
    },[id])

    console.log("editData", editData?.packageEng)
 

    const handleUpdateButton = async (data) => {    

        const updated ={
            eng: valueEng,
            arb: valueArb
        } 
        axios.put(`http://localhost:5000/api/v1/service/package/${id}/update`,  
        {
            eng: editData?.packageEng,
            arb: editData?.packageArb,
            updated
        })
          .then(res =>{ 
            if(res){ 
                setPackageData(null)
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
                    modules={modules} formats={formats}
                    defaultValue={editData?.packageEng}
                    onChange={setValueEng} 
                    />
                )
             }

             {
                langues === "arb" && (
                    <ReactQuill theme="snow" style={{height:"100px"}}  
                    modules={modules} formats={formats}
                    defaultValue={editData?.packageArb}
                    onChange={setValueArb} 
                    />
                )
             }

            </div>
            <div className="mt-5 pt-4 pb-4"><button className='button-handle' onClick={handleUpdateButton}> Updates </button></div>
            
        </div>
    )
}

export default EditPackages
