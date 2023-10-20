import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { animated, useSpring } from '@react-spring/web';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';

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

export default function AddPackageOffer({ openAdd, setOpenAdd, packages, id }) {

  const [valueEng, setValueEng] = useState('');
  const [valueArb, setValueArb] = useState('');
 



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

      axios.post(`http://localhost:5000/api/v1/service/offer/add/${id}`,
      {
        eng: valueEng,
        arb: valueArb
      })
      .then(res => {
        if (res) {
          setOpenAdd(false)
          setValueEng('')
          setValueArb('')
          alert('Create successfully')
        }
      }); 
   
   

  };


  const handleClose = () => setOpenAdd(false);
 

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={openAdd}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={openAdd}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Add a new Offer
            </Typography>  
            <Box>

               <div
                            className='text-center package-text'
                            dangerouslySetInnerHTML={{
                                __html: packages
                            }}>
                        </div>

            <h6 className='mt-4'>Type English Text</h6> 
            <input type="text"  
                    className='input_offer' 
                    onChange={e=> setValueEng(e.target.value)} 
                     />  
             
             <h6 className='mt-2'>Type Arabic Text</h6>
            <input type="text"  
                    className='input_offer' 
                    onChange={e=> setValueArb(e.target.value)}
                     />  

            </Box>
            <Box className="pt-2 pb-4"><button className='button-handle-add' onClick={handleUpdateButton}> Add offer </button></Box>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
