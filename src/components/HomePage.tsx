import React from 'react'
import Sidebar from './Sidebar'
import Categories from './Categories'
const HomePage:React.FC = () => {
  return (
    <>
    <div className=' flex  '>
    <Sidebar/>
    <Categories/>
     </div>
     </>
   
  )
}

export default HomePage
