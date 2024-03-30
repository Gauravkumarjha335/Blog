import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
       
       
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="/" element={<Home />} />
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
