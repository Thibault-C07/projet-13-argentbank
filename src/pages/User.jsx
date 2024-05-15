import Header from '../components/Header'
import Footer from '../components/Footer'
import Account from '../components/Account'
import Connexion from './Connexion'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

const User = () => {
  const connected = useSelector((state) => state.connected)
  return connected ? (
    <div className="user">
      <Header />
      <main>
        <Account
          titre="Argent Bank Checking (x8349)"
          montant="$2,082.79"
          description="Available Balance"
        />
        <Account
          titre="Argent Bank Savings (x6712)"
          montant="$10,928.42"
          description="Available Balance"
        />
        <Account
          titre="Argent Bank Credit Card (x8349)"
          montant="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </div>
  ) : (
    <Routes>
      <Route path="/*" element={<Connexion />} />
    </Routes>
  )
}
export default User
