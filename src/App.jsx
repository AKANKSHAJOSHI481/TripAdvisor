import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PlaceDetail from './pages/PlaceDetail'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/place/:id" element={<PlaceDetail/>} />
        <Route path = "/" element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
