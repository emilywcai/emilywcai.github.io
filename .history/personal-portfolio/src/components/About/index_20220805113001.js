import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import './index.scss'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <div className="container about-page">
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
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About