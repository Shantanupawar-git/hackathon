import React from 'react'

import Login from './pages/login'
import Register from './pages/Register'
import MenuPage from './pages/MenuPage'

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
      <Route
          path=''
          element={<Login />}
        />

        <Route
          path = 'register'
          element= {<Register />}
         />

         <Route path='menupage' element ={<MenuPage />}/>

      </Routes>
   
    </>
  )
}

export default App
