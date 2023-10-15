import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { animated, useSpring } from '@react-spring/web';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import ReactQuill from 'react-quill';

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "700px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddObjects({ openR2, setOpenR2, name, row }) {

  const [valueEng, setValueEng] = useState('');
  const [valueArb, setValueArb] = useState('');

  const [langues, setLangues] = useState("eng")



  const handleUpdateButton = async (data) => { 

    if(!valueEng){
      alert('ERROR, Please Add English Text')
      return;
    }

    console.log(valueEng, valueArb )
    if(!valueArb){
      alert('ERROR, Please Add Arabic Text')
      return;
    } 

      axios.post(`http://localhost:5000/api/v1/${name}/${row}/post`,
      {
        eng: valueEng,
        arb: valueArb
      })
      .then(res => {
        if (res) {
          setOpenR2(false)
          setValueEng('')
          setValueArb('')
          alert('Create successfully')
        }
      }); 
   
   

  };


  const handleClose = () => setOpenR2(false);
  const handleOnSelectLen = (data) => {
    setLangues(data)
  }

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={openR2}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={openR2}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Add a new Object
            </Typography>

            <div className='mt-3 mb-2'>
              <label>Langues</label>
              <select id="langues" name="langues" onClick={e => (handleOnSelectLen(e.target.value))}>
                <option value="eng" >English</option>
                <option value="arb">Arabic</option>
              </select>
            </div>

            <Box>
              {
                langues === "eng" && (
                  <>
                    <Typography id="spring-modal-title" variant="h6" component="h2">
                      English Text
                    </Typography>

                    <ReactQuill theme="snow" className='quill_size'
                       defaultValue={valueEng}
                      onChange={setValueEng}
                    />
                  </>
                )
              }

              {
                langues === "arb" && (
                  <>
                    <Typography id="spring-modal-title" variant="h6" component="h2">
                      Arabic Text
                    </Typography>
                    <ReactQuill theme="snow" className='quill_size'
                       defaultValue={valueArb}
                      onChange={setValueArb}
                    />
                  </> 
                )
              } 


            </Box>
            <Box className="pt-5 pb-4"><button className='button-handle-add' onClick={handleUpdateButton}> Add Object </button></Box>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
