import useKiosco from "../hooks/useKiosco";

export default function Categoria({categoria}) {
  const {handleClickCategoria, categoria:categoriaActual} = useKiosco()
    const {icono ,id , nombre} = categoria;
  return (
    <div
    
    onClick={() =>handleClickCategoria(id)}
    className= {` flex gap-4 items-center  px-3 py-2 m-3 hover:bg-yellow-300 cursor-pointer  rounded-lg focus:outline-none
    shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-700/40  ${ categoriaActual.id === id ? 'bg-yellow-300 cursor-pointer text-white  ' : 'bg-white'}`}>

        <img 
        src={`img/icono_${icono}.svg`}
        alt="imagen icono"
        className="w-10 h-10 object-contain object-center"
         />

         <p
       
        className="text-lg font-bold truncate"
        
        >
          {nombre}
          </p>
    </div>
  )
}
