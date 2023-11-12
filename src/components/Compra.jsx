import React, { createRef, useState } from 'react'
import useKiosco from '../hooks/useKiosco';
import { formatearDinero } from '../helpers';

export const Compra = () => {

    const nameRef = createRef();
    const [errores, setErrores] = useState({});
    const { handleSubmitNuevaOrden,total,pedido} = useKiosco();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;

        if(name.trim().length == 0){
          setErrores({name:['El campo es obligatorio']})
        }else{
          handleSubmitNuevaOrden(name,setErrores);
        }
        
    
      }


  return (
    <>
       <h1 className="text-4xl font-black  text-ambar-primary mt-8">Compra</h1>
    <p>Registra un nombre para llamarte</p>


    { pedido.length === 0 ?(  <div className='w-72 mx-auto mt-12'>
           <p className='text-center text-2xl'>No hay productos en tu Pedido.</p>
           <img src="../img/undraw_empty_cart.svg" alt="empty product" />
          </div>): ( <div className="bg-white   shadow-sm rounded-md mt-4 px-8 py-10 md:flex">
    <div className="md:w-1/2 mb-3">
    <form  onSubmit={handleSubmit}
          noValidate  >
  
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
        placeholder="Nombre o Nick"
        className="mt-2 w-full p-2 bg-gray-50 border-solid border-2 rounded-md outline-1 outline-gray-200" />
        
        {
        errores.name  && (<div className="text-red-600 ">{errores.name[0]}</div>) 
      }
      </div>

     <div>
      <p className="font-bold text-3xl text-gray-700 text-center">Total</p>
      <p className="my-2 font-bold text-5xl text-red-secundary text-center">{formatearDinero(total)}</p>
      
     </div>

      <input 
      type="submit" 
      value="Comfirmar compra"
      className="bg-ambar-primary hover:bg-red-secundary text-white p-3 mt-2 w-full font-bold cursor-pointer rounded-2xl uppercase"
       />
    </form>
    </div>

    <div className="md:w-1/2">
      <img src="/img/undraw_eating_together.svg" alt="cena img"
      className=" w-full object-cover" />
    </div>
    </div>)
      
    }
   
    </>
  )
}
