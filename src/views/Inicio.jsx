import useSWR from "swr";
import Producto from "../components/Producto";
import useKiosco from "../hooks/useKiosco";
import clienteAxios from "../config/apiKiosco";
import { Rings } from "react-loader-spinner";

export default function Inicio() {
  const { categoria } = useKiosco();
  const fetcher = () =>
    clienteAxios.get("/productos").then((data) => data.data);
  const { data, error, isLoading } = useSWR("/productos", fetcher, {
    refreshInterval: 1000,
  });

  if (isLoading)
    return (
      <div className="contenedor-loading bg-gray-100 opacity-30">
        <div className="loading">
          <Rings
            height="160"
            width="160"
            color="#f22e3e"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
        </div>
      </div>
    );

  const productos = data.data.filter((p) => categoria.id === p.categoria_id);

  return (
    <>
      <h1 className="text-4xl font-black">{categoria.nombre}</h1>
      <p className="text-2xl my-4">
        Elije y personaliza tu pedido a continuación.
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
}
