import Header from './components/Header'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import PlayingVideo from './components/PlayingVideo'
function App() {
  return (
    <>
    <Header/>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path='/video/:id' element={<PlayingVideo/>}/>
   </Routes>
   </BrowserRouter>
    

    </>
  )
}

export default App
