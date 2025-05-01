import Banner from "./Components/Home/Banner"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <div className="pt-[1.5rem]">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Banner />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
