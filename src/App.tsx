import Header from './components/Header'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import PlayingVideo from './components/PlayingVideo'

import SearchList from './components/SearchList'
import { useState } from 'react'
function App() {
  const [SidebarCollapsed , setSidebarCollapsed]= useState<boolean>(false);

 const toggleSidebar = () =>{
   setSidebarCollapsed(!SidebarCollapsed)
   console.log("The toggle button is " ,SidebarCollapsed )
 }

  return (
    <>
   <BrowserRouter>
   <Header toggleSidebar={toggleSidebar}/>
   
   <Routes>
    <Route path="/" element={<HomePage SidebarCollapsed={SidebarCollapsed} />} />
    <Route path='/video/:id' element={<PlayingVideo   />}/>
    <Route path='/search/:id' element={<SearchList SidebarCollapsed={SidebarCollapsed} />}/>
   </Routes>
   </BrowserRouter>
    

    </>
  )
}

export default App
