import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
      })

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container"> {
                portfolio.map((port, idx) => {
                    return (
                        <div>
                        </div>
                    )
                })
            }
            </div>
        )
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")} 
                        idx={15}
                    />
                </h1>
                {/*<div>{renderPortfolio()}</div>*/}
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Portfolio