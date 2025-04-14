import axios from "axios";

export async function addCategory(title, description)
{
    try {
        // create the API url
        const url = `http://localhost:4000/category`

        // create the request body
        const body = {
            title, description
        }

        // create post request
        const response = await axios.post(url, body)
        
        // return response
        return response.data

    } catch (error) {
        console.log("Error occured in client/services/addCategory.js", error)
    }
}