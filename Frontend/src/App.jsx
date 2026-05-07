import React from 'react'
import { Route, Routes } from 'react-router'
import pagepath from './Routes/pagepath'
import LandingPage from './pages/LandingPage'
import Homepage from './pages/homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import LoadingPage from './pages/Loadingpage'

function App() {
  return (
    <Routes>
      <Route path={pagepath.LANDINGPAGE} element={<LandingPage/>} />
      <Route path={pagepath.HOME} element={<Homepage/>} />
      <Route path={pagepath.LOGIN} element={<Login/>} />
      <Route path={pagepath.REGISTER} element={<Register/>} />
      <Route path={pagepath.LOADING} element={<LoadingPage/>} />
 </Routes >
  )
}

export default App