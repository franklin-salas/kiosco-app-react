import { useState } from "react";
import useKiosco from "../hooks/useKiosco";
import { formatearDinero } from "../helpers";
import { useEffect } from "react";
export default function ModalProducto() {
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);
  const { producto, handleClickModal , handleAgregarProducto, pedido } = useKiosco();
  
  useEffect(() => {

    if(pedido.some( p => p.id === producto.id)){
        const productoEdicion = pedido.filter(p => p.id === producto.id)[0]
        setCantidad(productoEdicion.cantidad)
        setEdicion(true)
    }
  
  
  }, [])
  

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <img
          src={`/img/${producto.imagen}.jpg`}
          alt={`Imagen producto ${producto.nombre}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button type="buttom" onClick={handleClickModal}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


          </button>
        </div>
        <h2 className="text-3xl font-bold mt-5">{producto.nombre}</h2>
        <p className="mt-5 font-black text-5xl text-red-secundary">
          {formatearDinero(producto.precio)}
        </p>

        <div className="flex gap-4 mt-5">
          <button 
          type="button"
          onClick={()=> {
            if(cantidad <= 1) return;
            setCantidad(cantidad - 1);
          }}
          >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>



          </button>
          <p className="text-3xl">{cantidad}</p>

          <button
           type="button"
           onClick={()=> {
             if(cantidad >= 5) return;
             setCantidad(cantidad + 1);
           }}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


          </button>
        </div>
        <button
          type="button"
          className="bg-ambar-primary hover:bg-red-secundary px-5 py-2 mt-5 text-white uppercase rounded-2xl"
          onClick={()=>  {
            handleAgregarProducto({ ...producto, cantidad})
            
            handleClickModal()
          }}
        >
          {edicion? 'Guardar Cambios' : 'Añadir al Pedido'}
        </button>
      </div>
    </div>
  );
}
