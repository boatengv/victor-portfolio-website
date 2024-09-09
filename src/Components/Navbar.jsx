import * as React from 'react';
import { useStore } from '../store';
import { FaLinkedin } from "react-icons/fa";

export const Navbar = () => {

    const current = useStore((state) => state.current)
    const setCurrentAboutMe = useStore((state) => state.setCurrentAboutMe)
    const setCurrentHobbiesInterest = useStore((state) => state.setCurrentHobbiesInterest)
    const setCurrentJourney = useStore((state) => state.setCurrentJourney)
    const setCurrentPersonalProjects = useStore((state) => state.setCurrentPersonalProjects)
    console.log(current)

    return (
        <div className='border-b-4 border-black h-16 flex justify-center'>
            <a className='absolute top-1 left-1 cursor-pointer' rel="noreferrer" target="_blank"  href='https://www.linkedin.com/in/victorboateng/'>
                <FaLinkedin size='48px' color='blue'/>
            </a>
            <div className={`hover:bg-blue-200 ${current === "AboutMe" ? "bg-blue-200" : ""} cursor-pointer`} onClick={setCurrentAboutMe}>
                <div className="flex items-center h-full">
                    <div>
                        <h1 className="mx-14 h-full text-lg text-blue-600">
                            <b>About Me</b>
                        </h1>
                    </div>        
                </div>
            </div>
            <div className={`hover:bg-blue-200 ${current === "HobbiesInterest" ? "bg-blue-200" : ""} cursor-pointer`} onClick={setCurrentHobbiesInterest}>
                <div className="flex items-center h-full">
                    <div>
                        <h1 className="mx-14 h-full text-lg text-blue-600">
                            <b>Hobbies & Interest</b>
                        </h1>
                    </div>        
                </div>
            </div>
            <div className={`hover:bg-blue-200 ${current === "Journey" ? "bg-blue-200" : ""} cursor-pointer`} onClick={setCurrentJourney}>
                <div className="flex items-center h-full">
                    <div>
                        <h1 className="mx-14 h-full text-lg text-blue-600">
                            <b>Journey</b>
                        </h1>
                    </div>        
                </div>
            </div>
            <div className={`hover:bg-blue-200 ${current === "PersonalProjects" ? "bg-blue-200" : ""} cursor-pointer`} onClick={setCurrentPersonalProjects}>
                <div className="flex items-center h-full">
                    <div>
                        <h1 className="mx-14 h-full text-lg text-blue-600">
                            <b>Personal Projects</b>
                        </h1>
                    </div>        
                </div>
            </div>
            <a className='absolute top-1 right-4 cursor-pointer hover:bg-black hover:text-white' href={`${process.env.PUBLIC_URL}/Victor%20Boateng%20CV.pdf`} target="_blank" rel="noopener noreferrer">
                <h1 className='text-2xl p-2 border-2 border-black'>Download CV</h1>
            </a>
        </div> 
    );
}

