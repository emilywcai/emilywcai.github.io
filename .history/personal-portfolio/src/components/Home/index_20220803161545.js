import LogoName from '../../assets/Emily.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, I'm <br />
                <img src={LogoName} alt="name" />
                </h1>
                <h2>Software Engineering Student / Web Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home