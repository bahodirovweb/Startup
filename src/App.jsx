import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Portfolio from './pages/Portfolio/Portfolio'
import Home from './pages/Home/Home'
import Service from './pages/Services/Service'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/portfolio'} element={<Portfolio/>}/>
        <Route path={'/services'} element={<Service/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
      </Routes>
      
    </div>
  )
}

export default App
