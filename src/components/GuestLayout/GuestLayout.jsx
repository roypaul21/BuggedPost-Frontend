import {Outlet } from "react-router-dom";
import GuestNavbar from "./Navbar";
import LoginModal from "../../pages/SignInModal/LoginModal";
import React, {useState} from 'react';

export default function GuestLayout() {
    
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const LoginOpenedModal = () => {
        if (!isLoginOpen) setIsLoginOpen(true);
    }
    const LoginClosedModal = () => {
        setIsLoginOpen(false);
    } 

    return (
        <main>
            <GuestNavbar loginModalOpened={LoginOpenedModal} />
            {isLoginOpen && <section className="login-modal"> 
                    <div className="modal-content">
                        <LoginModal loginModalClose={LoginClosedModal}/>
                    </div>
            </section>
            }
            <Outlet />       
        </main>
    )
}