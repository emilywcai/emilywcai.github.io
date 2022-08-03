import LogoName from '../../assets/EmilyCursiveNoBg.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'

const Home = () => (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, I'm
                <img src={LogoName} alt="name" />
                </h1>
                <h2>Software Engineering Student / Web Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
 )

export default Home