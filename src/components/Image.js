import React, { Component } from 'react'
import reactImage from '../logo.svg';
import nodeImage from './nodejs.png'
import pythonImage from './python.png'
//import githubImage from './github.png'
import './Image.css'

class Image extends Component{
    render(){
        return(
            <div className="image__container">
                <img src={reactImage} className="react__image" alt="reactImage" />     
                
                <img src={pythonImage} className="python__image" alt="reactImage"></img>
                <img src={nodeImage} className="js__image" alt="reactImage" />
                {/* <img src={githubImage} className="github__image" alt="reactImage" /> */}
            </div>
        )
    }
}

export default Image
