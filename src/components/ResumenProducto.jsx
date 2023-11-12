import { formatearDinero } from "../helpers";
import useKiosco from "../hooks/useKiosco";


export default function ResumenProducto({producto}) {

    const {handleEditarCantidad, handleEliminarProductoPedido} = useKiosco()
    const {id, precio, nombre, cantidad,imagen} = producto

 return (
    <div className="shadow m-2 p-2 bg-white rounded-md flex justify-between  items-center gap-3  min-w-min">
       <div className=" w-48 h-48 xl:w-16 xl:h-16 overflow-hidden rounded-md  ">
        <img
          src={`/img/${imagen}.jpg`}
          alt={`Imagen producto ${nombre}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" flex flex-col xl:flex-row justify-start gap-4 flex-1  xl:items-center  ">
     
        <p className="text-xl font-bold w-64">{nombre}</p>
        <p className="text-lg font-bold min-w-min w-20 ">Cant: {cantidad}</p>
        <p className="text-lg font-bold text-ambar-primary">
          Precio: {formatearDinero(precio)}
        </p>
        <p className="text-lg text-gray-700">
          Subtotal: {formatearDinero(precio * cantidad)}
        </p>
   
      </div>
      <div className="flex flex-col gap-2 xl:flex-row">
        <button 
          type="button"
          className="bg-sky-700 p-2 text-white rounded-md font-bold uppercase shadow-md "
          onClick={() => handleEditarCantidad(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button
          type="button"
          className="bg-red-700 p-2 text-white rounded-md font-bold uppercase shadow-md text-center "
          onClick={() => handleEliminarProductoPedido(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
