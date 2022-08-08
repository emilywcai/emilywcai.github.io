import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    const sendEmail = (e) => {
        e.prevent
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                            strArray={['C', 'o', 'n', 'n', 'e', 'c', 't', ' ', 'w', 'i', 't', 'h', ' ', 'm', 'e']} 
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm interested in short-term internships where I can further develop my software skills. 
                        If you have any questions or requests for me, please don't hesitate to contact me using 
                        the form below:
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit{sendEmail}>
                            <ul>
                                <li className="half">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name" 
                                        required 
                                    />
                                </li>
                                <li className="half">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        required 
                                    />
                                </li>
                                <li>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Subject" 
                                        required 
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        name="message" 
                                        placeholder="Message"
                                        required 
                                    />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Contact