import {Outlet, Navigate} from "react-router-dom";
import GuestNavbar from "./Navbar";
import LoginModal from "../../pages/SignInModal/LoginModal";
import React, {useState} from 'react';

import { useContext } from 'react';
import {SessionContext} from "../SessionContext"

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function GuestLayout() {

    const { sessionToken } = useContext(SessionContext);

    if (sessionToken) {
        return <Navigate to="/home" />
    }

    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const LoginOpenedModal = () => {
        if (!isLoginOpen) setIsLoginOpen(true);
    }
    const LoginClosedModal = () => {
        setIsLoginOpen(false);
    } 

    AOS.init({
        offset: 200,
        duration: 300,
        easing: 'ease-out',
        delay: 10,
        debounceDelay: 50,
        throttleDelay: 99,
        once: false, 
        mirror: true
    });

    return (
        <main>
            <GuestNavbar loginModalOpened={LoginOpenedModal} />
            {isLoginOpen && <section className="login-modal"> 
                    <div className="modal-content" data-aos="zoom-in">
                        <LoginModal loginModalClose={LoginClosedModal}/>
                    </div>
            </section>
            }
            <Outlet />       
        </main>
    )
}