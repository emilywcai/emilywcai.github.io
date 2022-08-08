import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                            idx= {15}
                        />
                    </h1>
                </div>
            </div>
            <Loader type="cube-transition" />
        </>
    )
}

export default Contact