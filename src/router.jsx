import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { AuthLayout } from "./layouts/AuthLayout";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Registro from "./views/Registro";
import { AdminLayout } from "./layouts/AdminLayout";
import { Ordenes } from "./views/Ordenes";
import { Productos } from "./views/Productos";
import Resumen from "./components/Resumen";
import { Compra } from "./components/Compra";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/> ,
        children: [
            {
                index: true, // es para q carge junto al elemento padre
                element: <Inicio/>
            },
            {
                path:'/resumen',
                element: <Resumen/>
            },
            {
                path:'/compra',
                element: <Compra/>
            }
        ]

    },
    {
        path: '/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element: <Login/>
            },
            {
                path:'/auth/registro',
                element: <Registro/>
            }
        ]
    },
    {
        path: '/admin',
        element:<AdminLayout/>,
        children:[
            {
                index: true,
                element: <Ordenes/>
            },
            {
                path:'/admin/productos',
                element: <Productos/>
            }
        ]
    }


])

export default router;