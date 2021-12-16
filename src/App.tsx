import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/app/Dashboard'
import Home from './pages/general/Home'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
