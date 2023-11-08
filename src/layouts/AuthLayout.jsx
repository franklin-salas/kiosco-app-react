import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <main className="max-w-4xl m-auto md:mt-2 flex flex-col md:flex-row items-center">
       <div className="max-w-xs  w-full">
        <img src="../img/logo.svg" alt="imagen logo" />
       </div>
       <div className="py-5 px-10 w-full">
       <Outlet/>
       </div>
        </main>
  )
}
