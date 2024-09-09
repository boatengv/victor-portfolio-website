import { Slide } from '@mui/material';
import {useStore} from './store'

export const PersonalProjects = () => {

    const current = useStore((state) => state.current)

    return (

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
    )
}