import React, { Component } from 'react'
import reactImage from '../logo.svg';
import nodeImage from './nodejs.png'
import pythonImage from './python.png'
import githubImage from './github.png'
import './Image.css'

class Image extends Component{
    render(){
        return(
            <div className="image__container">
                <img src={reactImage} className="rotate" alt="reactImage" />
                <img src={nodeImage} className="images" alt="reactImage" />
                <img src={githubImage} className="images" alt="reactImage" />
            </div>
        )
    }
}

export default Image
