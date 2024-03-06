import {RouterProvider} from "react-router-dom";
import {Suspense} from 'react';
import './App.css'
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {AnimatePresence} from "framer-motion"
import { SessionProvider } from './components/SessionContext';

function App() {

  return (
    <>
      <AnimatePresence initial={true} mode={"wait"}>
        <SessionProvider>
          <Suspense fallback={<section style={{backgroundColor:"white", width:"100%", height:"100vh", display:"flex", textAlign:"center", justifyContent:"center", alignItems:"center"}}>
            <h1>Starting....</h1>
            </section>}>
                <RouterProvider router={router} />   
          </Suspense>
        </SessionProvider>
      </AnimatePresence>  
    </>
  )
}

export default App
