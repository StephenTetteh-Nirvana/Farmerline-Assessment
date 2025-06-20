import { Routes,Route } from "react-router-dom"
import { SidebarProvider,SidebarTrigger } from "./components/ui/sidebar"
import AppSidebar from "./components/AppSidebar"

import Home from './pages/Home'
import './index.css'

const App = () => {

  return (
    <>
      <SidebarProvider>
        <AppSidebar/>
        <main className="p-4">
          <SidebarTrigger/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </main>
      </SidebarProvider>
    </>
  )
}

export default App
