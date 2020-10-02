import React, { useState } from 'react';
import './App.css';
import ProfilePicture from './components/ProfilePicture';
//import Titles from './components/Titles';
import SocialInfo from './components/SocialInfo';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const [display, setDisplay] = useState([]);
  
  const onShowData = (state) => {
    const val = state.target.value;
    console.log("This is val from on ShowData=>" + val)
    console.log("This is from onShowData=>" + JSON.stringify(onShowData));
    setDisplay(display => [display, val]);
  }

  return(
    <div className = "app" >
        <div className="app__left">
          <ProfilePicture /><br></br>

          <Button
            className="button__group"
            onClick={onShowData}
          >
          Work Experience
          </Button>

          <Button
            className="button__group"
            onClick={onShowData}
          >
          Projects
          </Button>

          <Button
            className="button__group"
            onClick={onShowData}
          >
          Skills
          </Button>

          <Button
            className="button__group"
            onClick={onShowData}
          >
          Education
          </Button>
          
          <Button
            className="button__group"
            onClick={onShowData}
          >
          Pdf Resume
          </Button>

          <SocialInfo />
        </div>
        <div className="app__right">
          <WorkExperience display={display}/>
          <Projects display={display} />
        </div>
      </div>
  )
}

export default App;
