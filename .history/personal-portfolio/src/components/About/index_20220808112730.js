import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import {
    faJava,
    faCss3,
    faGitlab,
    faHtml5,
    faPython,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfilePic from '../../assets/ProfilePic.png'
import ProfilePicDecor from '../../assets/ProfilePicDecor.png'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
        <div className="container about-page">

            <img className="profile-plain" src={ ProfilePic } alt="profile photo" />
            <img className="profile-decor" src={ ProfilePicDecor } alt="profile photo with decor" />

            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>

                <p>
                    I'm currently a Software Engineering student at the University of 
                    Waterloo. I have a passion for web development and I'm always looking 
                    for an opportunity to learn more about software engineering, both 
                    in theory and in real-world applications.
                </p> 
                <p>
                    I'm interested in learning about both the frontend and backend sides 
                    of development and creating projects as a way to apply new knowledge. 
                    In fact, I created this entire website using React, Javascript, 
                    and CSS!
                </p>
                <p>
                    I have previous work experience with companies like the Toronto 
                    Transit Commission and Cloud Carib. As a co-op student, I'm always 
                    looking for an IT job position where I can use my skills and learn new 
                    ones to help improve others' lives.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faJava} color="#f89820" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#2965f1" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faGitlab} color="#f1502f" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faHtml5} color="#e34c26" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faPython} color="#ffe873" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faReact} color="#61dbfb" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="line-scale" />
        </>
    )
}

export default About