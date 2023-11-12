import { useNavigate } from "react-router-dom";
import useKiosco from "../hooks/useKiosco";

export default function Categoria({categoria}) {
  const {handleClickCategoria, categoria:categoriaActual} = useKiosco();
    const {icono ,id , nombre} = categoria;
    const navegate = useNavigate();

    const redirect = (id) => {
      handleClickCategoria(id);
      navegate('/',{replace: true})
    };


  return (
    <div
    
    onClick={() =>redirect(id)}
    className= {` flex gap-4 items-center  px-3 py-2 m-3 hover:bg-red-secundary cursor-pointer  rounded-2xl focus:outline-none hover:text-white
     shadow-md transition-all duration-300 ease-out hover:shadow-2xl hover:translate-y-2  ${ categoriaActual.id === id ? 'bg-ambar-primary cursor-pointer text-white  ' : 'bg-white text-gray-700'}`}>

        <img 
        src={`img/icono_${icono}.svg`}
        alt="imagen icono"
        className="w-10 h-10 object-contain object-center"
         />

         <p
       
        className="text-lg font-bold truncate  "
        
        >
          {nombre}
          </p>
    </div>
  )
}
