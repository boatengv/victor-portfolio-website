import React from 'react';
import { Slide } from '@mui/material';
import { useStore } from '../store';
import Timeline from '@mui/lab/Timeline';
import { TimeBox } from './TimeBox';
import { timeLineData } from '../Data/timeLineData';

export const Journey = () => {
    
    const current = useStore((state) => state.current)

      console.log(timeLineData);

    return(
        <Slide 
            in={current === "Journey"} 
            direction="right" 
            mountOnEnter 
            unmountOnExit
            timeout={500}
        >
          <div className="bg-white flex items-start border-2 border-black w-[1000px] h-[720px] overflow-hidden overflow-y-scroll">
            <Timeline position="alternate" className='mt'>
              {timeLineData.map((item, index) => (
                <TimeBox
                  key={index}
                  isLeft={index % 2 === 0}
                  time={item.time}
                  jobTitle={item.jobTitle}
                  company={item.company}
                  jobDescription={item.jobDescription}
                />
              ))}
            </Timeline>
          </div>
        </Slide>
    );
}
