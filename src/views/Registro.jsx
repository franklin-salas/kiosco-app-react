import { Link } from "react-router-dom"
import { createRef, useState } from "react"
import { useAuth } from "../hooks/useAuth"
export default function Registro() {

  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const [errores, setErrores] = useState({})
  const {registro} = useAuth({middleware:'guest', url: '/'})
  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }

    registro(datos,setErrores)
    

  }
  return (
    <>
    <h1 className="text-4xl font-black  mt-8">Crea tu cuenta</h1>
    <p>Crea tu cuenta llenando el formulario</p>
    <div className="bg-white  shadow-slate-500 shadow-md rounded-md mt-4 px-8 py-5">
    <form  
    onSubmit={handleSubmit}
    noValidate >
      <div className="mb-4">
        <label htmlFor="name" 
        className="text-slate-800">
          Nombre
        </label>
        <input  
        ref={nameRef}
        id="name" 
        type="text"
        name="name"
        placeholder="Tu Nombre"
        className="mt-2 w-full p-2 bg-gray-50 border-solid border-2 border-yellow-200 rounded-md outline-4 outline-yellow-300" />
    
      {
      
        errores.name && (<div className="text-red-600 ">{errores.name[0]}</div>) 
      }
    
      </div>
      <div className="mb-4">
        <label htmlFor="email" 
        className="text-slate-800">
          Correo
        </label>
        <input  
        id="email" 
        ref={emailRef}
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

      <div className="mb-4">
        <label htmlFor="password_confirmation" 
        className="text-slate-800">
         Repetir Password
        </label>
        <input  
        ref={passwordConfirmationRef}
        id="password_confirmation" 
        type="password"
        name="password_confirmation"
        placeholder="Repetir Password"
        className="mt-2 w-full p-2 bg-gray-50 border-solid border-2 border-yellow-200 rounded-md outline-4 outline-yellow-300" />
    
      </div>
      <input 
      type="submit" 
      value="Crear Cuenta"
      className="bg-indigo-600 hover:bg-indigo-800 text-white p-3 mt-2 w-full font-bold cursor-pointer rounded-md uppercase"
       />
    </form>

    </div>
    
    <nav className="mt-5">
      <Link to ="/auth/login">
      ¿Tienes Cuenta? Inicia sesión
      </Link>
    </nav>
    </>
    
  )
}
