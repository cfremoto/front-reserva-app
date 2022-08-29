import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Nav from '../../components/navbar/Nav';
import './hotel.css';

const imagenes = [
  'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/159458579.jpg?k=1171d2c64130efe865fb6b825749aff1e22f49d7b9f9be6e7ade3412f9b90382&o=&hp=1',
  'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/180731654.jpg?k=b2f28468fbb1e169e4137cafb86b924dae03c73b4c4551795f124b0a1a79642f&o=&hp=1',
  'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/362685112.jpg?k=5e17cdaad8c2d048fadc5f1aef6942e0d7494a96fbc7cbabc50a9b9231658ceb&o=&hp=1',
  'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/362685123.jpg?k=1adf4a7a028e50060ba48e2969687d0e2dab31a70a55933c5c29b2389a70bedd&o=&hp=1',
  'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/180733995.jpg?k=937ee2b72d08b0f3bae3c12e984944b2b1a6ccaeabf2568c6f9773c82c1ed6cf&o=&hp=1',
];

const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber

    if (direction === 'l') {
      newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1
    } else {
      newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1
    }

    setSliderNumber(newSliderNumber);
  }

  return (
    <>
      <Nav />
      <Header type='list' />
      <div className='hotelContainer'>
        {open && (
          <div className='slider'>
            <FontAwesomeIcon icon={faCircleXmark}
              className="close"
              onClick={()=> setOpen(false)}
            />
            <FontAwesomeIcon icon={faCircleArrowLeft}
              onClick={()=> handleMove('l')}
              className="arrow"
            />
            <div className='sliderWrapper'>
              <img src={imagenes[sliderNumber]} alt='foto' className='sliderImg' />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight}
              onClick={()=> handleMove('r')}
              className="arrow"
            />
          </div>
        )}

        <div className='hotelWrapper'>
          <button className='bookNow'>reserve ahora</button>
          <h1 className='hotelTitle'>Gran Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Venezuela monagas 23</span>
          </div>
          <span className='hotelDistance'>
            excelente localizacion 500m del centro
          </span>
          <span className='hotelPriceHighlight'>
            la estadia de $114 por la propiedad y obtienes el taxi gratis del
            aeropuerto
          </span>
          <div className='hotelImages'>
            {imagenes.map((imagen, i) => (
              <div className='hotelImgWrapper' key={imagen}>
                <img
                  onClick={() => handleOpen(i)}
                  src={imagen}
                  alt='foto'
                  className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Lorem, ipsum dolor sit amet</h1>
              <p className='hotelDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic id
                dolorem laborum. Doloremque porro ipsa quod perspiciatis sed.
                Inventore eveniet, quas saepe voluptatem pariatur illum aliquid enim
                nobis voluptatum! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Vero id sapiente perspiciatis qui sed debitis aut laudantium
                provident. Dicta aliquid perferendis optio dolores odio, ad iste
                quae. Ut, dolorum necessitatibus?
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>perfecto para estar 9 noches </h1>
              <span>
                localizado en el corazon de monagas, esta propiedad tiene una
                excelente localizacion
              </span>
              <h2>
                <b>$945</b> (9 noches)
              </h2>
              <button>Reserve Ahora</button>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Hotel;
