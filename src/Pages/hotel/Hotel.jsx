import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Nav from "../../components/navbar/Nav"
import './hotel.css'

const imagenes = [
  'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/159458579.jpg?k=1171d2c64130efe865fb6b825749aff1e22f49d7b9f9be6e7ade3412f9b90382&o=&hp=1','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/180731654.jpg?k=b2f28468fbb1e169e4137cafb86b924dae03c73b4c4551795f124b0a1a79642f&o=&hp=1','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/362685112.jpg?k=5e17cdaad8c2d048fadc5f1aef6942e0d7494a96fbc7cbabc50a9b9231658ceb&o=&hp=1','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/362685123.jpg?k=1adf4a7a028e50060ba48e2969687d0e2dab31a70a55933c5c29b2389a70bedd&o=&hp=1','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/180733995.jpg?k=937ee2b72d08b0f3bae3c12e984944b2b1a6ccaeabf2568c6f9773c82c1ed6cf&o=&hp=1'
]

const Hotel = () => {

  return (
    <>
      <Nav />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">reserve ahora</button>
          <h1 className="hotelTitle">Gran Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Venezuela monagas 23</span>
          </div>
          <span className="hotelDistance">
            excelente localizacion 500m del centro
          </span>
          <span className="hotelPriceHighlight">
          la estadia de $114 por la propiedad y obtienes el taxi gratis del aeropuerto
          </span>
          <div className="hotelImages">
            {imagenes.map(photo => (
              <div className="hotelImgWrapper" key={photo}>
                <img src={photo} alt="foto" className="hotelImg"/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Lorem, ipsum dolor sit amet</h1>
              <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic id dolorem laborum. Doloremque porro ipsa quod perspiciatis sed. Inventore eveniet, quas saepe voluptatem pariatur illum aliquid enim nobis voluptatum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero id sapiente perspiciatis qui sed debitis aut laudantium provident. Dicta aliquid perferendis optio dolores odio, ad iste quae. Ut, dolorum necessitatibus?</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>perfecto para estar 9 noches </h1>
              <span>localizado en el corazon de monagas, esta propiedad tiene una excelente localizacion</span>
              <h2>
                <b>$945</b> (9 noches)
              </h2>
              <button>Reserve Ahora</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hotel
