import './featured.css'
const Featured = () => {

  return (
    <section className="featured">

      <article className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/643587.webp?k=7a6ea4ce4ab091c588b4c0e8cddaa89c1e77399c0e5f6bdd83fd73653911fba1&o=" alt="foto" className="featuredImg" />
        <div className="featuredTitles">
          <h2>Blubin</h2>
          <h3>123 properties</h3>
        </div>
      </article>

      <article className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/689586.webp?k=970c12bc9abce21e6043c5ad0ba8bedaf27b105be29277b0215359a07f8192e3&o=" alt="foto" className="featuredImg" />
        <div className="featuredTitles">
          <h2>Florida</h2>
          <h3>123 properties</h3>
        </div>
      </article>

      <article className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/620099.webp?k=93e8bfacbaec3c2a2b846d44fbd383dec7e37861abae778f316c499c91e1ae4c&o=" alt="foto" className="featuredImg" />
        <div className="featuredTitles">
          <h2>Buenos Aires</h2>
          <h3>123 properties</h3>
        </div>
      </article>

    </section>


  )
}
export default Featured
