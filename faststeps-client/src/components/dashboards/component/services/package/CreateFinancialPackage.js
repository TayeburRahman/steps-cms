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

export default function CreateFinancialPackage({ openPackage, setOpenPackage }) {

    const [valueEng, setValueEng] = useState('');
    const [valueArb, setValueArb] = useState('');

    const [packages, setPackage] = useState("see_financial")



    const handleCreateButton = async () => { 
        if (!packages) {
            alert('ERROR, Please select a package')
            return;
        }  
        const packageData = {
            service: "financial",
            name: packages,
            packageEng: valueEng,
            packageArb: '',
            offer: [
                {
                    eng: "High-Speed Internet - Wifi",
                    arb: "High-Speed Internet - Wifi"
                },
                {
                    eng: "Copy-Machine And Printer",
                    arb: "Copy-Machine And Printer"
                }
            ]
        }

        axios.post(`http://localhost:5000/api/v1/service/create/package/single`,
            {
                data: packageData,
            })
            .then(res => {
                if (res) {
                    setOpenPackage(false)
                    setValueEng('')
                    //   setValueArb('')
                    alert('Create successfully')
                }
            });



    };


    const handleClose = () => setOpenPackage(false);
    const handleOnSelectLen = (data) => {
        setPackage(data)
    }

    return (
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={openPackage}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={openPackage}>
                    <Box sx={style}>
                        <Typography id="spring-modal-title" variant="h6" component="h2">
                            Add a new Package
                        </Typography>


                        <div className='mt-3 mb-2'>
                            <label>Packages</label>
                            <select id="package" name="package" onClick={e => (handleOnSelectLen(e.target.value))}>
                                <option value="see_financial" >See Our Financial Management Packages</option>
                                
                            </select>
                        </div>

                        <Box>
                            <Typography id="spring-modal-title" variant="h6" component="h2">
                                Packages: {packages}
                            </Typography>
                            <p>Use text(Normal, H2, H3 )</p>

                            <ReactQuill theme="snow" className='quill_size'
                                defaultValue={valueEng}
                                onChange={setValueEng}
                            />
                        </Box>
                        <Box className="pt-5 pb-4"><button className='button-handle-add' onClick={handleCreateButton}> Create Package </button></Box>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
