import { createContext , useState} from "react";
import { toast } from "react-toastify";
import { categorias as categoriasDB } from "../data/categorias"
import { useEffect } from "react";
import clienteAxios from "../config/apiKiosco";

const KioscoContext = createContext()

const KioscoProvider = ( {children}) => {
    

    const [categorias, setCategorias] = useState([])
    const [categoria, setCategoria] = useState({})
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)
    

    const obtenerCategorias =  async () => {
       try {

       
        const {data} = await clienteAxios.get('/categorias')
        
        setCategorias(data.data)
        setCategoria(data.data[0])
       
       } catch (error) {
        console.log(error)
       }


    }
    useEffect(() => {
        obtenerCategorias()
      
    }, [])

    useEffect(() => {
      const nuevoTotal = pedido.reduce((total, p) => (p.precio * p.cantidad) + total , 0)
      setTotal(nuevoTotal)
    
    
    }, [pedido])

   
    
    const handleClickCategoria = (id) => {
        const actual = categorias.find( (c) => c.id === id)
        setCategoria(actual)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }
    const handleSetProducto = (producto) => {
        setProducto(producto)
    }

    const handleAgregarProducto = ({categoria_id , ...product}) => {
     
        if(pedido.some( p => p.id === product.id)){
            const pedidoActual = pedido.map(p => p.id === product.id ? product : p )
          
           setPedido(pedidoActual)
           toast.success("Guardado correctamente")
        }else{
            setPedido([...pedido, product])
            toast.success("Agregado al pedido")
        }

        
    }
    const handleEliminarProductoPedido = (id) => {
        const pedidoActualizado = pedido.filter( p => p.id !== id)
        setPedido(pedidoActualizado)
        toast.success("Eliminado del pedido")
    }

    const handleEditarCantidad = (id) => {
        const productoActualizar = pedido.find( (p) => p.id === id)
        setProducto(productoActualizar)
        setModal(!modal)
    }

    const handleSubmitNuevaOrden = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
          const {data} =  await clienteAxios.post('/pedidos',
            {
                total,
                productos: pedido.map((p) => ({
                    id:p.id,
                    candidad:p.candidad 
                    }))
            },
            {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            })
            toast.success(data.message)
            setTimeout(() => {
                setPedido([])
            }, 1000);
        } catch (error) {
            toast.warning('Error en el pedido')
        }

    }


    return (
        <KioscoContext.Provider
        value={ {
            categorias,
            categoria,
            handleClickCategoria,
            modal,
            handleClickModal,
            producto,
            handleSetProducto,
            pedido,
            handleAgregarProducto,
            handleEditarCantidad,
            handleEliminarProductoPedido,
            total,
            handleSubmitNuevaOrden
            
        }}
        >{children}</KioscoContext.Provider>
        )
}

export {
    KioscoProvider
}

export default KioscoContext