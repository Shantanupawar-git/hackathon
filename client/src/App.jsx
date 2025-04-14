import React from 'react'

// import Login from './pages/login'
import Login from './pages/Login'
import Register from './pages/Register'
import MenuPage from './pages/MenuPage'
import Myblog from './pages/Myblog'
import AddBlog from './pages/AddBlog'
import ViewAllBlog from './pages/ViewAllBlog'
import AddCategory from './pages/AddCategory'

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

         <Route path='myblog' element ={<Myblog />}/>

         <Route path='addblog' element ={<AddBlog />}/>

         <Route path='viewallblog' element ={<ViewAllBlog />}/>

         <Route path='addcategory' element ={<AddCategory />}/>

      </Routes>
   
    </>
  )
}

export default App
