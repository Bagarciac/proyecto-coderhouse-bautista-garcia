import { useState } from 'react'
import ItemlistContainer from './components/ItemListContainer'
import NavbarContainer from './components/NavbarContainer'
import AppRouter from './router/AppRouter'
function App() {
  

  return (
    <div className='bg-gray-300 min-h-screen'>
      <AppRouter />
    </div>


      
  )
}

export default App
