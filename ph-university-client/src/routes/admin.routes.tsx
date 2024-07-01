import { Children } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

const adminPaths2 = [
    {
        name:'Dashboard',
        path:'/admin/dashboard',
        element:<AdminDashboard/>
    },
    {
        name: 'User Management',
        children: [
            {
                name:'Create Admin',
                path:'/admin/create-admin',
                element:<CreateAdmin/>
            },
            {
                name:'Create Faculty',
                path:'/admin/create-faculty',
                element:<CreateFaculty/>
            },
            {
                name:'Create Student',
                path:'/admin/create-student',
                element:<CreateStudent/>
            },
        ]
    }
]

export const adminPaths = [
    {
        index: true,
        element: <AdminDashboard/>
    },
    {
        path: 'dashboard',
        element: <AdminDashboard/>
    },
    {
        path:"create-student",
        element: <CreateStudent/>
    },
    {
        path:"create-admin",
        element: <CreateAdmin/>
    },
    {
        path:"create-faculty",
        element: <CreateFaculty/>
    },
]