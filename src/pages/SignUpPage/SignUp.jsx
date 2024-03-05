import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import LoginModal from "../SignInModal/LoginModal";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const onSubmit = async(e) => {
        e.preventDefault()

        const data = {
            username,
            userPassword,
            userConfirmPassword
        }

        const backend_url = import.meta.env.VITE_BACKEND_API_URL
        const url = backend_url + "/api/create_user"

        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }

            const response = await fetch(url, options)
            if (response.status !== 201 && response.status !== 200) {
                const data = await response.json()
                alert(data.message)
            } else {
                const data = await response.json()
                openModal()
                toast(data.message)
            }

        } catch (error) {
            alert(error)
        }
    } 

    const openModal = () => {
        if(!isModalOpen) setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const LoginOpenedModal = () => {
        closeModal()
        if (!isLoginOpen) setIsLoginOpen(true);
    }

    const LoginClosedModal = () => {
        setIsLoginOpen(false);
    } 

    
    return (
        <section className="signup-section">
            <ToastContainer />
            {isLoginOpen && <section className="login-modal"> 
                    <div className="modal-content">
                        <LoginModal loginModalClose={LoginClosedModal}/>
                    </div>
            </section>
            }
            {isModalOpen && <section className="signup-modal">
                <div className="modal-content">
                    <div className="signup-modal-section">
                        <h1>User {username} Create Successfully</h1>
                        <div>
                            <button onClick={() => LoginOpenedModal()}>Login</button>
                            <Link to={"/landing"}><button id="return-landing-btn">Return</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            }
            <div className="signup-container">
                <div><h1>SIGN UP</h1></div>
                <form className="signup-content" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="username-signup">Username</label>
                        <input id="username-signup" type="text" value={username} 
                                   onChange={(e) => setUsername(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="password-signup">Password</label>
                        <input id="password-signup" type="password" value={userPassword} 
                                   onChange={(e) => setUserPassword(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="confirm-password-signup">Confirm Password</label>
                        <input id="confirm-password-signup" type="password" value={userConfirmPassword} 
                                   onChange={(e) => setUserConfirmPassword(e.target.value)} required/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}