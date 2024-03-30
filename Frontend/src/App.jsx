import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>



      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
