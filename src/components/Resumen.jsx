import { useNavigate } from "react-router-dom";
import { formatearDinero } from "../helpers"
import useKiosco from "../hooks/useKiosco"
import ResumenProducto from "./ResumenProducto"

export default function Resumen() {

  const {pedido , total } = useKiosco()
  const comprobarPedido = () => pedido.length === 0;
  const navegate = useNavigate();
  const handleclick = (e) =>{
   
    navegate('/compra');
  }

  return (
    <div className=" py-2 px-5 min-w-min">
      <h1 className="text-4xl font-black">
        Mi Pedido
        </h1>
        <p className="text-lg my-5">
          Aquí podrás ver el resumen y totales de tu pedido
        </p>
        <div className="py-2">
          {
            pedido.length === 0 ? (
              <p className="text-center text-2xl">
                No hay productos en tu pedido
              </p>
            ): (
              
                pedido.map( producto => (
                  <ResumenProducto 
                  key={producto.id}
                  producto = {producto}
                  />
                ))
              
            )
          }
        </div>

        <p className="textxl mt-10">
          Total: {formatearDinero(total)}
        </p>

          <div className="mt-5">
           
            <button
            onClick={handleclick}
            className={  `${comprobarPedido() ? "bg-gray-200" : "bg-ambar-primary hover:bg-red-secundary" } px-5 py-2 rounded-2xl uppercase font-bold text-white text-center w-full cursor-pointer   ` }
           
            disabled= {comprobarPedido()} >Comprar</button>

          </div>
       
    </div>
  )
}
