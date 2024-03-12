import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership";
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    
      <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />}/>
        <Route path="/leadership" element={<Leadership />} />
			</Routes>
  )
}
