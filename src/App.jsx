import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"

import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />}/>
            <Route path="ChiSiamo" element={<ChiSiamo />}/>
            <Route path="Prodotti" element={<Prodotti />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
