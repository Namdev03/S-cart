import React from 'react'
import { Route, Routes } from 'react-router'
import pagepath from './Routes/pagepath'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Routes>
      <Route path={pagepath.landingpage} element={<LandingPage/>} />
 </Routes >
  )
}

export default App