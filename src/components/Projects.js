import React, {Component} from 'react'
import './Projects.css'
import Alert from 'react-bootstrap/Alert'

class Projects extends Component{
    constructor(){
        super();
        this.state = {
            name: "React"
        }
    }

    render(){
        return (
            <div className="projects__container">
            <Alert variant="primary">
                    <Alert.Heading className="title">Projects</Alert.Heading>

                    <div className="project__title">Portfolio - (JavaScript, React, React-BootStrap, HTML, and CSS)</div>
                    <ul className="projects_bullets">
                        <li>Portfolio website using React</li>
                        <li>Github: <a href="https://github.com/chintan2011/portfolio">https://github.com/chintan2011/portfolio</a></li>
                        <li>Hosting on Google Cloud:&nbsp;<a href="https://portfolio-491bd.web.app/">https://portfolio-491bd.web.app/</a></li>
                    </ul>

                    <div className="project__title">Resume - (JavaScript, React, React-BootStrap, HTML, and CSS)</div>
                    <ul className="projects_bullets">
                        <li>Resume website to get familiar with react components</li>
                        <li>Github: <a href="https://github.com/chintan2011/Resume">https://github.com/chintan2011/Resume</a></li>
                        <li>Hosting on Heroku:&nbsp;<a href="https://desolate-oasis-05296.herokuapp.com/">https://desolate-oasis-05296.herokuapp.com/</a></li>
                    </ul>
    
                    <div className="project__title">Covid-19-tracker - (Firebase, JavaScript, React, REST, HTML and CSS)</div>
                    <ul className="projects_bullets">
                        <li>Covid 19 cases, recovered, and deaths tracker using REST API in real-time</li>
                        <li>Github: <a href="https://github.com/chintan2011/covid-19-tracker">https://github.com/chintan2011/covid-19-tracker</a></li>
                        <li>Hosting on Google Cloud:&nbsp;<a href="https://covid-19-tracker-793bd.web.app/">https://covid-19-tracker-793bd.web.app/</a></li>
                    </ul>

                    <div className="project__title">PusherPoll - (JavaScript, NodeJS, Express, Mongoose, Pusher, HTML and CSS)</div>
                    <ul className="projects_bullets">
                        <li>Real-time voting app for team building activities .</li>
                        <li>Github: <a href="https://github.com/chintan2011/pusherpoll">https://github.com/chintan2011/pusherpoll</a></li>
                    </ul>

                    <div className="project__title">NodeJSFirebase - (JavaScript, NodeJS, Google Cloud, Firebase)</div>
                    <ul className="projects_bullets">
                        <li>Back-end with exposed REST api for real-time CRUD operations using Google Firebase</li>
                        <li>Github: <a href="https://github.com/chintan2011/nodeJSFirebase">https://github.com/chintan2011/nodeJSFirebase</a></li>
                    </ul>

                    <div className="project__title">Todo-react-app - (ReactJS, JavaScript)</div>
                    <ul className="projects_bullets">
                        <li>ToDo app using ReactJS</li>
                        <li>Github: <a href="https://github.com/chintan2011/todo-react-app">https://github.com/chintan2011/todo-react-app</a></li>
                    </ul>

                    <div className="project__title">Python-learns - (Python)</div>
                    <ul className="projects_bullets">
                        <li>Python coding exercises for algorithms and data structures.</li>
                        <li>Github: <a href="https://github.com/chintan2011/python-learns">https://github.com/chintan2011/python-learns</a></li>
                    </ul>

                    <div className="project__title">Vagrant_automation - (Vagrant, Ruby, Shell)</div>
                    <ul className="projects_bullets">
                        <li>Automated deployment of Linux VM with Nginx, Git, and MySql configured for web development.</li>
                        <li>Github: <a href="https://github.com/chintan2011/vagrant_automation">https://github.com/chintan2011/vagrant_automation</a></li>
                    </ul>

                    <div className="project__title">JavaProjects - (Java)</div>
                    <ul className="projects_bullets">
                        <li>Mini Java projects</li>
                        <li>Github: <a href="https://github.com/chintan2011/JavaProjects">https://github.com/chintan2011/JavaProjects</a></li>
                    </ul>

                    <div className="project__title">JavaLearns - (Java)</div>
                    <ul className="projects_bullets">
                        <li>Java coding coding exercises for algorithms and data structures.</li>
                        <li>Github: <a href="Java coding coding exercises for algorithms and data structures.">Java coding coding exercises for algorithms and data structures.</a></li>
                    </ul>

                    </Alert>
            </div>
        )
    }
}

export default Projects
