import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Item from '../components/Item'
import Banner from '../components/Banner'
import iconChat from '../assets/icon-chat.png'
import iconMoney from '../assets/icon-money.png'
import iconSecurity from '../assets/icon-security.png'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="Home">
      <Navigation />
      <main>
        <Banner />
        <div className="items">
          <Item
            image={iconChat}
            titre="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <Item
            image={iconMoney}
            titre="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <Item
            image={iconSecurity}
            titre="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
          />
        </div>
      </main>
      <div className="items"></div>
      <Footer />
    </div>
  )
}

export default Home
