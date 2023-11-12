import { formatearDinero } from "../helpers"
import useKiosco from "../hooks/useKiosco"

export default function Producto({producto}) {
    const {nombre, precio, imagen} = producto 
    const {handleClickModal , handleSetProducto} = useKiosco()
  return (
    <div className=" shadow-lg transition-all duration-300 ease-out hover:shadow-2xl hover:translate-y-2  bg-white rounded-2xl overflow-hidden ">
        <div className=" text-gray-800  h-56">
        <img src={`/img/${imagen}.jpg`} 
        alt="imagen producto"
        className="object-cover h-full " />
        </div>

        <div className="py-3 px-2 h-44 flex flex-col">
           <div className="flex-1">
           <h3 className="text-lg font-semibold leading-snug tracking-normal">{nombre}</h3>
            <p className=" font-bold text-xl text-red-secundary">{formatearDinero(precio)}</p>
           </div>

            <button
            type="button"
            className=" bg-ambar-primary hover:bg-red-secundary text-white w-full mt-5 p-3   uppercase font-bold rounded-2xl focus:outline-none
            shadow-xl transition-all hover:shadow-2xl"
           
            onClick={() => {
              handleClickModal();
              handleSetProducto(producto); }
              }>
                Agregar
            </button>
        </div>
    </div>
  )
}
