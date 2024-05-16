import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import IndexNavbar from './Components/IndexNavbar';
import Post from './Pages/Post';

function App() {
  return (
    <>


      <BrowserRouter>
        <IndexNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />

          <Route path='/sign-up' element={<SignUp />} />
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post' element={<Post />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
