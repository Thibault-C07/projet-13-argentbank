import PropTypes from 'prop-types'
import '../styles/Account.css'

const Account = ({ titre, montant, description }) => {
  return (
    <section className="account">
      <div>
        <h3> {titre} </h3>
        <p className="account-montant"> {montant} </p>
        <p className="acount-description"> {description} </p>
      </div>
      <div className="cta">
        <button> View transactions </button>
      </div>
    </section>
  )
}

Account.propTypes = {
  titre: PropTypes.string.isRequired,
  montant: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Account
