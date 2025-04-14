import React from 'react'
// import Myblog from './Myblog'
import { Link } from 'react-router-dom'


function MenuPage() {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th colSpan={2}>Blogging App</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
              <tr>
                <td><Link to="/myblog">My Blogs</Link></td>
              </tr>

              <tr>
                <td><Link to="/allblog">All Blogs</Link></td>
              </tr>

              <tr>
                <td><Link to="/addcategory">Add Category</Link></td>
              </tr>

              <tr>
                <td><Link to="/allcategory">Show category</Link></td>
              </tr>

              <tr>
                <td><Link to="/addblog">Add Blog</Link></td>
              </tr>

              <tr>
                <td><Link to="/searchblog">Search Blog</Link></td>
              </tr>

              <button className="btn btn-danger">
              Logout
            </button>
        </tbody>
      </table>
    </div>
  )
}

export default MenuPage
