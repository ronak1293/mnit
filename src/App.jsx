import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Publications from './components/Publications'
import Researchprojects from './components/Researchprojects'
import Layout from './components/Layout'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='publications' element={<Publications/>}/>
        <Route path='researchprojects' element={<Researchprojects/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
