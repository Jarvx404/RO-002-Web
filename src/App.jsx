import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import './index.css'

//Pages
import Home from './pages/Home'
import Sponsori from './pages/Sponsori'
import DespreNoi from './pages/DespreNoi'


function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="sponsori" element={<Sponsori />} />
          <Route path="despre-noi" element={<DespreNoi />} />
        </Route>
      </Routes>
    </BrowserRouter>


      
      <AnimatedCursor
      innerSize={12}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </>
  )
}
export default App
