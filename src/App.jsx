import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Products from "./Pages/Products"

function App() {

  return (
    <div className="bg-black h-screen">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
