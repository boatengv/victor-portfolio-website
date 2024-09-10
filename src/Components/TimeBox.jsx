import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';


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
                <Typography variant="h5" component="span">
                    {props.jobTitle}
                </Typography>
                <br></br>
                <Typography variant="h6" component="span">
                    {props.company}
                </Typography>
                <Typography>{
                    props.jobDescription}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}