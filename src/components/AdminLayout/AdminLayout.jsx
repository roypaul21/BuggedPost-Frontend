import {Outlet, Navigate } from "react-router-dom";
import AdminNavbar from "./Navbar";
import { useContext } from 'react';
import {SessionContext} from "../SessionContext"

export default function AdminLayout() {

    const { sessionToken } = useContext(SessionContext);

    if (!sessionToken) {
        return <Navigate to="/landing" />
    }

    return (
        <main>
            <AdminNavbar />
            <Outlet />
        </main>
    )
}