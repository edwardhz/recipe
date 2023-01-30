
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import Home from 'pages/Home'
import Cuisine from 'pages/Cuisine'
import SearchItems from 'pages/SearchItems'
import Recipe from 'pages/Recipe'
import  {AnimatePresence} from 'framer-motion' 


const App = () => {

  return (
    <> 
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cuisine/:type" element={<Cuisine/>} />
            <Route path="/searchItems/:search" element={<SearchItems/>} />
            <Route path="/recipe/:id" element={<Recipe/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App