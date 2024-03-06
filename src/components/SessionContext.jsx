import React, { createContext, useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClockLoader";

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [sessionToken, setSessionToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCredentials = async () => {
            try {
                const backend_url = import.meta.env.VITE_BACKEND_API_URL
                const url = `${backend_url}/api/get_credentials`
                const options = {
                    method: 'GET',
                    credentials: 'include',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Failed to fetch credentials')
                }
                
                const data = await response.json()
                setSessionToken(data.cred)
                
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchCredentials()

    }, [])

  return (
    <>
        {loading ? (
            <div className='loader--section'>
                <ClipLoader size={250} color={"black"} loading={loading} speedMultiplier={2} />
            </div>
        ) : ( 
            <SessionContext.Provider value={{ sessionToken }}>
                {children}
            </SessionContext.Provider>
        )}
    </>
  );
};

export { SessionContext, SessionProvider };