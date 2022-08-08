import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

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
                </div>
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Contact