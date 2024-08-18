import Header from './components/Header'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import PlayingVideo from './components/PlayingVideo'
import SearchList from './components/SearchList'
function App() {
  return (
    <>

   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path='/video/:id' element={<PlayingVideo/>}/>
    <Route path='/search/:id' element={<SearchList/>}/>
   </Routes>
   </BrowserRouter>
    

    </>
  )
}

export default App
