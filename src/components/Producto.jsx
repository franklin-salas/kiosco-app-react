import { formatearDinero } from "../helpers"
import useKiosco from "../hooks/useKiosco"

export default function Producto({producto}) {
    const {nombre, precio, imagen} = producto 
    const {handleClickModal , handleSetProducto} = useKiosco()
  return (
    <div className="border p-3 shadow bg-white rounded-md">
        <div className="overflow-hidden rounded-md bg-white text-gray-700 ">
        <img src={`/img/${imagen}.jpg`} 
        alt="imagen producto"
        className="object-cover h-72 w-full object-center" />
        </div>

        <div className="py-5 px-2">
            <h3 className="text-xl font-semibold leading-snug tracking-normal">{nombre}</h3>
            <p className="mt-5 font-bold text-3xl text-indigo-500">{formatearDinero(precio)}</p>

            <button
            type="button"
            className=" bg-yellow-300 hover:bg-yellow-500 text-white w-full mt-5 p-3 uppercase font-bold rounded-lg focus:outline-none
            shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-700/40"
           
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
