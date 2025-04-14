import axios from "axios";

export async function showAllCategory()
{
    try {
        // create the API url
        const url = `http://localhost:4000/category`

        // create the request body
        const body = {
        }

        // create post request
        const response = await axios.get(url, body)
        
        // return response

        // console.log(response.data)
        return response.data
        
        

    } catch (error) {
        console.log("Error occured in client/services/addCategory.js", error)
    }
}