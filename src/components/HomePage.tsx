import React from 'react'
import Sidebar from './Sidebar'
import Categories from './Categories'

interface HomepageProp{
  SidebarCollapsed:boolean;
}

const HomePage:React.FC<HomepageProp> = ({SidebarCollapsed}) => {
  return (
    <>
    <div className=' flex  '>
    <Sidebar isCollapsed={SidebarCollapsed} />
    <Categories isCollapsed={SidebarCollapsed} />
     </div>
     </>
   
  )
}

export default HomePage
