
import Featured from '../../components/featured/Features'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Nav from '../../components/navbar/Nav'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.css'

const Home = () => {

  return (
    <>
      <Nav />
      <Header />
      <section className="homeContainer">
        <Featured />
        <h2 className="homeTitle">Busca por tipo de alojamiento</h2>
        <PropertyList />
        <h2 className="homeTitle">Casas que los huespedes adoran</h2>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </section>
    </>
  )
}

export default Home
