import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import  { Toaster } from 'react-hot-toast';
function App() {


  return (
    <>
    <Toaster />
    <Navbar/>
    <Outlet/>
      
    
    </>
  )
}

export default App
