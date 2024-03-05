import {Outlet, Navigate } from "react-router-dom";
import AdminNavbar from "./Navbar";

export default function AdminLayout() {

    return (
        <main>
            <AdminNavbar />
            <Outlet />
        </main>
    )
}