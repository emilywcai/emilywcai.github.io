import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/react-gh-pages" element={<Layout />}/>
      </Routes>
    </>
  )
}

export default App
