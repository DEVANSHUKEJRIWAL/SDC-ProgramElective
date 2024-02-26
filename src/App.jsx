import './App.css'
import React from 'react'
import Board from './Dashboard/Board'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignInSide from './Dashboard/Sign'
import Submit from './Dashboard/Submit'
import Dashboard from './AdminDashBoard/Dashboard'
import List from './List/List'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Board />} />
          <Route path="/dashboard/submit" element={<Submit />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/list" element={<List />} />

        </Routes>
      </BrowserRouter>
      {/* <SignInSide /> */}
      {/* <Board /> */}


    </div>
  )
}

export default App

