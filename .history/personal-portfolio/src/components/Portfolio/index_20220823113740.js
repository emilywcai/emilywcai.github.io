import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
      
    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters 
                        letterClass={letterClass}
                            strArray={['C', 'o', 'n', 'n', 'e', 'c', 't', ' ', 'w', 'i', 't', 'h', ' ', 'm', 'e']} 
                            idx={15}
                        />
                </h1>
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Portfolio