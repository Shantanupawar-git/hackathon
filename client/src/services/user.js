import axios from 'axios'

export async function userRegister(full_name, email, password, phone_no)
{
    try {
        // create the API url
        const url = `http://localhost:4000/user/register`

        // create the request body
        const body = {
            full_name, email, password, phone_no
        }

        // create post request
        const response = await axios.post(url, body)
        
        // return response
        return response.data

    } catch (error) {
        console.log("Error occured in client/services/user.js", error)
    }
}



export async function loginUser(email, password){
    try {
      const url = `http://localhost:4000/user/login`
  
      const body = {email, password}
  
      const response = await axios.post(url, body)
      return response.data
    } catch (error) {
      console.log(`Error occured in client/services/user.js`, error)
    }
  }