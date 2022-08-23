import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss'

const Portfolio = () => {
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