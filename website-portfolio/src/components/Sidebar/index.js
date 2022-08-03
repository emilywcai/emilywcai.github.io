import './index.scss'
import Logo from '../../assets/ProfileNoBg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import {
  faLinkedin,
  faGithub,
  faDev,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/react-gh-pages">
            <img src={Logo} alt="profile logo" />
        </Link>

        <nav>
        <NavLink exact="true" activeclassname="active" to="/react-gh-pages">
          <FontAwesomeIcon icon={faHome} color="#ffffff" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link" to="/react-gh-pages/about">
          <FontAwesomeIcon icon={faUser} color="#ffffff" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/react-gh-pages/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a 
            target="_blank" 
            rel="norefferer" 
            href="https://www.linkedin.com/in/emilywcai/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
          </a>
        </li>
        <li>
          <a 
            target="_blank" 
            rel="norefferer" 
            href="https://github.com/emilywcai"
          >
            <FontAwesomeIcon icon={faGithub} color="#ffffff" />
          </a>
        </li>
        <li>
          <a 
            target="_blank" 
            rel="norefferer" 
            href="https://devpost.com/emilywcai"
          >
            <FontAwesomeIcon icon={faDev} color="#ffffff" />
          </a>
        </li>
        <li>
          <a 
            target="_blank" 
            rel="norefferer" 
            href="https://www.instagram.com/emilyw.cai/"
          >
            <FontAwesomeIcon icon={faInstagram} color="#ffffff" />
          </a>
        </li>
      </ul>
    </div>
)

export default Sidebar