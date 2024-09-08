import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Slide } from '@mui/material';
import {useStore} from './store'
import React from 'react';


export const AboutMe = () => {

    const current = useStore((state) => state.current)


    return (
        <div className="bg-[url('../public/new-future-technology-concept-abstract-background-business-solution-54350985.webp')] w-full flex justify-center items-center" style={{height: '920px'}}> 
                    
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
                                        <Button variant="contained">Contact Me</Button>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className='grow'>
                            <div className='mx-auto w-11/12'>
                                <p className='text-center text-xl'><b className='text-blue-600'>Collaborative</b>, <b className='text-blue-600'>Consistent</b> & <b className='text-blue-600'>Creative</b> designer looking for an opportunity to make an impact in the <b className='text-blue-600'>Digital Space</b>.</p>
                                <p className='mt-6 text-center text-xl'><a className=" text-blue-600 border-b-2 border-blue-600 animate-bounce" href="wwww.google.com">Learn More</a> About Me</p>
                            </div>
                        </div>
                    </div>
                </Slide>
            
          
                <Slide 
                    in={current === "HobbiesInterest"} 
                    direction="right" 
                    mountOnEnter 
                    unmountOnExit
                    timeout={300}
                >
                <div className="bg-white border-b-4 border-r-4 border-black rounded-br-3xl flex flex-row" style={{width: '720px', height: '560px'}}>
                        <div className="w-96 h-96 -translate-x-12 -translate-y-12 border-t-4 border-l-4 border-black rounded-tl-3xl flex-none">
                            <img  className="w-full h-full object-cover rounded-tl-3xl" src={`${process.env.PUBLIC_URL}/1725722424577.jpg`} alt='playing football'></img>
                            <div className="translate-x-14 w-[332px] mx-1">
                                <h1 className='text-center text-2xl my-4'><b><em>Hobbies & Interest [2024]</em></b></h1>
                                <em><p>I thrive on overcoming challenges, whether big or small, and this drives many of my hobbies. One of my biggest personal challenges has been fitness. This year, I embarked on a fitness journey that includes running, swimming, and hitting the gym </p></em>
                            </div>
                        </div>
                        <div className="grow -translate-x-4">
                            <em>
                                <p>
                                    regularly. I am particularly proud of becoming an intermediary swimmer, as I couldn't swim before this year. I look forward to conquering even more physical challenges in the years to come.
                                </p>  
                                <br></br>
                                <p>
                                    Football is another major passion of mine. As a lifelong Chelsea supporter, I've experienced the highs and lows of the sport, but it’s taught me invaluable lessons about success and the importance of teamwork. Football has shaped my belief that “no man is an island”—great things are always achieved together.
                                </p>
                                <br></br>
                                <p>
                                    In addition, I enjoy reading, watching TV shows, and finding ways to make a positive impact, whether big or small. All of these interests reflect my excitement for growth and new experiences.
                                </p> 
                            </em>
                                                    
                        </div>
                   </div>
                </Slide>


                <Slide 
                        in={current === "Journey"} 
                        direction="right" 
                        mountOnEnter 
                        unmountOnExit
                        timeout={500}
                    >
                    <div className="bg-white flex items-center border-b-4 border-r-4 border-black rounded-br-3xl" style={{width: '840px', height: '480px'}}>
                        
                    </div>
                </Slide>

                <Slide 
                        in={current === "PersonalProjects"} 
                        direction="right" 
                        mountOnEnter 
                        unmountOnExit
                        timeout={500}
                    >
                    <div className="bg-white flex items-center border-b-4 border-r-4 border-black rounded-br-3xl" style={{width: '840px', height: '480px'}}>
                        
                    </div>
                </Slide>
            


        </div>
    );
}