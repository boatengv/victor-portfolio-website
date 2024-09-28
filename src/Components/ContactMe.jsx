import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useStore } from '../store';
import CloseIcon from '@mui/icons-material/Close';

export const ContactMe = () => {
    
    const contactMe = useStore((state) => state.contactMe);
    const closeContactMe = useStore((state) => state.closeContactMe)
    const sendEmailToMe = () => {
        
    }

    return (
        <div>
            <Modal
                open={contactMe}
                onClose={closeContactMe}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 600, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 2}}>
                    <h1 className=' text-center border-b-2 border-black py-4 text-3xl'>Contact Me</h1>
                    <div className='absolute top-4 right-4' variant="outlined" onClick={closeContactMe}><CloseIcon className='hover: cursor-pointer' fontSize='medium'/></div>

                    <div className='flex flex-row h-24 mt-4'>
                        <div className='basis-1/2 flex flex-col items-center'>
                            <label className='my-2 text-xl'>First Name:</label>
                            <input className='border-black border-2 rounded-md w-40 p-1'></input>
                        </div>
                        <div className='basis-1/2 flex flex-col items-center'>
                            <label className='my-2 text-xl'>Second Name:</label>
                            <input className='border-black border-2 rounded-md w-40 p-1'></input>
                        </div>  
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <label className='text-xl mb-2'>Message:</label>
                        <textarea style={{maxHeight: 225}} className="w-[386px] border-2 border-black rounded-[6px] h-[170px] mb-8" placeholder="Feel free to reach out to me" />
                        <Button className='w-[386px] text-xl rounded-md p-4' style={{padding: 12}} variant="contained" onClick={sendEmailToMe}>Submit Message</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}


