import './App.css';
import { AboutMe } from './Components/AboutMe';
import { HobbiesInterest } from './Components/HobbiesInterest';
import { Journey } from './Components/Journey';
import { Navbar } from './Components/Navbar';
import { PersonalProjects } from './Components/PersonalProjects';

function App() {
  

  return (
    <div className='w-full h-dvh'>
      <Navbar/>
        <div className="bg-[url('../public/new-future-technology-concept-abstract-background-business-solution-54350985.webp')] w-full flex justify-center items-center" style={{height: '920px'}}> 
          <AboutMe/>
          <HobbiesInterest/>
          <Journey/>
          <PersonalProjects/>
        </div>
    </div>
 
  )
}

export default App;
