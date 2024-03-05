import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from 'react';


const router = createBrowserRouter([
    {
        path: "/",
        Component: lazy(() => import('./components/Layout.jsx')),
        children: [
            {
                path: "/",
                Component: lazy(() => import('./components/AdminLayout/AdminLayout.jsx')),
                children: [
                        {
                            path: "/my-post",
                            Component: lazy(() => import('./pages/HomePage/HomeAdmin'))
                        },
                        {
                            path: "/create-blog",
                            Component: lazy(() => import    ('./pages/CreateBlogPage'))
                        },    
                        {
                            path: "/home",
                            Component: lazy(() => import    ('./pages/AllPostPage'))
                        },    
                ]
            },
        
            {
                path: "/",
                Component: lazy(() => import('./components/GuestLayout/GuestLayout.jsx')),
                children: [
                    {
                        path: "/landing",
                        Component: lazy(() => import('./pages/LandingPage'))
                    },
                    {
                        path: "/signup",
                        Component: lazy(() => import('./pages/SignUpPage'))
                    },
                ]
                
            },
        ]
    },
   

    {
        path: "*",
        Component: lazy(() => import('./pages/NotFoundPage/NotFound.jsx'))
    }

])

export default router;