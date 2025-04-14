import axios from "axios";

export async function viewAllBlog()
{
    try {
        // create the API url
        const url = ``

        // create the request body
        const body = {
            id, title, contents, created_time, user_Id
        }

        // create post request
        const response = await axios.post(url, body)
        
        // return response
        return response.data

    } catch (error) {
        console.log("Error occured in client/services/viewAllBlog.js", error)
    }
}