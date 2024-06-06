import '../styles/Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="error-page">
      <h1 className="number">404</h1>
      <p className="error-message">
        Oups! La page que vous demandez existe pas.
      </p>
      <Link to="/" className="error-link">
        Retourner sur la page accueil
      </Link>
    </div>
  )
}

export default Error
