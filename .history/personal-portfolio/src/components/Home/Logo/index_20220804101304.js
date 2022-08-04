import PinkLaptop from '../../../assets/PinkLaptop.png'
import PinkLaptopDecor from '../../../assets/PinkLaptopDecor.png'
import './index.scss'

const Logo = () => {
    return (
        <div className="logo-container">
            <img className="logo-plain" src={ PinkLaptop } alt="laptop logo with no decor" />
            <img className="logo-plain" src={ PinkLaptop } alt="laptop logo with no decor" />
        </div>
    )
}

export default Logo