import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import '../styles/Navigation.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { logout } from '../redux/actions'

const Navigation = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.userLogin)
  const { firstName, lastName } = useSelector((state) => state.userProfile)

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        {/* <h1 className="sr-only">Argent Bank</h1> */}
      </Link>
      <div>
        {!token ? (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          ''
        )}
        {token ? (
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {firstName} {lastName}
          </Link>
        ) : (
          ''
        )}
        {token ? (
          <Link onClick={logoutHandler} className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : (
          ''
        )}
      </div>
    </nav>
  )
}

export default Navigation
