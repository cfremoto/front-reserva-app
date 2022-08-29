import './mailList.css'

const MailList = () => {

  return (
    <section className="mail">
      <h1 className="mailTitle">Suscríbete para ver ofertas secretas </h1>
      <span>¡Suscríbete y verás cómo bajan los precios! </span>
      <div className="mailInputContainer">
        <input type="email" placeholder='Introduce tu e-mail' />
        <button>¡Suscribete!</button>
      </div>
    </section>
  )
}
export default MailList
