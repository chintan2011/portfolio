import React from 'react'
import './Projects.css'
import Alert from 'react-bootstrap/Alert'

function Projects(display) {

    return (
        <div hidden={display.display} className="projects">
        {console.log("This is from Projects Component=>" + JSON.stringify(display))}
            <Alert>
                <Alert.Heading>Projects</Alert.Heading>
                <div className="project__title">Resume - (JavaScript, React, React-BootStrap, HTML, and CSS)</div>
                <ul className="projects_bullets">
                    <li>Resume website to get familiar with react components</li>
                    <li>Github: <a href="https://github.com/chintan2011/Resume">https://github.com/chintan2011/Resume</a></li>
                    <li>Hosting on Heroku:&nbsp;<a href="https://desolate-oasis-05296.herokuapp.com/">https://desolate-oasis-05296.herokuapp.com/</a></li>
                </ul>

                <div className="project__title">covid-19-tracker - (Firebase, JavaScript, React, REST, HTML and CSS)</div>
                <ul className="projects_bullets">
                    <li>Covid 19 cases, recovered, and deaths tracker using REST API in real-time</li>
                    <li>Github: <a href="https://github.com/chintan2011/covid-19-tracker">https://github.com/chintan2011/covid-19-tracker</a></li>
                    <li>Hosting on Google Firebase:&nbsp;<a href="https://covid-19-tracker-793bd.web.app/">https://covid-19-tracker-793bd.web.app/</a></li>
                </ul>
            </Alert>
        </div>
    )
}

export default Projects
