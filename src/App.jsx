import { Route,  BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ContactUs from "./components/HomePage/contact"
import Products from "./components/HomePage/Products"
import AboutPage from "./components/HomePage/AboutPage"


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<AboutPage/>}/>

        
      </Routes>
    </Router>
    </>
  )
}

export default App
