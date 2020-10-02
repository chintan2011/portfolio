import React, {Component} from 'react'
import Alert from 'react-bootstrap/Alert'
import './Education.css'

class Education extends Component{
    constructor(){
        super();
        this.state = {
            name: "React"
        }
    }

    render(){
        return(
            <div className="education__container">
            <Alert variant="primary">
                <Alert.Heading className="title">Education</Alert.Heading>
                <div className="education__details">
                    <p> 
                <h5>Computer Systems Technician (2017)</h5>
                <h6>Algonquin College, Ottawa, Ontario, Canada</h6>
                
                <br></br>

                <h5>Computer Engineer (2013)</h5>
                <h6>Gujarat Technological University, Gujarat, India</h6>
                </p>
                </div>
                </Alert>
            </div>
        )
    }
}

export default Education
