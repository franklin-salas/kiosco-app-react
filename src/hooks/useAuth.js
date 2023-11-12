import useSWR from "swr"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import clienteAxios from "../config/apiKiosco"

export const useAuth = ( {middleware,url}) => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const navigate = useNavigate()

    const {data:user,error, mutate} = useSWR('/user',() =>
                clienteAxios('/user', {
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                }).then(res => res.data)
                .catch(error => {
                    throw Error(error) 
                 
                  })
                
                )

    const logout = async() =>{
        try {
          await clienteAxios.post('/logout',null,{
            headers: {
              Authorization:`Bearer ${token}`
          } 
          })
          localStorage.removeItem('AUTH_TOKEN')
          await mutate(undefined)
        } catch (error) {
          
          if(!error.response){
            throw Error(error.message) 
          }
  
          if(error.response.status === 500){
            throw Error(error.response.message) 
          } else
          if(error.response.status === 422){
            throw Error(error.response.data.errors) 
          }

        }
    }
    const registro = async (datos,setErrores) =>{
      try {
       
        const {data} = await clienteAxios.post('/registro', datos)
        localStorage.setItem('AUTH_TOKEN',data.token)
        setErrores({})
        await mutate()
      } catch (error) {
      
        if(!error.response){
          return
        }

        if(error.response.status === 500){
          setErrores({ name:['error de servidor']})
        } else
        if(error.response.status === 422){
          setErrores(error.response.data.errors)
        }

      }
    }
    const login = async(datos,setErrores) =>{
        try {
            const {data} = await clienteAxios.post('/login', datos)

            localStorage.setItem('AUTH_TOKEN',data.token)
            setErrores({})
            await mutate()
          } catch (error) {
           
            if(!error.response){
              return;
            }

            if(error.response.status === 500){
              setErrores({ email:['error de servidor']})
            } else
            if(error.response.status === 422){
              setErrores(error.response.data.errors)
            }


           
          }
    }

    useEffect(() => {


      if(middleware === 'guest' && user && user.admin){
        navigate('/admin')
        return
      }
      if(middleware === 'admin' && user && !user.admin){
       
        navigate('/')
        return
      }

      if(middleware === 'guest' && user && url){
        navigate(url)
      }

      if(middleware === 'auth' && error){
        localStorage.removeItem('AUTH_TOKEN');
         mutate(undefined);
        navigate('/auth/login');
      }
      
    }, [user,error])
    

    return {
        login,
        registro,
        logout,
        user,
        error
    }
}