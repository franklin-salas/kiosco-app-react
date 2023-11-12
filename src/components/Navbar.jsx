import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    
    const navegate = useNavigate();
    // const onLogout = ()=> {
    //     navegate('/login',{replace: true})
    // }
    return (
        <nav className=" bg-white shadow-sm  rounded-lg  mb-10">

        <ul className='flex items-center justify-between space-x-5 text-xl  font-bold h-24 mx-5 '>
            <li>
            <NavLink 
                        className={({isActive}) => `inline-block text-gray-700 p-8 hover:text-ambar-primary hover:border-b-4 hover:border-ambar-primary  ${isActive? 'active border-b-4 border-red-secundary ': '' }`} 
                        to="/"
                    >
                        Menú
                    </NavLink>
            </li>
            <li>
       

                    <NavLink 
                        className={({isActive}) => `nav-item nav-linkinline-block p-8 text-gray-700 hover:text-ambar-primary hover:border-b-4 hover:border-ambar-primary  ${isActive? 'active  border-b-4 border-red-secundary': '' }`} 
                        to="/resumen"
                    >
                        Resumen
                    </NavLink>

                
            </li>
            <li>
            <NavLink 
                        className={({isActive}) => `nav-item nav-linkinline-block text-gray-700 p-8 hover:text-ambar-primary hover:border-b-4 hover:border-ambar-primary   ${isActive? 'active  border-b-4 border-red-secundary': '' }`} 
                        to="/compra"
                    >
                        Comprar
                    </NavLink>
            </li>
        </ul>
            

        </nav>
    )
}