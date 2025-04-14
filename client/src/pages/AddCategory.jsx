import React, { useState } from 'react'
import { addCategory } from '../services/addCategory'

function AddCategory() {

    const[categoryInfo, setCategoryInfo] = useState({title: "", description: ""});


    const onAddCategory = async() =>{
        // create api call
        const {title, description} = categoryInfo;

        const result = await addCategory(title, description)

        // check result
        if (result["status"] == "Success") {
            alert("Category Successfully.!!!!!!!!");
            
          } else {
            alert("Error occured on addCategory.jsx");
          }
    }

  return (
    <div className='container'>
        {/* Title ************** */}
      <div>
        <div className="form-group">
          <label>Category: </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div> <br />

      {/* description ********* */}
      <div>
        <div className="form-group">
          <label>Description: </label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            rows={4}
          />
        </div>
      </div> <br />


      {/* button ************ */}

      <button className="btn btn-success" onClick={onAddCategory}>
          Add Category
        </button>
    </div>
  )
}

export default AddCategory
