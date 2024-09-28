import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

export const TimeBox = (props) => { 
    
    return(
        <TimelineItem>
            <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            className=' text-center'
            >
              {props.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h1 className='text-3xl text-left'><b>{props.jobTitle}</b></h1>
                <h2 className='text-2xl text-left'> {props.company}</h2>
                {props.jobDescription.map((item) => (     
                    <ul className='list-disc'>
                        <li className='text-left'>{item}</li>
                    </ul>
                ))}
                <p className='mt-2 text-left'><b>Skills: {props.skills} </b></p>
            </TimelineContent>
        </TimelineItem>
    )
}