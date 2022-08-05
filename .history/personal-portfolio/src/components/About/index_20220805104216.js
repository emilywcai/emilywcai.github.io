import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>

                <p>
                    I'm currently a Software Engineering student at the University of Waterloo. 
                    I have a passion for web development and I'm always looking for an opportunity 
                    to learn more about software engineering, both in theory and real world applications.
                </p> 
                <p>
                    I'm interested in learning about both the frontend and backend sides of development, 
                    and creating my own projects as a way to apply new knowledge. In fact, I created this 
                    entire website using React, Javascript, and CSS!
                </p>
                <p>
                    I have previous work experience with companies like the Toronto Transit Commission 
                    and Cloud Carib. As a co-op student, I'm always looking for an IT job position where 
                    I can use my skills and learn new ones to help improve others' lives.
                </p>
            </div>
        </div>
    )
}

export default About