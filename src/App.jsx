import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/NavItems'

function App() {

  return (
    <>
    {/* Nav */}
    <NavItems />
    <Outlet/>
    </>
  )
}

export default App