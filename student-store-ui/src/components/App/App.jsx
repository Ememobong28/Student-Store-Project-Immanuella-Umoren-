import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import "./App.css"
import Search from "../Search/Search"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home />
          <Hero />
          <Search />
        </main>
      </BrowserRouter>
    </div>
  )
}
