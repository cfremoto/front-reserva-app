import { format } from "date-fns"
import { useState } from "react"
import { DateRange } from "react-date-range"
import { useLocation } from "react-router-dom"

import Header from "../../components/header/Header"
import Nav from "../../components/navbar/Nav"
import SearchItem from "../../components/searchItem/searchItem"
import './list.css'

const List = () => {

  const location = useLocation()

  const [destino, setDestino] = useState(location.state.destino)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false)

  return (
    <>
      <Nav />
      <Header type="list" />
      <section className="listContainer">

        <div className="listWrapper">

          <div className="listSearch">
            <h2 className="listTitle">Buscar:</h2>

            <div className="listItem">
              <label htmlFor="">Destino:</label>
              <input type="text" placeholder={destino} />
            </div>

            <div className="listItem">
              <label htmlFor="">Check-in Data</label>
              <span
                onClick={(e)=> setOpenDate(!openDate)}
              >
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                { openDate && <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />}
            </div>

            <div className="listItem">
              <label htmlFor="">Opciones</label>

              <div className="listOptionsContainer">

                <div className="listOptionsItem">
                  <span className="listOptionsText">
                    Min price <small>por noche</small>
                  </span>
                  <input type="number" className="listOptionsInput" />
                </div>

                <div className="listOptionsItem">
                  <span className="listOptionsText">
                    Max price <small>por noche</small>
                  </span>
                  <input type="number" className="listOptionsInput" />
                </div>

                <div className="listOptionsItem">
                  <span className="listOptionsText">
                    Min price <small>por noche</small>
                  </span>
                  <input type="number" className="listOptionsInput" />
                </div>

                <div className="listOptionsItem">
                  <span className="listOptionsText">
                    Adultos
                  </span>
                  <input
                    min={1}
                    type="number"
                    className="listOptionsInput"
                    placeholder={options.adultos}
                  />
                </div>

                <div className="listOptionsItem">
                  <span className="listOptionsText">
                    Niños
                  </span>
                  <input
                    min={0}
                    type="number"
                    className="listOptionsInput"
                    placeholder={options.ninos}
                  />
                </div>

                <div className="listOptionsItem">
                  <span className="listOptionsText">
                    Habitaciones
                  </span>
                  <input
                    min={1}
                    type="number"
                    className="listOptionsInput"
                    placeholder={options.habitacion}
                  />
                </div>

              </div>

            </div>

            <button>Buscar</button>

          </div>

          <div className="listResult">
            <SearchItem />
          </div>

        </div>

      </section>
    </>
  )
}

export default List
