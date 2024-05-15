import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="Argent Bank Logo" />
        </Link>
        <Link to="/Login" className="notConnected">
          <i className="fa fa-2x fa-user-circle" />
          <p> Sign In </p>
        </Link>
        <div className="connected">
          <Link to="/Profile">
            <i className="fa-solid fa-2x fa-circle-user" />
            <p>Thibault</p>
          </Link>
          <Link>
            <i className="fa-solid fa-arrow-right-from-bracket" />
            <p> Sign out </p>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
