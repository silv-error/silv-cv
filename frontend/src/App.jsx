import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import CursorBg from "./components/CursorBg"
import "./App.css"

function App() {
  return (
    <>
      <div className="h-screen relative overflow-hidden poppins-regular">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"/>
          <div className="absolute inset-0 backdrop-blur-lg "/>
        </div>
        <CursorBg />
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
