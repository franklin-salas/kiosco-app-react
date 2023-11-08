import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    
    const navegate = useNavigate();
    const onLogout = ()=> {
        navegate('/login',{replace: true})
    }
    return (
        <nav className="p-8  bg-white shadow-sm  rounded-lg  mb-10">

        <ul className='flex items-center justify-between space-x-5 text-xl  font-bold mx-5'>
            <li>
            <NavLink 
                        className={({isActive}) => `inline-block text-gray-700  hover:text-yellow-300   ${isActive? 'active': '' }`} 
                        to="/fff"
                    >
                        Menú
                    </NavLink>
            </li>
            <li>
       

                    <NavLink 
                        className={({isActive}) => `nav-item nav-linkinline-block text-gray-700 hover:text-yellow-300 ${isActive? 'active': '' }`} 
                        to="/"
                    >
                        Resumen
                    </NavLink>

                
            </li>
            <li>
            <NavLink 
                        className={({isActive}) => `nav-item nav-linkinline-block text-gray-700 hover:text-yellow-300 ${isActive? 'active': '' }`} 
                        to="/"
                    >
                        Comprar
                    </NavLink>
            </li>
        </ul>
            

        </nav>
    )
}