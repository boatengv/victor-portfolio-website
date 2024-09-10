import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Slide } from '@mui/material';
import { useStore } from '../store';
import React from 'react';
import { ContactMe } from './ContactMe';


export const AboutMe = () => {

    const current = useStore((state) => state.current)
    const setCurrentHobbiesInterest = useStore((state) => state.setCurrentHobbiesInterest)
    const contactMe  = useStore((state) => state.contactMe);
    const openContactMe = useStore((state) => state.openContactMe);

    return (        
        <>
            <Slide 
                    in={current === "AboutMe"} 
                    direction="right" 
                    mountOnEnter 
                    unmountOnExit
                    timeout={500}
                >
                <div className="bg-white flex items-center border-b-4 border-r-4 border-black rounded-br-3xl" style={{width: '840px', height: '480px'}}>
                    <div className='flex flex-none flex-row border-r-2 border-black w-96 h-56 ml-8 pr-4'>
                        <div className=" basis-2/4 flex items-center">
                            <div className='w-full'>
                            <Avatar className="mx-auto" alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/2.jpg`} sx={{ width: 172, height: 172 }}/>
                            </div>
                        </div>
                        <div className="basis-2/4 flex items-center">
                            <div>
                                <h1 className='text-center text-2xl'>Hi I'm</h1>
                                <h1 className='text-center text-xl'> Mr. <b className='text-blue-600'>Victor Boateng</b></h1>
                                <h1 className='text-center text-2xl'>A</h1>
                                <h2 className='text-center text-xl'><b className='text-blue-600'>Software</b> Developer </h2>
                                <div className='mx-auto w-fit mt-4'>
                                    <Button variant="contained" onClick={() => openContactMe(true)}>Contact Me</Button>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className='grow'>
                        <div className='mx-auto w-11/12'>
                            <p className='text-center text-xl'><b className='text-blue-600'>Collaborative</b>, <b className='text-blue-600'>Consistent</b> & <b className='text-blue-600'>Creative</b> designer looking for an opportunity to make an impact in the <b className='text-blue-600'>Digital Space</b>.</p>
                            <p className='mt-6 text-center text-xl'><span className=" text-blue-600 border-b-2 border-blue-600 animate-bounce cursor-pointer w-fit inline-block" onClick={setCurrentHobbiesInterest}>Learn More</span> About Me</p>
                        </div>
                    </div>
                </div>
            </Slide>
            {contactMe
                && <ContactMe/>}
        </>
    );
}