import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/home/Home'
import Hotel from '../Pages/hotel/Hotel'
import List from '../Pages/list/List'

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/hotel/:id" element={<Hotel />} />
    </Routes>
  )
}

export default Router
