import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import LoginModal from "../SignInModal/LoginModal";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

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

    AOS.init({
        offset: 200,
        easing: 'ease-out',
        debounceDelay: 50,
        throttleDelay: 99,
        once: false, 
        mirror: true
    });

    
    return (
        <section className="signup-section">
            <ToastContainer />
            {isLoginOpen && <section className="login-modal"> 
                    <div className="modal-content" data-aos="zoom-in">
                        <LoginModal loginModalClose={LoginClosedModal}/>
                    </div>
            </section>
            }
            {isModalOpen && <section className="signup-modal">
                <div className="modal-content" data-aos="zoom-in">
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
                <div><h1 data-aos="slide-up" data-aos-duration="300" data-aos-delay="100" >SIGN UP</h1></div>
                <form className="signup-content" onSubmit={onSubmit}>
                    <div>
                        <div>
                            <label htmlFor="username-signup" data-aos="slide-up" data-aos-duration="300" data-aos-delay="100">Username</label>
                        </div>
                        <div>
                            <input id="username-signup" type="text" value={username} 
                                    onChange={(e) => setUsername(e.target.value)} data-aos="slide-right" data-aos-delay="500" required/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="password-signup" data-aos="slide-up" data-aos-duration="300" data-aos-delay="100" >Password</label>
                        </div>
                        <div>
                            <input id="password-signup" type="password" value={userPassword} 
                                    onChange={(e) => setUserPassword(e.target.value)} data-aos="slide-right" data-aos-delay="500" required/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="confirm-password-signup"  data-aos="slide-up" data-aos-duration="300" data-aos-delay="100">Confirm Password</label>
                        </div>
                        <div>
                            <input id="confirm-password-signup" type="password" value={userConfirmPassword} 
                                    onChange={(e) => setUserConfirmPassword(e.target.value)} data-aos="slide-right" data-aos-delay="500" required/>
                        </div>
                    </div>
                    <div>
                        <button type="submit" data-aos="slide-up" data-aos-delay="1000">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}