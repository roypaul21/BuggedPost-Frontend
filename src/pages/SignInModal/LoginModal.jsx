import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

export default function LoginModal({loginModalClose}) {

    const [username, setUsername] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("")
    const onSubmit = async(e) => {
        e.preventDefault()

        const data = {
            username,
            userPassword,
        }
        const backend_url = import.meta.env.VITE_BACKEND_API_URL
        const url = backend_url + "/api/login"

        try {
            const options = {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }

            const response = await fetch(url, options)

            if (response.status !== 201 && response.status !== 200) {
                const data = await response.json()
                setErrorMsg(data.message)
                
            } else {
                const data = await response.json()
                toast(data.message)
                loginModalClose()
                window.location.href = "/home-admin"
            } 
            

        } catch (error) {
            alert(error)
        }
    } 


    return (
        <div className="login-section">
            <div>
                <h1>Login</h1>
            </div>

            <form onSubmit={onSubmit}>
                
                <div>
                    <label htmlFor="username-login">Username</label>
                    <input type="text" id="username-login" value={username}  
                           onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="password-login">Password</label>
                    <input type="password" id="password-login" value={userPassword} 
                           onChange={(e) => setUserPassword(e.target.value)} required/>
                </div>
                <div>
                    
                    <button id="login-btn">Login</button>
                    
                    <button  onClick={() => loginModalClose()}>Close</button>
                </div>
            </form>
           
            <div>
                <p>No account yet? <a href="/signup" id="create-one">Create One</a></p>
                <p>{errorMsg}</p>
            </div>
            
        </div>
    )
}