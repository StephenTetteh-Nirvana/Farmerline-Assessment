import { Routes,Route, useLocation } from "react-router-dom"
import { SidebarProvider,SidebarTrigger } from "./components/ui/sidebar"
import { useEffect } from "react"

import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'
import AppSidebar from "./components/AppSidebar"
import ProtectedRoutes from "./components/utils/ProtectedRoutes"

const App = () => {
  const location = useLocation()

  //Basic Logic that sets a "user" key for first time launch of the app.
  useEffect(()=>{
    const userData = localStorage.getItem("User");
    const user = userData !== null ? JSON.parse(userData) : "no user";
    
    if(user === "no user"){
      localStorage.setItem("User",JSON.stringify(false))
    }
    
  },[])

  return (
    <>
      <SidebarProvider>
        {location.pathname !== "/login" && <AppSidebar/>}
        {location.pathname !== "/login" && <SidebarTrigger/>}
        <main className="p-3 w-full min-h-[100vh]">
          <Routes>
            <Route element={<ProtectedRoutes/>}>
              <Route path="/" element={<Home/>}></Route>
            </Route>
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
        </main>
      </SidebarProvider>
    </>
  )
}

export default App
