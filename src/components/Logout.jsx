import {Navigate} from "react-router-dom"
import { toast } from 'react-toastify';

const Logout = async () => {
    try {
        const options = {
            method: "POST",
            credentials: 'include'
        }

        const backend_url = import.meta.env.VITE_BACKEND_API_URL
        const url = backend_url + `/api/logout`

        const response = await fetch(url, options)
        if (response.status == 201 || response.status == 200) {
            const data = await response.json()   
            toast(data.message)
            window.location.href = "/landing" 
        }

    } catch (error) {
        toast(error)
    }
}

export default Logout;