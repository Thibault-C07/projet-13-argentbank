import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SignInForm from '../components/SignInForm'

const Connexion = () => {
  return (
    <div className="connexion">
      <Navigation />
      <main>
        <SignInForm />
      </main>
      <Footer />
    </div>
  )
}
export default Connexion
