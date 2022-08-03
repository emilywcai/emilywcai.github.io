import LogoName from '../../assets/Emily.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const introArray = ['H', 'e', 'l', 'l', 'o', ',', ' ', 'I', '\'', 'm']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> <AnimatedLetters
                letterClass={letterClass}
                strArray={introArray}
                idx={15}
                />
                <br />
                <img src={LogoName} alt="name" />
                </h1>
                <h2>Software Engineering Student / Web Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <L
        </div>
    )
}

export default Home