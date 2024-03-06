import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { IoSearch } from "react-icons/io5";
import { motion as m } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function HomePage(){
    const [blogs, setBlogs] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [isNotBlog, setIsNotBlog] = useState(false);
    
    const handleSearchInputChange = (event) => {
        const inputValue = event.target.value;
        const sanitizedInputValue = inputValue.replace(/[^a-zA-Z0-9\s]/g, '');
        setSearchInput(sanitizedInputValue);
    };

    const preventFormSubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    useEffect(() => {
        fetchBlogs()
    }, [searchInput]);
    
    const fetchBlogs = async () => {
        const backend_url = import.meta.env.VITE_BACKEND_API_URL
        let url = backend_url + "/api/blogs"
        try{
            if (searchInput) {
                url = url + `/${searchInput}`
            }
            isBlogExist()
            let response = await fetch(url,
                {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'include',
                }
            )
            let data = await response.json()

            if (data.blogs.length == 0) { 
                console.log("Blog's Doesnt Exist")
                isBlogNotExist()
            }
            setBlogs(data.blogs)

        } catch(error) {
            isBlogNotExist()
        }
        
    } 

    //blogs
    const isBlogNotExist = () => {
        setIsNotBlog(true)
    }

    const isBlogExist = () => {
        setIsNotBlog(false)
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

    return(
        <section className="home-section">
            <ToastContainer />
            <div className="home-section-header"><h1 data-aos="slide-down" data-aos-delay="800">Home</h1></div>
            <m.div className='home-section-container' initial={{y:"100%"}} animate={{y:"0%"}} transition={{duration: 0.75, ease: "easeOut"}} exit={{opacity:1}}>
                <form className="search-form">
                    <div>
                        <div className="search-bar" data-aos="slide-right" data-aos-delay="1000">
                            <IoSearch/>
                            <input placeholder="type search post" id="search-input" 
                                value={searchInput} 
                                onChange={handleSearchInputChange}
                                onKeyDown={preventFormSubmit}
                                className="search-input"
                                />
                        </div>
                    </div>
                </form>
                {isNotBlog && 
                <div className='home-section-content'>
                    <div className='blog-contents'>
                        <div>
                            <p>Sorry Post Doesnt Exist</p>
                            <p>{new Date().toLocaleString() + ""}</p>
                        </div>
                        <div></div>
                        <div>
                            <p>Lorem ipsum dolor sit amet. In voluptatem voluptas est magni sunt non voluptatibus similique aut molestiae repudiandae rem eligendi laudantium eos neque sint! Aut ullam libero eos soluta praesentium aut assumenda numquam ex deserunt adipisci est modi dolor quo maxime totam est quia quia.</p>
                        </div>
                    </div>
                </div>

                }
                {blogs.map(blog => (
                    <div className='home-section-content' key={blog.blog_id} data-aos="fade-up">
                        <div className="profile-name">
                            <p>{blog.username}</p>
                        </div>
                        <div className='blog-contents'>
                            <div>
                                <p>{blog.blog_title}</p>
                                <p>{blog.blog_date}</p>
                            </div>
                            <div></div>
                            <div>
                                <p>{blog.blog_content}</p>
                            </div>
                        </div>
                    </div>
                ))} 
            </m.div>
        </section>
    )
}