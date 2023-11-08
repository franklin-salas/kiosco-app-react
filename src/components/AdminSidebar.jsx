import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const AdminSidebar = () => {
    const {logout} = useAuth({middleware: 'auth'})
  return (
    <aside className="md:w-72 h-screen">
        <div className="p-4">
            <img 
            src="/img/logo.svg" 
            alt="imagen Logotipo" 
            className="w-40"
            />
                 </div>
        <nav className="flex flex-col p-4">  
            <Link to= "/admin" className= {` flex gap-4 items-center  px-3 py-2 m-3 hover:bg-yellow-300 cursor-pointer  rounded-lg focus:outline-none
    shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-700/40 `} >Ordenes</Link>
            <Link to= "/admin/productos" className= {` flex gap-4 items-center  px-3 py-2 m-3 hover:bg-yellow-300 cursor-pointer  rounded-lg focus:outline-none
    shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-700/40 `} >Productos</Link>
        </nav>
    <div className="my-5 px-5">
    <button 
          onClick={logout}
          type="button"
          className=" text-center bg-red-500 w-full p-3 font-bold text-white truncate"> 
          Cerrar sesión</button>
    </div>
   
    </aside>
  )
}
