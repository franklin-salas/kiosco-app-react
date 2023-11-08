import { Link } from "react-router-dom"
import { createRef, useState } from "react"
import { useAuth } from "../hooks/useAuth"

export default function Login() {


  const emailRef = createRef()
  const passwordRef = createRef()
  const [errores, setErrores] = useState({})
  const {login} = useAuth({
    middleware: 'guest',
    url: '/'
}) 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    login(datos,setErrores)

  }
  return (
    <>
    <h1 className="text-4xl font-black  mt-8">Iniciar Sesión</h1>
    <p>Para hacer un pedido debe de iniciar sesión</p>
    <div className="bg-white  shadow-slate-500 shadow-md rounded-md mt-4 px-8 py-10">
    <form  onSubmit={handleSubmit}
          noValidate  >
  
      <div className="mb-4">
        <label htmlFor="email" 
        className="text-slate-800">
          Correo
        </label>
        <input  
         ref={emailRef}
        id="email" 
        type="email"
        name="email"
        placeholder="Tu Correo"
        className="mt-2 w-full p-2 bg-gray-50 border-solid border-2 border-yellow-200 rounded-md outline-4 outline-yellow-300" />
        
        {
        errores.email  && (<div className="text-red-600 ">{errores.email[0]}</div>) 
      }
      </div>

      <div className="mb-4">
        <label htmlFor="password" 
        className="text-slate-800">
          Password
        </label>
        <input  
        ref={passwordRef}
        id="password" 
        type="password"
        name="password"
        placeholder="Tu Password"
        className="mt-2 w-full p-2 bg-gray-50 border-solid border-2 border-yellow-200 rounded-md outline-4 outline-yellow-300" />
        
        {
        errores.password  && (<div className="text-red-600 ">{errores.password[0]}</div>) 
      }
      </div>

      <input 
      type="submit" 
      value="Iniciar"
      className="bg-indigo-600 hover:bg-indigo-800 text-white p-3 mt-2 w-full font-bold cursor-pointer rounded-md uppercase"
       />
    </form>
    </div>
    <nav className="mt-5">
      <Link to ="/auth/registro">
      ¿No tienes Cuenta? registrate
      </Link>
    </nav>
    </>
    
  )
}
