import React, { Component } from "react";
import "./App.css";
import ProfilePicture from "./components/ProfilePicture";
import SocialInfo from "./components/SocialInfo";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Image from "./components/Image";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideWorkExperience: false,
      showHideProjects: false,
      showInternship: false,
      showEducation: false,
      showSkills: false,
      showImage: true
    };
  }
  hideComponent(name) {
    console.log("This is from hideComponent" + name);
    switch (name) {
        case "showHideWorkExperience":
            this.setState({showHideWorkExperience: !this.state.showHideWorkExperience});
            this.setState({showHideProjects: false});
            this.setState({showInternship: false});
            this.setState({showEducation: false});
            this.setState({showSkills: false});
            this.setState({showImage: false});
            break;

        case "showHideProjects":
            this.setState({ showHideProjects: !this.state.showHideProjects });
            this.setState({showHideWorkExperience: false});
            this.setState({showInternship: false});
            this.setState({showEducation: false});
            this.setState({showSkills: false});
            this.setState({showImage: false});
            break;

        case "showInternship":
            this.setState({ showInternship: !this.state.showInternship });
            this.setState({showHideProjects: false});
            this.setState({showHideWorkExperience: false});
            this.setState({showEducation: false});
            this.setState({showSkills: false});
            this.setState({showImage: false});
            break;
        
        case "showEducation":
            this.setState({ showEducation: !this.state.showEducation });
            this.setState({showHideProjects: false});
            this.setState({showHideWorkExperience: false});
            this.setState({showInternship: false});
            this.setState({showSkills: false});
            this.setState({showImage: false});
            break;
        
        case "showSkills":
            this.setState({ showSkills: !this.state.showSkills });
            this.setState({showHideProjects: false});
            this.setState({showHideWorkExperience: false});
            this.setState({showInternship: false});
            this.setState({showEducation: false});
            this.setState({showImage: false});
          break;
        
        case "showImage":
          this.setState({ showImage: !this.state.showImage });
          this.setState({showHideProjects: false});
          this.setState({showHideWorkExperience: false});
          this.setState({showInternship: false});
          this.setState({showEducation: false});
          this.setState({showSkills: false});
          break

        default:
          break
    }
  }

  render() {
    const { showHideWorkExperience, showHideProjects, showInternship, showEducation, showSkills, showImage} = this.state;
    document.title = "Chintan Savalia"
    return (
      <div className="app">
        <div className="app__left">
          <ProfilePicture />

          <Button variant="outline-primary"
            className="button__group"
            onClick={
                () => this.hideComponent("showHideWorkExperience")
            }>
            Work Experience</Button>

            <Button variant="outline-primary"
            className="button__group"
            onClick={
                ()=> this.hideComponent("showInternship")
            }>
            Internship</Button>

          <Button variant="outline-primary"
            className="button__group"
            onClick={
                ()=> this.hideComponent("showHideProjects")
            }>
            Projects</Button>

            <Button variant="outline-primary"
            className="button__group"
            onClick={
                ()=> this.hideComponent("showEducation")
            }>
            Education</Button>

            <Button variant="outline-primary"
            className="button__group"
            onClick={
                ()=> this.hideComponent("showSkills")
            }>
            Skills</Button>

          <SocialInfo />
        </div>
        <div className="app__right">
          {showImage && <Image/>}
          {showHideWorkExperience && <WorkExperience />}
          {showInternship && <Internship/>}
          {showHideProjects && <Projects />}
          {showEducation && <Education/>}
          {showSkills && <Skills/>}
        </div>
      </div>
    );
  }
}

export default App;
