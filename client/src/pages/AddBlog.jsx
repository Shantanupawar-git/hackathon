import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function AddBlog() {
  const [info, setInfo] = useState({
    title: "",
    contents: "",
  });
  const navigate = useNavigate;
  const onAdd = async () => {
    if (info.title.length == 0) {
      toast.warn("Please enter title");
    } else if (info.contents.length == 0) {
      toast.warn("Please enter contents");
    } else {
      const result = await createBlog(info.title, info.contents);
      if (result["status"] == "Success") {
        toast.success("Successfully added a blog");
        navigate("/menupage");
      } else {
        toast.error(result.error);
      }
    }
  };

  const onCancel = async () => {
    
    navigate('/menupage')
  };

  return (
    <div>
      <h1 className="page-header">Add Blog</h1>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="">Contents</label>
          <textarea className="form-control" rows={10} />
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle">
            Categories
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button className="dropdown-item" type="button">
              Action
            </button>
            <button className="dropdown-item" type="button">
              Another action
            </button>
            <button className="dropdown-item" type="button">
              Something else here
            </button>
          </div>
          <div id="div1">
            <div className="mt-3">
              <button onClick={onAdd} className="btn btn-success">
                Add
              </button>
            </div>
            <div className="mt-3">
              <button onClick={onCancel} className="btn btn-danger">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
