import {motion as m} from "framer-motion"
import {container, item} from "./animation";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import LoginModal from "../SignInModal/LoginModal";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function HeroSection({}) {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const LoginOpenedModal = () => {
        if (!isLoginOpen) setIsLoginOpen(true);
    }

    const LoginClosedModal = () => {
        setIsLoginOpen(false);
    }

    return(
        <section className="hero-section">
            {isLoginOpen && <section className="login-modal"> 
                    <div className="modal-content" data-aos="zoom-in">
                        <LoginModal loginModalClose={LoginClosedModal}/>
                    </div>
            </section>
            }
          <m.div initial={{y:"100%"}} animate={{y:"0%"}} transition={{duration: 0.5, ease: "easeOut"}} exit={{opacity:1}}>
                <m.div className="hero-section-header" variants={container} initial="hidden" animate="show">
                    <div className="hero-section-title">
                        <m.h1 variants={item}>
                            BUGGED? <span>THREAD POST</span> 
                        </m.h1>
                    </div>
                    <div className="hero-section-body">
                        <m.h1 variants={item}>
                            Got Something To Say? BZZZZZ
                        </m.h1>
                    </div>

                    <div className="hero-section-btn">  
                        <Link to="/about">
                            <m.button className="hero-btn" variants={item}>About This</m.button>
                        </Link>
                        <m.button className="hero-btn" variants={item} onClick={() => LoginOpenedModal()}>Get Started</m.button> 
                    </div>
                </m.div>
            </m.div>
            
        </section>
    )
}