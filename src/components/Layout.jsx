import { Outlet, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClockLoader";

export default function Layout() {
    const [isCredentials, setIsCredentials] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCredentials = async () => {
            try {
                const backend_url = import.meta.env.VITE_BACKEND_API_URL;
                const url = `${backend_url}/api/get_credentials`;
                const options = {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Failed to fetch credentials');
                }
                
                const data = await response.json();
                setIsCredentials(data.cred);
                
            } catch (error) {
                console.error(error);
                setIsCredentials(false); 
            } finally {
                setLoading(false);
            }
        };

        fetchCredentials();
    }, []); 
    
    console.log(isCredentials)

    return (
        <main>
            {loading ? (
                <div className='loader--section'>
                    <ClipLoader size={250} color={"black"} loading={loading} speedMultiplier={2} />
                </div>
            ) : (
                <>
                    {isCredentials != null ? (
                        <>
                            <Navigate to="/home" />
                            <Outlet />
                        </>
                    ) : (
                        <>
                            <Navigate to="/landing" />
                            <Outlet />
                        </>
                    )}
                </>
            )}
        </main>
    );
}
