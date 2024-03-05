import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion as m } from "framer-motion"

export default function DeleteBlog({deleteBlogData = {}, updateCallback, closedModal}) {
    const deleteBlog = async (e) => {
        try {
            const options = {
                method: "DELETE",
                credentials: 'include'
            }

            const backend_url = import.meta.env.VITE_BACKEND_API_URL
            const url = backend_url + `/api/delete_blogs/${deleteBlogData.blog_id}`

            const response = await fetch(url, options)
            if (response.status == 201 || response.status == 200) {
                const data = await response.json()
                updateCallback()
                toast(data.message)       
            }
            else {
                const data = await response.json()
                alert(data.message)
            } 
    
        } catch (error) {
            alert(error)
        }
    
    }

    const closeModal = () => {
        closedModal();
    }


    return (
        <div className="delete-blog-section">
            <div>
                <p>Are you sure you want to remove this post?</p>
                <p>"{deleteBlogData.blog_title}"</p>
            </div>
            <div>
                <m.button type="submit" onClick={() => deleteBlog()}
                            whileTap={{scale:0.9}} 
                            whileHover={{scale:1.01}}
                            transition={{bounceDamping:100, bounceStiffness: 1000}}>
                                Remove
                </m.button>
                <m.button type="submit" onClick={() => closeModal()}
                        whileTap={{scale:0.9}} 
                        whileHover={{scale:1.01}}
                        transition={{bounceDamping:100, bounceStiffness: 1000}}>
                            Cancel
                </m.button>
            </div>  
        </div>
    )
}

