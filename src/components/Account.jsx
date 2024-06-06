import PropTypes from 'prop-types'
import '../styles/Account.css'

const Account = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div>
        <h3> {title} </h3>
        <p className="account-montant"> {amount} </p>
        <p className="acount-description"> {description} </p>
      </div>
      <div className="cta">
        <button> View transactions </button>
      </div>
    </section>
  )
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Account
