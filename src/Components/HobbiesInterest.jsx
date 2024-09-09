import { Slide } from '@mui/material';
import {useStore} from './store'

export const HobbiesInterest = () => {

    const current = useStore((state) => state.current)

    return(
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
    )
} 