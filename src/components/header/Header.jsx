import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useNavigate } from 'react-router-dom'
import './header.css'

const Header = ({ type }) => {

  const navigate = useNavigate()

  const [destino, setDestino] = useState('')
  const [openDate, setOpendate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ])

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adultos: 1,
    ninos: 0,
    habitacion: 1
  })

  const { adultos, ninos, habitacion } = options

  const handleOptions = (nombre, operacion) => {
    setOptions((prev) => {
      return {
        ...prev,
        [nombre]: operacion === "i" ? options[nombre] + 1 : options[nombre] - 1
      }
    })
  }

  const handleSearch = () => {
    navigate('/hotel', { state: {destino, date, options}})
  }

  return (
    <header className="header">

      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>

        <div className="headerList">

          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>

        </div>

        { type !== 'list' &&
          <><h1 className="headerTitle">Encuentra tu próxima estancia</h1>
        <p className="headerDesc">Ahorra un 10% o más en alojamientos participantes uniéndote gratis al programa de fidelización de CesarBooking.com</p>
        <button className="headerBtn"> Entra / Registrate</button>

        <div className="headerSearch">

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerSearchIcon"/>
              <input
                type="text"
                placeholder="¿A donde quieres ir?"
                className="headerSerachInput"
                onChange={(e)=>setDestino(e.target.value)}
              />
          </div>

          <div className="headerSearchItem">

            <FontAwesomeIcon icon={faCalendarDays} className="headerSearchIcon" />

            <span
              onClick={() => setOpendate(!openDate)}
              className="headerSearchText">
              {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
            </span>

            {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
            />}
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
            <span
              onClick={()=> setOpenOptions(!openOptions)}
              className="headerSearchText"
            >
              {`${adultos} ${adultos === 1 ? 'Adulto' : 'Adultos'} - ${ninos} Niños - ${habitacion} ${habitacion === 1 ? 'Habitacion' : 'Habitaciones'}`}
            </span>

            {openOptions && <div className="headerSearchOptions">

                <div className="headerSearchOptionsItem">
                  <span className="headerSearchOptionsText">Adultos</span>
                  <div className="headerSearchOptionsCounterContainer">
                    <button
                      className="headerSearchOptionsCountButton"
                      onClick={() => handleOptions("adultos", "d")}
                      disabled={adultos <= 1}
                    >-</button>
                    <span className="headerSearchOptionsNumber">{`${adultos}`}</span>
                    <button
                      className="headerSearchOptionsCountButton"
                      onClick={()=> handleOptions("adultos", "i")}
                    >+</button>
                  </div>
                </div>

                <div className="headerSearchOptionsItem">
                  <span className="headerSearchOptionsText">Niños</span>
                  <div className="headerSearchOptionsCounterContainer">
                    <button
                      className="headerSearchOptionsCountButton"
                      onClick={() => handleOptions("ninos", "d")}
                      disabled={ninos === 0}
                    >-</button>
                    <span className="headerSearchOptionsNumber">{`${ninos}`}</span>
                    <button
                      className="headerSearchOptionsCountButton"
                      onClick={()=> handleOptions("ninos", "i")}
                    >+</button>
                  </div>
                </div>

                <div className="headerSearchOptionsItem">
                  <span className="headerSearchOptionsText">Habitacion</span>
                  <div className="headerSearchOptionsCounterContainer">
                    <button
                      className="headerSearchOptionsCountButton"
                      onClick={() => handleOptions("habitacion", "d")}
                      disabled={habitacion <= 1}
                    >-</button>
                    <span className="headerSearchOptionsNumber">{`${habitacion}`}</span>
                    <button
                      className="headerSearchOptionsCountButton"
                      onClick={()=> handleOptions("habitacion", "i")}
                    >+</button>
                  </div>
                </div>

            </div>}

          </div>

          <div className="headerSearchItem">
              <button
                className="headerBtn"
                onClick={handleSearch}
              >Buscar</button>
          </div>

        </div> </>}


      </div>

    </header>
  )
}
export default Header
