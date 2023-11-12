import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center h-screen  ">
       <div className="max-w-xl flex-1 ">
        <img src="../img/undraw_online.svg" alt="imagen logo" className="w-full" />
       </div>
       <div className="ml-12">
       <Outlet/>
       </div>
        </main>
  )
}
