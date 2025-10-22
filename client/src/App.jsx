import React from 'react'
import { Routes , Route } from 'react-router-dom'


import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gray-300'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buycredit' element={<BuyCredit/>}/>
        <Route path='/result' element={<Result/>}/>
      
      </Routes>
    </div>
  )
}

export default App
