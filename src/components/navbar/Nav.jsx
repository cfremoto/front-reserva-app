import './nav.css'

const Nav = () => {

  return (
    <nav className="navbar">
      <div className="navContainer">
        <span className="logo">CesarBooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </nav>
  )
}
export default Nav
