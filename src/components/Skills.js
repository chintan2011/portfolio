import React, {Component} from 'react'
import Alert from 'react-bootstrap/Alert'
import './Skills.css'

class Skills extends Component{
    constructor(){
        super();
        this.state = {
            name: "React"
        }
    }

    render(){
        return(
            <div className="skills__container">
            <Alert variant="primary">
                <Alert.Heading>Skills</Alert.Heading>
            <p> 
                <ul>
                    <li>Strong Agile development experience.</li>
                    <li>Python, JavaScript, Ruby, Java, Cucumber, REST, XML, HTML, CSS.</li>
                    <li>Proficient with git (Version Control System).</li>
                    <li>Mobile (Android and iOS) and Web Developnment and Automation.</li>
                    <li>Django, NodeJS, React, Selenium, Appium, Jenkins, Android, GennyMotion, Android Debug Bridge, XCode.</li>
                    <li>Google Cloud Platform, Google Firebase, Jenkins, GennyMotion Cloud, Jira, Pivotal Tracker, Phabricator, Confluence, QA Tools.</li>
                    <li>Experience with containerization technologies such as Docker and Vagrant.</li>
                    <li>Strong experience with CICD (Continuous Integration Continuous Deployment).</li>
                    <li>Cross-platform and croll-browser automation experience.</li>
                    <li>Over 5 years of software development experience on Mac, Linux and Windows platforms.</li>
                    <li>Good at Googling / Finding solutions for complex problems.</li>
                </ul>
            </p>
            </Alert>
            </div>
        )
    }
}

export default Skills
