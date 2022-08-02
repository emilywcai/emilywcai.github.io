import './index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/ProfileNoBg.png'

const Sidebar = () => (
    <div classname='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt="profile logo" />
        </Link>
    </div>
)

export default Sidebar